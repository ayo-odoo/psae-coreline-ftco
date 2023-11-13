/** @odoo-module **/

import models from "point_of_sale.models";

import utils from "web.utils";
import field_utils from "web.field_utils";

var round_pr = utils.round_precision;

models.load_fields("res.partner", ["title"]);
models.load_fields("pos.order.line", ["bundle_id"]);

models.load_models([{
    model: "res.partner.title",
    domain: [],
    fields: ["name"],
    loaded: function (pos, partnerTitles) {
        pos.partnerTitles = partnerTitles;
    }
}]);

models.load_models([{
    model: "pos.bundle",
    domain: [],
    fields: ["name", "product_ids"],
    loaded: function (pos, posBundles) {
        pos.posBundles = posBundles;
        pos.posBundleById = Object.fromEntries(posBundles.map(obj => [obj.id, obj]));
    }
}]);

var order_line_super = models.Orderline.prototype;
models.Orderline = models.Orderline.extend({

    initialize: function () {
        this.bundle_id = null;
        order_line_super.initialize.apply(this, arguments);
    },

    init_from_JSON: function(json) {
        order_line_super.init_from_JSON.apply(this, arguments);
        this.bundle_id = json.bundle_id || null;
    },

    export_as_JSON: function() {
        var json = order_line_super.export_as_JSON.apply(this,arguments);
        if (this.bundle_id){
            json.bundle_id = this.bundle_id.id;
        }
        return json;
    },

    setBundleId: function (bundle_id) {
        this.bundle_id = bundle_id;
        this.trigger('change', this);
    },

    export_for_printing: function () {
        return {
            ...order_line_super.export_for_printing.apply(this, arguments),
            bundle_id: this.bundle_id,
        }
    },

    // Inherit "OverWrite"
    set_quantity: function(quantity, keep_price){
        this.order.assert_editable();
        if(quantity === 'remove'){
            if (this.refunded_orderline_id in this.pos.toRefundLines) {
                delete this.pos.toRefundLines[this.refunded_orderline_id];
            }

            //------My Edit------
            const bundle_id = this.bundle_id;
            if (bundle_id){
                const lines_ids = this.order.get_orderlines();
                const new_lines_ids = lines_ids.filter((line_id) => line_id.bundle_id && line_id.bundle_id.id == bundle_id.id);
                this.order.orderlines.remove(new_lines_ids);
            }
            else {
                this.order.remove_orderline(this);
            }
            //------My Edit------

            return true;
        }else{
            var quant = typeof(quantity) === 'number' ? quantity : (field_utils.parse.float('' + quantity) || 0);
            if (this.refunded_orderline_id in this.pos.toRefundLines) {
                const toRefundDetail = this.pos.toRefundLines[this.refunded_orderline_id];
                const maxQtyToRefund = toRefundDetail.orderline.qty - toRefundDetail.orderline.refundedQty
                if (quant > 0) {
                    Gui.showPopup('ErrorPopup', {
                        title: _t('Positive quantity not allowed'),
                        body: _t('Only a negative quantity is allowed for this refund line. Click on +/- to modify the quantity to be refunded.')
                    });
                    return false;
                } else if (quant == 0) {
                    toRefundDetail.qty = 0;
                } else if (-quant <= maxQtyToRefund) {
                    toRefundDetail.qty = -quant;
                } else {
                    Gui.showPopup('ErrorPopup', {
                        title: _t('Greater than allowed'),
                        body: _.str.sprintf(
                            _t('The requested quantity to be refunded is higher than the refundable quantity of %s.'),
                            this.pos.formatProductQty(maxQtyToRefund)
                        ),
                    });
                    return false;
                }
            }
            var unit = this.get_unit();
            if(unit){
                if (unit.rounding) {
                    var decimals = this.pos.dp['Product Unit of Measure'];
                    var rounding = Math.max(unit.rounding, Math.pow(10, -decimals));
                    this.quantity    = round_pr(quant, rounding);
                    this.quantityStr = field_utils.format.float(this.quantity, {digits: [69, decimals]});
                } else {
                    this.quantity    = round_pr(quant, 1);
                    this.quantityStr = this.quantity.toFixed(0);
                }
            }else{
                this.quantity    = quant;
                this.quantityStr = '' + this.quantity;
            }
        }

        // just like in sale.order changing the quantity will recompute the unit price
        if (!keep_price && !this.price_manually_set && !(
            this.pos.config.product_configurator && _.some(this.product.attribute_line_ids, (id) => id in this.pos.attributes_by_ptal_id))){
            this.set_unit_price(this.product.get_price(this.order.pricelist, this.get_quantity(), this.get_price_extra()));
            this.order.fix_tax_included_price(this);
        }
        this.trigger('change', this);
        return true;
    },

});

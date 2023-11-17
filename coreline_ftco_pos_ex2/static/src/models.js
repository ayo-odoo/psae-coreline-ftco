/** @odoo-module **/
import models from "point_of_sale.models";

models.load_models([{
    model:  'pos.bundle',
    fields: ['name', 'product_ids'],
    domain: [['product_ids', '!=', false]],
    loaded: function (self, bundles) {
        self.bundles = bundles;
        if (!self.config.limit_categories) {
            self.bundles = bundles;
        } else {
            self.bundles = [];
            const pos_product_ids = Object.keys(self.db.product_by_id).map(key => parseInt(key));
            for (let bundle of bundles) {
                let result = bundle.product_ids.every(function(product) {
                    return pos_product_ids.includes(product);
                });
                if (result){
                    self.bundles.push(bundle);
                }
            }
        }
    },
}]);

const _order_super = models.Order.prototype;
models.Order = models.Order.extend({
    set_orderline_options: function(orderline, options) {
        _order_super.set_orderline_options.apply(this, arguments);
        if(options.bundle !== undefined){
            orderline.setBundle(options.bundle);
        }
    },
    remove_orderline: function(line){
        const line_bundle = line.bundle;
        _order_super.remove_orderline.apply(this, arguments);
        if (line_bundle && line.quantity == 0){
            const bundle_lines = this.get_orderlines().filter(function(lineObj) {return lineObj.bundle == line_bundle;});
            for (let bundle_line of bundle_lines) {
                this.remove_orderline(bundle_line);
            }
        }
    },
});


const _orderline_super = models.Orderline.prototype;
models.Orderline = models.Orderline.extend({
    initialize: function () {
        this.bundle = false;
        return _orderline_super.initialize.apply(this, arguments);
    },
    init_from_JSON: function (json) {
        _orderline_super.init_from_JSON.apply(this, arguments);
        this.bundle = json.bundle || false;
    },
    export_as_JSON: function () {
        return {
            ..._orderline_super.export_as_JSON.apply(this, arguments),
            bundle: this.bundle,
            bundle_id: this.bundle.id,
        };
    },
    export_for_printing: function () {
        return {
            ..._orderline_super.export_for_printing.apply(this, arguments),
            bundle: this.bundle,
        }
    },
    can_be_merged_with: function(orderline){
        const res = _orderline_super.can_be_merged_with.apply(this, arguments);
        if (res && ((orderline.bundle && (!this.bundle || orderline.bundle != this.bundle)) || (!orderline.bundle && this.bundle)))
            return false;
        return res;
    },
    setBundle: function (bundle) {
        this.bundle = bundle;
        this.trigger("change", this);
    },
});

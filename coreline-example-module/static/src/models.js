/** @odoo-module **/
import models from "point_of_sale.models";

models.load_fields("product.product", ["my_field"]);

models.load_fields("res.partner", ["business_type_id"]);

models.load_fields("pos.payment.method", ["requires_payment_id"]);

models.load_models([{
    model: "business.type",
    domain: [],
    fields: ["name"],
    loaded: function (pos, businessTypes) {
        pos.businessTypes = businessTypes;
        pos.businessTypeById = Object.fromEntries(businessTypes.map(type => [type.id, type]));
    },
}]);


const _order_super = models.Order.prototype;
models.Order = models.Order.extend({
    initialize: function () {
        this.myField = "";

        return _order_super.initialize.apply(this, arguments);
    },
    init_from_JSON: function (json) {
        _order_super.init_from_JSON.apply(this, arguments);

        this.myField = json.my_field || "";
    },
    export_as_JSON: function () {
        return {
            ..._order_super.export_as_JSON.apply(this, arguments),
            my_field: this.myField,
        };
    },
    setMyField: function (myField) {
        this.myField = myField;
        this.trigger("change", this);
    },
});

const _orderline_super = models.Orderline.prototype;
models.Orderline = models.Orderline.extend({
    initialize: function () {
        this.score = 0;

        return _orderline_super.initialize.apply(this, arguments);
    },
    init_from_JSON: function (json) {
        _orderline_super.init_from_JSON.apply(this, arguments);
        this.score = json.score || 0;
    },
    export_as_JSON: function () {
        return {
            ..._orderline_super.export_as_JSON.apply(this, arguments),
            score: +this.score,
        };
    },
    setScore: function (score) {
        this.score = score;
        this.trigger("change", this);
    },
    export_for_printing: function () {
        return {
            ..._orderline_super.export_for_printing.apply(this, arguments),
            score: this.score,
        }
    }
});

const _paymentline_super = models.Paymentline.prototype;
models.Paymentline = models.Paymentline.extend({
    initialize: function () {
        this.delivery_payment_id = "";
        return _paymentline_super.initialize.apply(this, arguments);
    },
    init_from_JSON: function (json) {
        if (json.delivery_payment_id) {
            this.delivery_payment_id = json.delivery_payment_id;
        }

        return _paymentline_super.init_from_JSON.apply(this, arguments);
    },
    export_as_JSON: function () {
        return {
            ..._paymentline_super.export_as_JSON.apply(this, arguments),
            delivery_payment_id: this.delivery_payment_id,
        };
    },
    set_delivery_payment_id(dpid) {
        this.delivery_payment_id = dpid;
        this.trigger("change", this);
    },
});
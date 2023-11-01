/** @odoo-module **/
import models from "point_of_sale.models";

models.load_fields("product.product", ["my_field"]);


const _order_super = models.Order.prototype;
models.Order = models.Order.extend({
    initialize: function() {
      this.myField = "";

      return _order_super.initialize.apply(this, arguments);
    },
    init_from_JSON: function(json) {
        _order_super.init_from_JSON.apply(this, arguments);

        this.myField = json.my_field || "";
    },
    export_as_JSON: function() {
        return {
            ..._order_super.export_as_JSON.apply(this, arguments),
            my_field: this.myField,
        }
    },
    setMyField: function(myField) {
        this.myField = myField;
        this.trigger("change", this);
    }
});

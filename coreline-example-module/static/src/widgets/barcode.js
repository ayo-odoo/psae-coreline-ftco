/** @odoo-module **/
import AbstractField from "web.AbstractField";
import field_registry from "web.field_registry";

const BarcodeWidget = AbstractField.extend({
    tagName: "article",
    supportedFieldTypes: ['char'],
    className: "mb-5",

    _render() {
        const img = $("<img>");

        img.attr("src", "/report/barcode/Code128/" + this.value);

        this.$el.empty().append(img);
    }

});

field_registry.add("my_barcode", BarcodeWidget);

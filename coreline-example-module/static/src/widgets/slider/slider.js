/** @odoo-module **/
import AbstractFieldOwl from "web.AbstractFieldOwl";
import registry from "web.field_registry_owl";

export class Slider extends AbstractFieldOwl {
    constructor(...args) {
        super(...args);

        debugger
    }

    _handleSliderChange(event) {
        this._setValue(event.target.value);
    }
}

Slider.template = "coreline.slider";

registry.add("slider", Slider);

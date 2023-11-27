/** @odoo-module **/
import publicWidget from "web.public.widget";
import options from "web_editor.snippets.options";

publicWidget.registry.Coreline = publicWidget.Widget.extend({
    selector: ".s_my_snippet form",
    events: {
        "submit": "_onSubmit",
    },
    _onSubmit: function (ev) {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);

        const message = Array.from(formData.values()).join(" ");

        alert(`Hello, ${message}`);
    },
});

options.registry.coreline = options.Class.extend({
    cleanForSave: function () {
        return this._super.apply(this, arguments);
    },
});

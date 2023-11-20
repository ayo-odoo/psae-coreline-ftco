/** @odoo-module **/
import {FieldSelection} from "web.relational_fields";
import field_registry from "web.field_registry";
import {_t} from "web.core";

export const MySelectionField = FieldSelection.extend({
    _onChange: function (event) {
        this._super.apply(this, arguments);

        if (+event.target.value.replace(/['"]/g, "") === 8) {
            this.displayNotification({
                type: "warning",
                title: _t("Warning"),
                message: _t("You have selected the value 8. Printing report..."),
                sticky: true,
            });

            this.do_action("account.account_invoices", {
                additional_context: {
                    active_ids: this.record.res_ids,
                },
            });
        }
    },
});

field_registry.add("my_selection_field", MySelectionField);

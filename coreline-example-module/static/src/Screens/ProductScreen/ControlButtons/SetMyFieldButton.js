/** @odoo-module **/
import PosComponent from "point_of_sale.PosComponent";
import Registries from "point_of_sale.Registries";
import ProductScreen from "point_of_sale.ProductScreen";

export class SetMyFieldButton extends PosComponent {
    get currentOrder() {
        return this.env.pos.get_order();
    }

    get classes () {
        return {
            "control-button": true,
            highlight: !!this.currentOrder.myField,
        };
    }

    async onClick() {
        const {confirmed, payload} = await this.showPopup("TextInputPopup", {
            title: this.env._t("Enter Promotion or Coupon Code"),
            startingValue: this.currentOrder.myField,
        });

        if (!confirmed) {
            return;
        }

        this.currentOrder.setMyField(payload);
    }
}

SetMyFieldButton.template = "SetMyFieldButton";

ProductScreen.addControlButton({
    component: SetMyFieldButton,
    condition: () => true,
});

Registries.Component.add(SetMyFieldButton);

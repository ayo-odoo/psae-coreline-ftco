/** @odoo-module **/
import PosComponent from "point_of_sale.PosComponent";
import Registries from "point_of_sale.Registries";
import ProductScreen from "point_of_sale.ProductScreen";

export class SetScoreButton extends PosComponent {
    get currentOrderline() {
        return this.env.pos.get_order().get_selected_orderline();
    }

    get classes () {
        return {
            "control-button": true,
            highlight: !!this.currentOrderline,
        };
    }

    async onClick() {
        const {confirmed, payload} = await this.showPopup("NumberPopup", {
            title: this.env._t("Set Score"),
            startingValue: this.currentOrderline.score,
        });

        if (!confirmed) {
            return;
        }

        this.currentOrderline.setScore(+payload);
    }
}

SetScoreButton.template = "SetScoreButton";

ProductScreen.addControlButton({
    component: SetScoreButton,
    condition: () => true,
});

Registries.Component.add(SetScoreButton);

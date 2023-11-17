/** @odoo-module **/
import PosComponent from "point_of_sale.PosComponent";
import Registries from "point_of_sale.Registries";
import ProductScreen from "point_of_sale.ProductScreen";

export class SelectBundleButton extends PosComponent {
    get currentOrder() {
        return this.env.pos.get_order();
    }

    async onClick() {
        const bundlesList = [];
        for (let bundle of this.env.pos.bundles) {
            bundlesList.push({
                id: bundle.id,
                label: bundle.name,
                item: bundle,
            });
        }
        const {confirmed, payload: selectedBundle} = await this.showPopup("SelectionPopup", {
            title: this.env._t("Select a Bundle"),
            list: bundlesList,
        });

        if (!confirmed) {
            return;
        }

        for (let bundle_product of selectedBundle.product_ids) {
            const product = this.env.pos.db.get_product_by_id(bundle_product);
            this.currentOrder.add_product(product, {bundle: selectedBundle});
        }
    }
}

SelectBundleButton.template = "SelectBundleButton";

ProductScreen.addControlButton({
    component: SelectBundleButton,
    condition: () => true,
});

Registries.Component.add(SelectBundleButton);

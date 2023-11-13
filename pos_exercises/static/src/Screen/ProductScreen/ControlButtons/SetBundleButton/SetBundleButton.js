/** @odoo-module **/

import PosComponent from "point_of_sale.PosComponent";
import ProductScreen from "point_of_sale.ProductScreen";
import Registries from "point_of_sale.Registries";

export class SetBundleButton extends PosComponent{

    async onClick(){

        const bundlesList = this.env.pos.posBundles.map(Bundle => ({id: Bundle.id,
                                                                    label: Bundle.name,
                                                                    item: Bundle}));

        const { confirmed, payload } = await this.showPopup('SelectionPopup',
            {
                title: this.env._t('Please select a bundle'),
                list: bundlesList,
            }
        );

        if (confirmed){

            const order = this.env.pos.get_order();
            for (const product of payload.product_ids) {
                var product_id = this.env.pos.db.get_product_by_id(product);

                order.add_product(product_id);
                order.get_selected_orderline().set_unit_price(product_id.lst_price);

                order.get_selected_orderline().setBundleId(payload);
            }
        }
    }
}

SetBundleButton.template = 'SetBundleButton';

ProductScreen.addControlButton({
        component: SetBundleButton,
        condition: () => true}
        );

Registries.Component.add(SetBundleButton);

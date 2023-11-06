/** @odoo-module **/
import ProductScreen from "point_of_sale.ProductScreen";
import Registries from "point_of_sale.Registries";

const ProductScreenInherit = ProductScreenOrigin => class extends ProductScreenOrigin {
    async _onClickCustomer(...args) {
        const res = await super._onClickCustomer(...args);

        const order = this.env.pos.get_order();

        const discountProductId = this.env.pos.config.employee_discount_product_id &&
            this.env.pos.config.employee_discount_product_id[0];

        const discountProduct = this.env.pos.db.get_product_by_id(discountProductId);

        for (const line of order.get_orderlines()) {
            if (line.get_product().id === discountProductId) {
                order.remove_orderline(line);
            }
        }

        if (
            order.get_client() &&
            order.get_client().business_type_id &&
            this.env.pos.businessTypeById[order.get_client().business_type_id[0]] &&
            this.env.pos.businessTypeById[order.get_client().business_type_id[0]].name === "Employee"
        ) {
            order.add_product(discountProduct);
            order.get_selected_orderline().set_unit_price(-discountProduct.price_lst);
        }


        return res;
    }
};

Registries.Component.extend(ProductScreen, ProductScreenInherit);

/** @odoo-module **/
import ProductScreen from "point_of_sale.ProductScreen";
import Registries from "point_of_sale.Registries";

const MyProductScreen = ProductScreenOrigin => class extends ProductScreenOrigin {
    onChangeMyField(event) {
        this.currentOrder.setMyField(event.target.value);
    }
};

Registries.Component.extend(ProductScreen, MyProductScreen);


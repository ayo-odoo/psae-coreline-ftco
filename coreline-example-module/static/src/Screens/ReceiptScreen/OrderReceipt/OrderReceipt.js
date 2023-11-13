/** @odoo-module **/
import OrderReceipt from "point_of_sale.OrderReceipt";
import Registries from "point_of_sale.Registries";


const OrderReceiptInherit = OrderReceiptOrigin => class extends OrderReceiptOrigin {
    isSimple(line) {
        return super.isSimple(line) && !line.score;
    }
};

Registries.Component.extend(OrderReceipt, OrderReceiptInherit);

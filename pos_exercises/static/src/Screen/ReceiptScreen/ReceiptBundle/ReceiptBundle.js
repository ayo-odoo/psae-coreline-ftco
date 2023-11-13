/** @odoo-module **/

import OrderReceipt from "point_of_sale.OrderReceipt";
import Registries from "point_of_sale.Registries";


const OrderReceiptInherit = OrderReceipt => class extends OrderReceipt {

    isSimple(line) {
        return super.isSimple(line) && !line.bundle_id
    }

};

Registries.Component.extend(OrderReceipt, OrderReceiptInherit);
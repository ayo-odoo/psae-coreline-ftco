/** @odoo-module **/

import OrderReceipt from "point_of_sale.OrderReceipt";
import Registries from "point_of_sale.Registries";

const { onWillStart } = owl.hooks;

const OrderReceiptInherit = OrderReceipt => class extends OrderReceipt {

     loadTitle(){
        var Client = this.env.pos.get_order().get_client();
        if (Client){return Client.title[1]}
        return false
    }

};

Registries.Component.extend(OrderReceipt, OrderReceiptInherit);

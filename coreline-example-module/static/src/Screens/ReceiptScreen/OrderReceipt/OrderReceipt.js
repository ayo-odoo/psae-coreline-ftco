/** @odoo-module **/
import OrderReceipt from "point_of_sale.OrderReceipt";
import Registries from "point_of_sale.Registries";

const {onWillStart} = owl.hooks;

const OrderReceiptInherit = OrderReceiptOrigin => class extends OrderReceiptOrigin {
    setup() {
        super.setup(...arguments);

        onWillStart(this.loadDbData.bind(this));
    }

    async loadDbData() {
        this.order_count = await this.rpc({
            model: "pos.order",
            method: "search_count",
            args: [[]]
        });
    }

    isSimple(line) {
        return super.isSimple(line) && !line.score;
    }
};

Registries.Component.extend(OrderReceipt, OrderReceiptInherit);

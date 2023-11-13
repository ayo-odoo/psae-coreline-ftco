/** @odoo-module **/
import PaymentScreen from "point_of_sale.PaymentScreen";
import Registries from "point_of_sale.Registries";


const PaymentScreenInherit = PaymentScreenOrigin => class extends PaymentScreenOrigin {
    async _isOrderValid() {
        const missingPaymentIds = this.paymentLines.some(line => line.payment_method.requires_payment_id && !line.delivery_payment_id);

        missingPaymentIds && await this.showPopup("ErrorPopup", {
            title: this.env._t("Missing Payment ID"),
            body: this.env._t("Some of your payment lines require an ID, some of them is missing"),
        });

        return !missingPaymentIds && super._isOrderValid(...arguments);
    }
};

Registries.Component.extend(PaymentScreen, PaymentScreenInherit);

/** @odoo-module **/
import PaymentScreenPaymentLine from "point_of_sale.PaymentScreenPaymentLines";
import Registries from "point_of_sale.Registries";

const PaymentScreenPaymentLineInherit = PaymentScreenPaymentLineOrigin => class extends PaymentScreenPaymentLineOrigin {
    updatePaymentId(payment, ev) {
        payment.set_delivery_payment_id(ev.target.value);
    }
};

Registries.Component.extend(PaymentScreenPaymentLine, PaymentScreenPaymentLineInherit);

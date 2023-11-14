from odoo import _, api, fields, models


class PosOrder(models.Model):
    _inherit = "pos.order"

    my_field = fields.Char(string="My Field")

    @api.model
    def _order_fields(self, ui_order):
        res = super(PosOrder, self)._order_fields(ui_order)
        res.update({
            "my_field": ui_order.get("my_field")
        })
        return res

    @api.model
    def _payment_fields(self, order, ui_paymentline):
        res = super(PosOrder, self)._payment_fields(order, ui_paymentline)
        res.update({
            "delivery_payment_id": ui_paymentline.get("delivery_payment_id")
        })
        return res

    def _get_fields_for_draft_order(self):
        res = super(PosOrder, self)._get_fields_for_draft_order()

        return res + [
           "my_field"
        ]

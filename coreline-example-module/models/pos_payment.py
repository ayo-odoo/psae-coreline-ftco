from odoo import _, api, fields, models


class PosPayment(models.Model):
    _inherit = "pos.payment"

    delivery_payment_id = fields.Char()

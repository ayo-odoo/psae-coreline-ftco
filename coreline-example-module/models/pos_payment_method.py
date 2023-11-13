from odoo import _, api, fields, models


class PosPaymentMethod(models.Model):
    _inherit = "pos.payment.method"

    requires_payment_id = fields.Boolean()

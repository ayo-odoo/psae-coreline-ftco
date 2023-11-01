from odoo import _, api, fields, models


class PosOrderLine(models.Model):
    _inherit = "pos.order.line"

    score = fields.Integer(string="Score", default=0)

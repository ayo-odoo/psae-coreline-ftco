from odoo import api, fields, models


class PosOrderLine(models.Model):
    _inherit = 'pos.order.line'

    bundle_id = fields.Many2one('pos.bundle', string='Bundle')

from odoo import _, api, fields, models


class Partner(models.Model):
    _inherit = "res.partner"

    business_type_id = fields.Many2one("business.type")
    rating = fields.Float()

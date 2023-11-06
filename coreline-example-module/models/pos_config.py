from odoo import _, api, fields, models


class PosConfig(models.Model):
    _inherit = "pos.config"

    employee_discount_product_id = fields.Many2one("product.product")

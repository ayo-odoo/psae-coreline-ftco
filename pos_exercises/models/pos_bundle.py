from odoo import _, api, fields, models


class BusinessType(models.Model):
    _name = "pos.bundle"
    _description = "POS Bundle"

    name = fields.Char()
    product_ids = fields.Many2many('product.product', string='Products')

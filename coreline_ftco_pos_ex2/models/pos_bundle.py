from odoo import fields, models


class PosBundle(models.Model):
    _name = 'pos.bundle'
    _description = 'POS Bundle'

    name = fields.Char(required=True)
    product_ids = fields.Many2many('product.product', domain="[('available_in_pos', '=', True)]")

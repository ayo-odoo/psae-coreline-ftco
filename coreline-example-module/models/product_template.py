from odoo import _, api, fields, models


class ProductTemplate(models.Model):
    _inherit = "product.template"

    my_field = fields.Char(string="My Field")

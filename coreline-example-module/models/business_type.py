from odoo import _, api, fields, models


class BusinessType(models.Model):
    _name = "business.type"
    _description = "Business Type"

    name = fields.Char()

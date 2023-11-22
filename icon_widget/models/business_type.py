from odoo import _, api, fields, models


class BusinessType(models.Model):
    _name = "business.type"
    _description = "Business Type"

    name = fields.Char()
    icon = fields.Selection([('fa-twitter', 'Twitter'),
                             ('fa-apple', 'Apple'),
                             ('fa-github', 'Github'),
                             ('fa-google-plus', 'Google')])

from odoo import _, api, fields, models


class CustomLink(models.Model):
    _name = "custom.link"
    _description = "Custom Link"

    name = fields.Char(string="Name", required=True)
    href = fields.Char(string="Href", required=True)

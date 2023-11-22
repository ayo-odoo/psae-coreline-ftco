from odoo import fields, models, api


class BusinessType(models.Model):
    _name = 'business.type'
    _description = 'Business Type'

    name = fields.Char(required=True)
    icon = fields.Selection([('fa fa-university', 'Education'), ('fa fa-truck', 'Shipment'), ('fa fa-tv', 'Entertainment')])

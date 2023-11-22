from odoo import fields, models, api


class ResPartner(models.Model):
    _inherit = 'res.partner'


    business_type_id = fields.Many2one('business.type')

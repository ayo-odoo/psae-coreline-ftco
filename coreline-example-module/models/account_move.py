from odoo import _, api, fields, models

MY_SELECTION_FIELD_VALUES = [
    (i, i)
    for i in
    map(str, (i for i in range(10)))
]


class AccountMove(models.Model):
    _inherit = "account.move"

    my_selection_field = fields.Selection(MY_SELECTION_FIELD_VALUES)

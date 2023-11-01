from odoo import fields, models


class Todo(models.Model):
    _name = 'todo.todo'
    _description = 'Todo'

    name = fields.Char(required=True)

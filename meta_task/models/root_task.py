from odoo import fields, models, api, _


class RootTasks(models.Model):
    _name = 'root.task'

    title = fields.Char(string='Task Title')

    def add_task(self, **kwargs):

        self.create({'title': kwargs['title']})

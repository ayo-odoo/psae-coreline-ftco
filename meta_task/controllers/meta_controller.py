from odoo import http, exceptions, _
from odoo.http import request


class MetaController(http.Controller):

    @http.route(["/main"], auth="public")
    def show_main_page(self):

        session_info = request.env['ir.http'].session_info()
        ctx = {'session_info': session_info}
        return http.request.render('meta_task.main_template', ctx)

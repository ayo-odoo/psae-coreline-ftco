from odoo import http, exceptions, _
from odoo.http import request


class MetaController(http.Controller):

    @http.route(["/main"], auth="public")
    def show_main_page(self):

        session_info = request.env['ir.http'].session_info()

        company = request.env['res.company'].sudo().search([], limit=1)
        session_info['user_context']['allowed_company_ids'] = company.ids
        session_info['user_companies'] = {'current_company': company.id,
                                          'allowed_companies': {company.id: company.id}}

        ctx = {'session_info': session_info}
        return http.request.render('meta_task.main_template', ctx)

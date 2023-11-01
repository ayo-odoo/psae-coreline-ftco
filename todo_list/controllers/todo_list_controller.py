from odoo import http
from odoo.http import request


class TodoListController(http.Controller):

    @http.route(['/todo'], type="http", auth="user")
    def open_todo_page(self):
        session_info = request.env['ir.http'].session_info()

        company = request.env['res.company'].sudo().search([], limit=1)
        session_info['user_context']['allowed_company_ids'] = company.ids
        session_info['user_companies'] = {'current_company': company.id, 'allowed_companies': {company.id: company.id}}

        context = {
            'session_info': session_info
        }
        return http.request.render('todo_list.index', context)

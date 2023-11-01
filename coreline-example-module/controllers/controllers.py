# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class CoreLine(http.Controller):

    @http.route('/example', auth='public')
    def object(self, *args, **kw):
        session_info = request.env['ir.http'].session_info()

        company = request.env['res.company'].sudo().search([], limit=1)

        session_info['user_context']['allowed_company_ids'] = company.ids
        session_info['user_companies'] = {'current_company': company.id, 'allowed_companies': {
            company.id: company.id}}

        context = {
            'session_info': session_info,
        }
        return http.request.render('coreline-example-module.index', context)

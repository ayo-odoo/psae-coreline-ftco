# -*- coding: utf-8 -*-
# from odoo import http


# class Coreline-module-1(http.Controller):
#     @http.route('/coreline-module-1/coreline-module-1', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/coreline-module-1/coreline-module-1/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('coreline-module-1.listing', {
#             'root': '/coreline-module-1/coreline-module-1',
#             'objects': http.request.env['coreline-module-1.coreline-module-1'].search([]),
#         })

#     @http.route('/coreline-module-1/coreline-module-1/objects/<model("coreline-module-1.coreline-module-1"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('coreline-module-1.object', {
#             'object': obj
#         })


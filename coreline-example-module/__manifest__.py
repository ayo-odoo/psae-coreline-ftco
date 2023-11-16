# -*- coding: utf-8 -*-
{
    'name': "coreline-example-module",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'point_of_sale'],

    # always loaded
    'data': [
        "security/ir.model.access.csv",
        "views/coreline.xml",
        "data/business.type.csv"
    ],

    'assets': {
        "coreline-example-module.assets": [
            # ('include', 'web.assets_common'),
            # ('include', 'web.assets_backend_prod_only'),
            # ('include', 'web.assets_frontend'),
            "web/static/src/start.js",
            'web/static/src/legacy/legacy_setup.js',
            "coreline-example-module/static/src/main.js",
            "coreline-example-module/static/src/style.css",
        ],
        "point_of_sale.assets": [
            "coreline-example-module/static/src/models.js",
            "coreline-example-module/static/src/Screens/**/*.js",
        ],
        "web.assets_qweb": [
            "coreline-example-module/static/src/main.xml",
            "coreline-example-module/static/src/Screens/**/*.xml",

        ],
        "web.assets_backend": [
            "coreline-example-module/static/src/widgets/barcode.js",
        ]
    }
}

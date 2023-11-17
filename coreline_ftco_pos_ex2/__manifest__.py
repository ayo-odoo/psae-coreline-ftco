# -*- coding: utf-8 -*-
{
    'name': "Coreline FTCO POS EX2",

    'summary': """
    """,

    'description': """
    """,

    'author': 'Coreline',
    'website': 'https://www.coreline.tech',
    'category': 'Sales/Point of Sale',
    'version': '15.0.0.1',

    # any module necessary for this one to work correctly
    'depends': ['point_of_sale'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/pos_bundle.xml',
        'views/pos_order.xml',
    ],

    'assets': {
        'point_of_sale.assets': [
            'coreline_ftco_pos_ex2/static/src/models.js',
            'coreline_ftco_pos_ex2/static/src/Screens/**/*.js',
        ],
        'web.assets_qweb': [
            'coreline_ftco_pos_ex2/static/src/Screens/**/*.xml',
        ],
    }
}

# -*- coding: utf-8 -*-
{
    'name': "Coreline FTCO POS EX1",

    'summary': """
    """,

    'description': """
    """,

    'author': 'Coreline',
    'website': 'https://www.coreline.tech',
    'category': 'Sales/Point of Sale',
    'version': '15.0.0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'point_of_sale'],

    # always loaded
    'data': [
    ],

    'assets': {
        'point_of_sale.assets': [
            'coreline_ftco_pos_ex1/static/src/js/models.js',
            'coreline_ftco_pos_ex1/static/src/Screens/ClientLine/ClientLine.js',
        ],
        'web.assets_qweb': [
            'coreline_ftco_pos_ex1/static/src/Screens/ClientLine/ClientLine.xml',
            'coreline_ftco_pos_ex1/static/src/Screens/ClientListScreen/ClientListScreen.xml',
            'coreline_ftco_pos_ex1/static/src/Screens/ReceiptScreen/ReceiptScreen.xml',
        ],
    }
}

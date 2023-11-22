# -*- coding: utf-8 -*-
{
    'name': "Coreline FTCO FA Widget",

    'summary': """
    """,

    'description': """
    """,

    'author': 'Coreline',
    'website': 'https://www.coreline.tech',
    'category': '',
    'version': '15.0.0.1',

    # any module necessary for this one to work correctly
    'depends': [],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/business_type.xml',
        'views/res_partner.xml',
    ],

'assets': {
        "web.assets_qweb": [
            "coreline_ftco_fa_widget/static/**/*.xml",

        ],
        "web.assets_backend": [
            "coreline_ftco_fa_widget/static/**/*.js",
        ]
    }
}

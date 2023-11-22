# -*- coding: utf-8 -*-
{
    'name': "ICON WIDGET",

    'summary': """
    """,

    'description': """
    """,

    'author': 'Coreline',
    'website': 'https://www.coreline.tech',
    'category': 'Hidden',
    'version': '15.0.0.1',

    # any module necessary for this one to work correctly
    'depends': ['account'],

    # always loaded
    'data': ['security/ir.model.access.csv',
             'views/res_partner.xml',
             'views/business_type.xml'],

    "assets": {
        "web.assets_backend": ['icon_widget/static/src/widgets/IconWidget.js'],
        'web.assets_qweb': ['icon_widget/static/src/widgets/IconWidget.xml'],
    },
}

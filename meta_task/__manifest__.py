# -*- coding: utf-8 -*-
{
    'name': 'Upload Tasks',

    'summary': """
    """,

    'description': """
    """,

    'author': 'Coreline',
    'website': 'https://www.coreline.tech',
    'category': 'Technical',
    'version': '15.0.0.1',

    # any module necessary for this one to work correctly
    'depends': [],

    'data': ['security/ir.model.access.csv',
             'views/root_task.xml',
             'views/template.xml'],

    'assets': {

        'meta_task.meta_assets': [
            'web/static/src/start.js',
            'web/static/src/legacy/legacy_setup.js',
            'meta_task/static/src/js/root_task.js',
        ],

        'web.assets_qweb': [
            'meta_task/static/src/xml/root_task.xml',
        ]
    }
}

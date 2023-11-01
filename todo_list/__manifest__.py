# -*- coding: utf-8 -*-

{
    'name': "Todo List",

    'summary': """
    """,

    'description': """
    """,

    'author': '',
    'website': '',
    'category': '',
    'version': '15.0.0.1',

    # any module necessary for this one to work correctly
    'depends': [],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/index.xml',
        'views/todo_views.xml',
    ],

    'assets': {
        'todo_list.assets': [
            # ('include', 'web.assets_common'),
            # ('include', 'web.assets_backend'),
            'web/static/src/start.js',
            'web/static/src/legacy/legacy_setup.js',
            'todo_list/static/src/main.js',
        ],

        'web.assets_qweb': [
            'todo_list/static/src/main.xml',
        ]
    }
}

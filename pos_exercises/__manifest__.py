# -*- coding: utf-8 -*-
{
    'name': 'Point Of Sale Exercises',

    'summary': """
    """,

    'description': """
    """,

    'author': 'Coreline',
    'website': 'https://www.coreline.tech',
    'category': 'Technical',
    'version': '15.0.0.1',

    # any module necessary for this one to work correctly
    'depends': ['point_of_sale', 'web', 'base'],

    'data': ['security/ir.model.access.csv',
             'views/pos_bundle.xml'],

    'assets': {
        'point_of_sale.assets': [
            'pos_exercises/static/src/model.js',
            'pos_exercises/static/src/Screen/ClientListScreen/ClientDetailsEdit/ClientDetailsEdit.js',
            'pos_exercises/static/src/Screen/ProductScreen/ControlButtons/SetBundleButton/SetBundleButton.js',
            'pos_exercises/static/src/Screen/ReceiptScreen/ReceiptTitle/ReceiptTitle.js',
            'pos_exercises/static/src/Screen/ReceiptScreen/ReceiptBundle/ReceiptBundle.js',

        ],
        'web.assets_qweb': [
            'pos_exercises/static/src/Screen/ClientListScreen/ClientDetailsEdit/ClientDetailsEdit.xml',
            'pos_exercises/static/src/Screen/ClientListScreen/ClientLine/ClientLine.xml',
            'pos_exercises/static/src/Screen/ClientListScreen/ClientListScreen/ClientListScreen.xml',
            'pos_exercises/static/src/Screen/ProductScreen/ControlButtons/SetBundleButton/SetBundleButton.xml',
            'pos_exercises/static/src/Screen/ProductScreen/OrderLine/OrderLine.xml',
            'pos_exercises/static/src/Screen/ReceiptScreen/ReceiptTitle/ReceiptTitle.xml',
            'pos_exercises/static/src/Screen/ReceiptScreen/ReceiptBundle/ReceiptBundle.xml',

        ],
            }

}

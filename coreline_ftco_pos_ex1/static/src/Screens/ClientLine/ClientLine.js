/** @odoo-module **/

const ClientLine = require('point_of_sale.ClientLine');
const Registries = require('point_of_sale.Registries');

const MyClientLine = ClientLine => class extends ClientLine {
    get title() {
        return this.props.partner.title[1];
    }
}

Registries.Component.extend(ClientLine, MyClientLine);


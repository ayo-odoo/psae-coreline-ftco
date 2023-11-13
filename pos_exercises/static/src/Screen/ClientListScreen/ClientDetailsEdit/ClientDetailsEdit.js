/** @odoo-module **/

import ClientDetailsEdit from "point_of_sale.ClientDetailsEdit";
import Registries from "point_of_sale.Registries";

const ClientDetailsEditInherit = ClientDetailsEditOrigin => class extends ClientDetailsEditOrigin {
    constructor(...args) {
        super(...args);

        this.intFields.push("title");
    }
};

Registries.Component.extend(ClientDetailsEdit, ClientDetailsEditInherit);

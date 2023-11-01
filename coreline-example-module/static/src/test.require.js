/** @odoo-module **/
// @coreline-example-module/rest.require
import rpc from "web.rpc";

rpc.query({
    model: "res.partner",
    method: "search_read",
    args: [[], ["name"]],
}).then((result) => {
    alert(JSON.stringify(result, null, 2));
});

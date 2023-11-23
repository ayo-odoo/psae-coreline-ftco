/** @odoo-module **/
import core from "web.core";

function testAlert(env, {params}) {
    const {title, text} = params;
    alert(env._t(`${title}: ${text}`));
}

core.action_registry.add("example_module.action", testAlert);

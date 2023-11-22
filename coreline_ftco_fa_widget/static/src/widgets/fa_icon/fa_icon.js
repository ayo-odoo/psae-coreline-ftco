/** @odoo-module **/
import AbstractFieldOwl from "web.AbstractFieldOwl";
import registry from "web.field_registry_owl";
import rpc from "web.rpc";


export class FaIcon extends AbstractFieldOwl {

    async willStart() {
        await super.willStart(...arguments);
        await this.getIcons();
//    debugger;
    }

    async getIcons() {
        if (!this.recordData[this.field.name]){
            this.selectedOption = false;
        }else{
            const selectedOption = await rpc.query({
                                   model: this.field.relation,
                                   method: "search_read",
                                   domain: [['id', '=', this.recordData[this.field.name].data.id]],
                                   fields: ['id', 'name', 'icon'],
                               });
            this.selectedOption = selectedOption[0];
        }
        this.selectOptions = [{}];
        const options = await rpc.query({
                               model: this.field.relation,
                               method: "search_read",
                               domain: [],
                               fields: ['id', 'name', 'icon'],
                           });
        for (let option of options){
            this.selectOptions.push(option);
        }
    }

    _handleFaIconChange(event) {
        this._setValue(event.target.value);
    }
}

FaIcon.template = "coreline.fa_icon";

registry.add("fa_icon", FaIcon);

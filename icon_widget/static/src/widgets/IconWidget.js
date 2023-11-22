/** @odoo-module **/

import AbstractFieldOwl from 'web.AbstractFieldOwl';
import RegistryOwl from 'web.field_registry_owl';

const { hooks } = owl;
const { onWillStart, useState } = hooks;

import rpc from 'web.rpc';

export class Icon extends AbstractFieldOwl {

    setup() {

        onWillStart(() => {this.FetchObjects();});

        this.state = useState({'objects': [], 'icon': false});

    }

    async FetchObjects() {

        this.state.objects = await rpc.query({model: 'business.type',
                                              method: 'search_read'});

    }

    getItems(){return this.state.objects}

    _getOption(event){
        const self = this;
        this.state.objects.forEach(function (obj){
            if(event.target.value == obj.id){
                self.state.icon = 'fa ' + obj.icon;
                self._setValue(obj.id);
            }
        });
    }
    currentItem(){
        var itemName;
        const CurrentId = this.props.record.evalContext.business_type_id;
        this.state.objects.forEach(function (obj){if(CurrentId == obj.id){itemName = obj.name;}});
        return itemName;
    }
    currentIcon(){
        var itemIcon;
        const CurrentId = this.props.record.evalContext.business_type_id;
        this.state.objects.forEach(function (obj){if(CurrentId == obj.id){itemIcon = obj.icon;}});
        return 'fa ' + itemIcon;}
}

Icon.template = "RootIcon";

RegistryOwl.add("icon", Icon);
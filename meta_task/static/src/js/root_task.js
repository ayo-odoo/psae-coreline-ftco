/** @odoo-module **/


import { startWebClient } from "@web/start";

const { Component } = owl;

const { useState, onWillStart } = owl.hooks;

import rpc from 'web.rpc';

class RootTasks extends Component{

    setup() {

        onWillStart(() => {this.FetchTasks();});

        this.state = useState({'tasks': []});

    }

    async FetchTasks() {

        await this.AddTask();

        const Tasks_ids = await rpc.query({model: 'root.task',
                                           method: 'search_read'});

        this.state.tasks = Tasks_ids.map(task_id => (task_id.title));
        console.log('this.state.tasks: ', this.state.tasks)
    }

     async AddTask() {

        const InLabel = document.getElementById("input-task");
        if (InLabel){

            await rpc.query({
                model: 'root.task',
                method: 'add_task',
                args: [InLabel.value],
                kwargs: {title: InLabel.value },
            });

            InLabel.value = '';
        }
    }
}

RootTasks.template = "MetaApp";

startWebClient(RootTasks);

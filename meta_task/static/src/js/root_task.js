/** @odoo-module **/
import { makeEnv } from "@web/env";

const { mount, Component, tags } = owl;
const { xml } = owl.tags;

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
RootTasks.template = xml`
    <t>
        <div>
            <button t-on-click="FetchTasks">Add</button>
            
            <input id="input-task" t-att-value="''" placeholder="Your Task.."/>
            
            <div><br/></div>
            
            <table class="center">
                <thead style="background-color: #CCCCFF;">
                    <tr>
                        <th class="text-left">
                            <span>Task Title</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <t t-foreach="state.tasks" t-as="task" t-key="task">
                        <div><br/></div>
                        <tr >
                            <td class="text-right" style="border: 1px solid black;">
                                <t t-esc="task"/>
                            </td>
                        </tr>
                    </t>
                </tbody>
            </table>
        </div>
    </t>
`;

async function startApp() {
    const env = makeEnv();
    await mount(RootTasks, {env, target: document.getElementById("app")});
}

startApp();

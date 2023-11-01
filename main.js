import {mount, Component, useState, xml} from "@odoo/owl";

class RootTasks extends Component{

    setup() {this.state = useState({'tasks': [], 'empty': ''});}

    AddTask() {
        var param = document.getElementById("input-task").value;
        this.state.tasks.push(param);
    }

}
RootTasks.template = xml`
    <t id="app">
            
        <button t-on-click="AddTask">Add</button>
        
        <input id="input-task" t-att-value="state.empty" placeholder="Your Task.."/>
        
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
  
    </t>
`;

mount(RootTasks, document.getElementById("app"));

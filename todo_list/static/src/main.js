/** @odoo-module **/
import { startWebClient } from "@web/start";
import rpc from "web.rpc";

const {Component} = owl;
const {onWillStart, useState, useRef} = owl.hooks;

const components = {};

components.Input = class Input extends Component {

        setup() {
            super.setup();
            this.state = useState({
                todo: "",
            });
        }

        async addTodo() {
            await rpc.query({
                   model: "todo.todo",
                   method: "create",
                   args: [[{'name': this.state.todo}]],
                });
            this.state.todo = "";
            this.props.state.output.comp.getTodos();
        }
}

components.Input.template = "Input"

components.Output = class Output extends Component {
    setup() {
        super.setup();
        this.state = useState({
             todos: [],
        });
        onWillStart(this.getTodos.bind(this));
    }

    async getTodos() {
        this.state.todos = await rpc.query({
                                     model: "todo.todo",
                                     method: "search_read",
                                     domain: [],
                                     fields: ["id", "name"]
                                 });
    }

}

components.Output.template = "Output"

class App extends Component {
        setup() {
            super.setup();
            this.state = useState({
                output: useRef('output')
            });
        }
}

App.components = components;

App.template = "App";

startWebClient(App);
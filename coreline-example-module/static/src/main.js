/** @odoo-module **/
import {startWebClient} from "@web/start";
import rpc from "web.rpc";

const {Component} = owl;
const {onWillStart} = owl.hooks;


const components = {};

components.Nav = class Nav extends Component {
    setup() {
        super.setup();

        this.links = [];

        onWillStart(this.getLinks.bind(this));
    }

    async getLinks() {
        const links = await rpc.query({
            model: "custom.link",
            method: "search_read",
            domain: [],
            fields: ["id", "name", "href"],
        });

         this.links = links.map(link => ({
            href: link.href,
            title: link.name,
        }));
    }
};

components.Nav.template = "Nav";

components.Home = class Home extends Component {
};

components.Home.template = "Home";

components.About = class About extends Component {
};

components.About.template = "About";

components.Contact = class Contact extends Component {
};

components.Contact.template = "Contact";

components.Footer = class Footer extends Component {
};

components.Footer.template = "Footer";

class App extends Component {
}

App.components = components;

App.template = "App";


startWebClient(App);


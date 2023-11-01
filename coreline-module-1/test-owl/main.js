import {mount, Component, xml} from "@odoo/owl";

const components = {};

components.Nav = class Nav extends Component {
    get links() {
        return [
            {href: "#home", title: "Home"},
            {href: "#about", title: "About Us"},
            {href: "#contact", title: "Contact"},
        ];
    }
};

components.Nav.template = xml`
<nav>
    <ul>
        <li t-foreach="links" t-as="link" t-key="link.href">
            <a t-att-href="link.href" t-out="link.title"/>
        </li>
    </ul>
</nav>
`;

components.Home = class Home extends Component {
};

components.Home.template = xml`
<section id="home">
    <h1>Home</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi dolorum ea, 
        error eum explicabo fugit harum iste magnam, nemo nobis non optio pariatur quas 
        qui recusandae reprehenderit totam veniam.
    </p>
</section>
`;

components.About = class About extends Component {
};

components.About.template = xml`
<section id="about">
    <h1>About Us</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi dolorum ea,
        error eum explicabo fugit harum iste magnam, nemo nobis non optio pariatur quas
        qui recusandae reprehenderit totam veniam.
    </p>
</section>
`;

components.Contact = class Contact extends Component {
};

components.Contact.template = xml`
<section id="contact">
    <h1>Contact</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi dolorum ea,
        error eum explicabo fugit harum iste magnam, nemo nobis non optio pariatur quas
        qui recusandae reprehenderit totam veniam.
    </p>
</section>
`;

components.Footer = class Footer extends Component {
};

components.Footer.template = xml`
<footer>
    <p>2020</p>
</footer>
`;

class App extends Component {
}

App.components = components;

App.template = xml`
<div>
    <Nav/>
    <Home/>
    <About/>
    <Contact/>
    <Footer/>
</div>
`;


mount(App, document.getElementById("app"));

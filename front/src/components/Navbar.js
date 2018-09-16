import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../style/Navbar.css"
import registerServiceWorker from "./../registerServiceWorker";

/**
 * This class contains all needed to display the nav bar on top.
 */
export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onChange: props.onChange
        };
    }

    render() {
        return (
            <div className="fixed-top">
                <nav id="navbar_home" className="nav navbar-light">
                    <a id="nombre_nav" className="col-md-7 navbar-brand hvr-underline-from-center" href={""}
                       onClick={this.state.onChange.bind(this, "inicio")}>
                        <img src={require("./../img/newsletter.png")} width="30" height="30"
                             className="d-inline-block align-top" alt=""/> Factura Electronica
                    </a>
                    <a className="nav-item nav-link " href={""}
                       onClick={this.state.onChange.bind(this, "inicio")}>Inicio</a>
                    <a className="nav-item nav-link " href={""} onClick={this.state.onChange.bind(this, "login")}>Log
                        In</a>
                    <a className="nav-item nav-link " href={""} onClick={this.state.onChange.bind(this, "signin")}>Sign
                        Up</a>
                </nav>

            </div>
        );
    }
}


registerServiceWorker();
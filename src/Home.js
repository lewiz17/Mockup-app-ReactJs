import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch, Link } from "react-router-dom";
import Main from "./Main";
import Layout from "./pages/staticPage";
import Contact from "./pages/contact";

import './styles/app.scss';

import Logo from "./assets/logo.png";

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            active: false
        }
        this.toggleClass= this.toggleClass.bind(this);
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <HashRouter>
                <div className="wrapper">
                    <header>
                        <h1 className="logo"><a href="#/"><img src={Logo}/></a></h1>
                        <nav>
                            <span className="navToggle">Toggle</span>
                            <ul className="menu">
                                <li><NavLink exact to="/" activeClassName="current"><i className="icon icon-home">&#xe804;</i>Home</NavLink></li>
                                <li><NavLink to="/messages" activeClassName="current"><i className="icon icon-mail">&#xe805;</i>Messages</NavLink></li>
                                <li><NavLink to="/whislist" activeClassName="current"><i className="icon icon-star">&#xe802;</i>Whishlist</NavLink></li>
                                <li><NavLink to="/setting" activeClassName="current"><i className="icon icon-cog">&#xe800;</i>Settings</NavLink></li>
                                <li><NavLink to="/account" activeClassName="current"><i className="icon icon-user">&#xe801;</i>My Account</NavLink></li>
                            </ul>
                        </nav>

                    </header>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/messages" render={()=><Layout title="Messages Page"/>} />
                        <Route path="/whislist" render={()=><Layout title="Wishlist Page"/>} />
                        <Route path="/setting" render={()=><Layout title="Setting Page"/>} />
                        <Route path="/account" component={Contact}  />
                    </Switch>                    
                </div>
            </HashRouter>
        );
    }
}

export default Home;
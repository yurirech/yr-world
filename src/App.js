import React, {Component} from 'react';
import { connect } from "react-redux";
import './App.scss';
import Home from "./containers/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import NavBar from "./components/NavBar/NavBar";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Links from "./containers/Links/Links";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { setRoute } from "./actions";

library.add(fab, faArrowRight, faExternalLinkAlt);

const mapStateToProps = state => {
  return {
    route: state.changeRoute.route,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (route) => dispatch(setRoute(route)),
  }
};

class App extends Component {

  render() {

    const { route, onRouteChange } = this.props;
    let body;
    let footer;

    if(route === 'home') {
      body = <Home />
    } else if(route === 'about') {
      body = <About onRouteChange={onRouteChange} />
    } else  if(route ==='contact'){
      body = <Contact  />
    } else {
      body = <Links />
    }

    if(route !== 'home') {
      footer = <div><div className='footer'><h5>YR World - coded by Yuri Rech 2020</h5></div></div>
    }

    return (
      <div className="App">
        <NavBar route={route} onRouteChange={onRouteChange} />
        {body}
        {footer}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

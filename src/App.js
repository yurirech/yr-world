import React, {Component} from 'react';
import './App.scss';
import Home from "./containers/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import NavBar from "./components/NavBar/NavBar";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";

library.add(fab);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'contact'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    console.log(this.state);
  };

  render() {
    let body;
    let footer;


    if(this.state.route === 'home') {
      body = <Home/>
    } else if(this.state.route === 'about') {
      body = <About />
    } else {
      body = <Contact/>
    }

    if(this.state.route !== 'home') {
      footer = <div><div className='footer'><h5>YR World - coded by Yuri Rech 2020</h5></div></div>
    }

    return (
      <div className="App">
        <NavBar onRouteChange={this.onRouteChange} />
        {body}
        {footer}
      </div>
    );
  }
}

export default App;

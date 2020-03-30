import React, {Component} from 'react';
import './Home.scss'
import ClickableIcons from "../../components/ClickableIcons/ClickableIcons";
import {homeIcons} from "./HomeContent";

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='header'>
          <h1>Yuri Ramalho Rech</h1>
          <h2>Front-end web developer</h2>
        </div>
        <div className='social'>
          <ClickableIcons clickableIcons={homeIcons} />
        </div>
      </div>
    );
  }
}

export default Home;

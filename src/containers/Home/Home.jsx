import React, {Component} from 'react';
import './Home.scss'
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <NavBar />
        <div className='header'>
          <h1>Yuri Ramalho Rech</h1>
          <h2>Front-end web developer</h2>
        </div>
        <div className='social'>
          <a href="https://wa.me/393519698843" rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab','whatsapp']} /></a>
          <a href="https://www.linkedin.com/in/yuri-ramalho-rech-2b9820170/" rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab','linkedin']} /></a>
          <a href="https://www.facebook.com/ramalhoyuri" rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={['fab','facebook-f']} /></a>
        </div>
      </div>
    );
  }
}

export default Home;

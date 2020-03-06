import React, {Component} from 'react';
import './Home.scss'
import NavBar from "../../components/NavBar/NavBar";

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <NavBar />
        <div className='header'>
          <h1>Yuri Ramalho Rech</h1>
          <h2>Front-end web developer</h2>
        </div>
      </div>
    );
  }
}

export default Home;

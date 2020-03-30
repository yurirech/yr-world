import React, {Component} from 'react';
import './About.scss'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profilePic from '../../assets/img/profile-pic.jpeg';
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import {professionalInterests, generalInterests, whoAmI} from "./AboutContent";

class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <Row className='wrapper' noGutters={true}>
         <Col className='title margin-page' xl={12}>
           <div> </div>
           <h1>{whoAmI.title}</h1>
         </Col>
          <Col className='img-holder' md={12} xl={2}>
            <img alt='' src={profilePic} />
          </Col>
          <Col className='content'  md={10} xl={9}>
            <p>{whoAmI.content}</p>
          </Col>
            <Col className='interests' sm={5} md={5} lg={4} xl={3}>
              <h4>Professional Interests:</h4>
              <UnorderedList listItems={professionalInterests}/>
            </Col>
            <Col className='interests' sm={5} md={5} lg={4} xl={3}>
              <h4>General Interests:</h4>
              <UnorderedList listItems={generalInterests}/>
            </Col>

          <Col className='cv' xl={12}>
            <h5>Get in touch through my <a href="">contact form</a> </h5>
            <h4>Click <a href="https://drive.google.com/uc?export=download&id=1HNfAE2WkJWzu0BjCQJYIDF-FRsfPIvfv" download>
              here
            </a> to download my C.V.</h4>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;

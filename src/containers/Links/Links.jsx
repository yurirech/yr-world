import React, {Component} from 'react';
import MainHeader from "../../components/MainHeader/MainHeader";
import './Links.scss'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Links extends Component {
  render() {
    return (
      <div className='links-container'>

        <Row className='spc-evenly' noGutters={true}>
          <Col className='margin-page' xl={12}>
            <MainHeader title='Resources' />
          </Col>
        </Row>

        <Row className='links-content spc-evenly' noGutters={true} >
          <Col xl={3}>
            <div className='side-info'>
              <h5>Here you will find links for courses, social networks,
                tutorials and articles that help/helped me through my developer life
              </h5>
              <FontAwesomeIcon  icon='arrow-right' />
            </div>
          </Col>
          <Col className='content' xl={8}>
            <div className='link'>
              <h4>Udemy - WebDeveloper 2020 Course
                <a href='/'><FontAwesomeIcon icon='external-link-alt'/></a>
              </h4>
              <hr/>
              <p>Attack the dog then pretend like nothing happened i am the best leave hair everywhere sit on the laptop.
                Run off table persian cat jump eat fish hiss at vacuum cleaner reaches under door into adjacent room or stinky cat.</p>
              <div className='img-holder'>
                <img src="https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course-750x422.jpg" alt="course"/>
              </div>
            </div>
            <div className='link'>
              <h4>Udemy - WebDeveloper 2020 Course
                <a href='/'><FontAwesomeIcon icon='external-link-alt'/></a>
              </h4>
              <hr/>
              <p>Attack the dog then pretend like nothing happened i am the best leave hair everywhere sit on the laptop.
                Run off table persian cat jump eat fish hiss at vacuum cleaner reaches under door into adjacent room or stinky cat.</p>
              <div className='img-holder'>
                <img src="https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course-750x422.jpg" alt="course"/>
              </div>
            </div>
            <div className='link'>
              <h4>Udemy - WebDeveloper 2020 Course
                <a href='/'> <FontAwesomeIcon icon='external-link-alt'/></a>
              </h4>
              <hr/>
              <p>Attack the dog then pretend like nothing happened i am the best leave hair everywhere sit on the laptop.
                Run off table persian cat jump eat fish hiss at vacuum cleaner reaches under door into adjacent room or stinky cat.</p>
              <div className='img-holder'>
                <img src="https://www.globalcareercounsellor.com/blog/wp-content/uploads/2018/05/Online-Career-Counselling-course-750x422.jpg" alt="course"/>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Links;

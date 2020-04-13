import React, {Component} from 'react';
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainHeader from "../../components/MainHeader/MainHeader";
import './Contact.scss';
import {homeIcons} from "../Home/HomeContent";
import ClickableIcons from "../../components/ClickableIcons/ClickableIcons";
import ContactForm from "../../components/ContactForm/ContactForm";
import { setSendEmail } from "../../actions";

const mapStateToProps = state => {
  return {
    isSent: state.sendEmail.isSent
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendEmail: (isSent) => dispatch(setSendEmail(isSent))
  }
};

class Contact extends Component {
  render() {

    const { onSendEmail, isSent } = this.props;

    return (
      <div className='contact-container'>
        <Row className='spc-evenly' noGutters={true}>
          <Col xl={12} className='header margin-page'>
            <MainHeader title={'Contact me'} />
          </Col>
          <Col xs={11} md={12} className='contact-me'>
            <div>You can contact me through the following form or the social networks below:</div>
          </Col>
          <Col xs={11} md={6} lg={4}>
            <ContactForm isSentState={isSent} onSendEmail={onSendEmail}/>
          </Col>
          <Col xl={12} className='social'>
            <ClickableIcons clickableIcons={homeIcons} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

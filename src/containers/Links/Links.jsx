import React, {Component} from 'react';
import MainHeader from "../../components/MainHeader/MainHeader";
import './Links.scss'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollArea from "../../components/ScrollArea/ScrollArea";
import ResourceItem from "../../components/ResourceItem/ResourceItem";
import { resourceItems, resourceInfo, resourceInfoMobile } from './LinksContent'



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
          <Col  xl={12}>
            <div className='side-info'>
              <h5 className='hidden-md-down'>{ resourceInfo }</h5>
              <h5 className='hidden-md-up'>{ resourceInfoMobile }</h5>
            </div>
          </Col>
          <Col md={10} xl={8}>
            <ScrollArea>
              <ResourceItem resourceItems={resourceItems}/>
            </ScrollArea>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Links;

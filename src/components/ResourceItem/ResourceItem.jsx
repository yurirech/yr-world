import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ResourceItem = props => {
    return props.resourceItems.map((resourceItem, i) => (
          <div key={i} className='resource-item'>
            <a target='_blank' rel='noopener noreferrer' href={resourceItem.href}>
              <h4>{resourceItem.title}</h4>
              <FontAwesomeIcon icon={resourceItem.icon}/>
            </a>
            <small>Date posted: {resourceItem.date}</small>
            <hr/>
            <p>{resourceItem.description}</p>
            <div className='img-holder'>
              <img src={resourceItem.src} alt={resourceItem.alt}/>
            </div>
          </div>
          )
    )
};

export default ResourceItem;

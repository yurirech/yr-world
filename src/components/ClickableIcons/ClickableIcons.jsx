import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// List of Clickable icons
const ClickableIcons = props => {
  return (
    <div className='list-with-icons'>
      {
        props.clickableIcons.map((clickableIcon, i) => (
        <a key={i} href={clickableIcon.href} rel='noopener noreferrer' target={clickableIcon.target}>
          <FontAwesomeIcon key={i} icon={clickableIcon.icon} />
        </a>
      ))}
    </div>
  );
};

export default ClickableIcons;

import React from "react";
//withRouter is a highered  order component, which is a func that takes a comp as an arg and returns you a modified comp
import { withRouter } from 'react-router-dom';

import "./menu-item.styles.scss";

//objects passed from our directory component are passed into to this MenuItem functional component
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {/* for hover effect */}
    <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
    }}/>

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

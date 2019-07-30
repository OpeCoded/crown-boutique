import React from "react";

import "./menu-item.styles.scss";

//objects passed from our directory component are passed into to this MenuItem functional component
const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`${size} menu-item`}
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

export default MenuItem;

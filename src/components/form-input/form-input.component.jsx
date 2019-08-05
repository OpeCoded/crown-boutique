import React from "react";

import "./form-input.styles.scss";

//this is form individual input field, all this props are from the sign in component, the otherProps are all the values from signin comp e.g email,pass,onchange...
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {/* this is the actual label text */}
        {label}
      </label>
    ) : null}
  </div>
);


export default FormInput;
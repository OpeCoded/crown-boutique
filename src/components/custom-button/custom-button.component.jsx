import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  //the props up are usually what is down, they are passed up, so all the children will be accessed by the custom button ()
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

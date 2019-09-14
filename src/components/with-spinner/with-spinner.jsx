import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//the is our spinner function, it takes some functionalities inform of a component (wrappedcomp) to know when its loading ...and some otherProps
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    //if its loading render the spinner
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      //if its not loading, render the component that we passed in as normal, receiving all the props that it would receive
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;

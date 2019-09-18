import React, { useState } from "react";

import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  //this our useState, it returns an array = useState passing in initial or default values as empty string
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  //getting email and password from userCredentials
  const { email, password } = userCredentials;

  //triggers when the submit button is clicked
  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  //this is fired when the user starts typing
  const handleChange = event => {
    //this are the data we pull from the event as the user types in the text field
    //name and value are the name and value of our textfield
    const { value, name } = event.target;
    //we are setting the value(userCredentials, the first value in useState array) to data we pull from event (has user types in the text field using the textfield name and its value attribute) i.e the object ({ email, password}) we want our useState or state to be and we also spread in userCredentials
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      {/* the onSubmit here calls the handelSubmit() up that prevents the default submit action from firing to have full control over what the submit btn is going to do */}
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);

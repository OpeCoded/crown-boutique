import React from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    //empty string for what the users will type
    this.state = {
      email: "",
      password: ""
    };
  }

  //triggers when the submit button is clicked
  handleSubmit = async event => {
    event.preventDefault();

    //destructure off the email and password off our state
    const { email, password } = this.state;

    //signing in with email and password
    try {
      await auth.signInWithEmailAndPassword(email, password);
      //clearing the fields after the user clicks submit
      //setting email and password field to an empty string when the onsubmit is called
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  //this is fired when the user starts typing
  handelChange = event => {
    //this are the data we pull from the event as user types
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        {/* the onSubmit here calls the handelSubmit() up that prevents the default submit action from firing to have full control over what the submit btn is going to do */}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handelChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handelChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

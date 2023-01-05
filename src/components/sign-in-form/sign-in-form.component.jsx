import React, { useState } from "react";
import {
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";

const deafultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(deafultFormField);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInAuthUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        setFormFields(deafultFormField);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            alert("incorrect password for email");
            break;
          case "auth/wrong-password":
            alert("no user associated with this email");
            break;
          default:
            console.log(error);
            break;
        }
      });
  };

  const signInWIthGoogle = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(response.user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWIthGoogle} buttonType="google">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

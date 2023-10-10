import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../Mutation/user-mutations";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [registerInput, setRegisterInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
  });

  const [register] = useMutation(REGISTER_USER);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRegisterInput({
      ...registerInput,
      [name]: value,
    });
  };
  const { firstName, lastName, email, password, location, occupation } =
    registerInput;

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !location ||
      !occupation
    ) {
      return alert("Please fill out all the fields!");
    }
    register({
      variables: {
        firstName,
        lastName,
        email,
        password,
        location,
        occupation,
      },
    });
    alert("Successful Registration");
    navigate("/");
  };

  return (
    <div className="reg-div">
      <h1 className="reg-title">Register</h1>
      <form className="reg-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Occupation"
          name="occupation"
          onChange={changeHandler}
        />
        <button type="submit">Send</button>
      </form>
      <p className="bottom-text">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

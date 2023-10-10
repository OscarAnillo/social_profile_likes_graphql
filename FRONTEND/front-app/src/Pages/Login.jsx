import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../Mutation/user-mutations";
import { useDispatch } from "react-redux";
import { setLogin } from "../Redux/Features/user-slice";

export const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [login] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const { email, password } = userInput;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please provide all the required data");
    }
    login({
      variables: { email, password },
    })
      .then((res) => {
        //console.log(res.data.login);
        dispatch(setLogin(res.data.login));
        navigate("/home");
      })
      .catch((err) => {
        return alert(err.message);
      });
  };

  return (
    <div className="login-div">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={submitHandler}>
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
        <button type="submit">Send</button>
      </form>
      <p className="bottom-text">
        Dont have an account? <Link to="/register">Register here!</Link>
      </p>
    </div>
  );
};

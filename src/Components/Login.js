import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import { toastNotif } from "./toast";
import "./SignUp.css";

import Input from "./Input";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const { email, pass } = data;

  const [error, setError] = useState({});

  useEffect(() => {
    setError(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const [touch, setTouch] = useState({});

  const focusHandler = (e) => {
    setTouch({ ...touch, [e.target.name]: true });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (!Object.keys(error).length) {
      toastNotif("Login successfull", "success");
    } else {
      toastNotif("Invalid data", "error");
      setTouch({
        email: true,
        pass: true,
      });
    }
  };

  return (
    <div className="container">
      <form className="formContainer" onSubmit={formSubmit}>
        <h2 className="header">Login</h2>

        <Input
          inp={error.email && touch.email ? "uncompleted" : "formInput"}
          classname="formField"
          label="Email :"
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={error.email && touch.email && <span>{error.email}</span>}
        />

        <Input
          inp={error.pass && touch.pass ? "uncompleted" : "formInput"}
          classname="formField"
          label="Password :"
          name="pass"
          type="password"
          value={pass}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={error.pass && touch.pass && <span>{error.pass}</span>}
        />

        <div className="formButtons">
          <Link to="/signup">Sign Up</Link>
          <button type="submit">Login</button>
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;

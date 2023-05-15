import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import { toastNotif } from "./toast";
import "./SignUp.css";

import Input from "./Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
    confirmpass: "",
    isAgreed: false,
  });
  const { name, email, pass, confirmpass, isAgreed } = data;

  const [error, setError] = useState({});

  useEffect(() => {
    setError(validate(data,'signup'));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAgreed") {
      setData({ ...data, isAgreed: !isAgreed });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const [touch, setTouch] = useState({});

  const focusHandler = (e) => {
    setTouch({ ...touch, [e.target.name]: true });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (!Object.keys(error).length) {
      toastNotif("Sign Up successfull", "success");
    } else {
      toastNotif("Invalid data", "error");
      setTouch({
        name: true,
        email: true,
        pass: true,
        confirmpass: true,
        isAgreed: true,
      });
    }
  };

  return (
    <div className="container">
      <form className="formContainer" onSubmit={formSubmit}>
        <h2 className="header">Sign Up</h2>

        <Input
          inp={error.name && touch.name ? "uncompleted" : "formInput"}
          classname="formField"
          label="Username :"
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={error.name && touch.name && <span>{error.name}</span>}
        />

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

        <Input
          inp={
            error.confirmpass && touch.confirmpass ? "uncompleted" : "formInput"
          }
          classname="formField"
          label="Confirm Password :"
          name="confirmpass"
          type="password"
          value={confirmpass}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={
            error.confirmpass &&
            touch.confirmpass && <span>{error.confirmpass}</span>
          }
        />

        <div className="formField">
          <div className="checkBoxContainer">
            <label>I accept agreement</label>
            <input
              className={
                error.isAgreed && touch.isAgreed ? "uncompleted" : "formInput"
              }
              type="checkbox"
              name="isAgreed"
              value={isAgreed}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {error.isAgreed && touch.isAgreed && <span>{error.isAgreed}</span>}
        </div>

        <div className="formButtons">
          <Link to="/login">Login</Link>
          <button type="submit">SignUp</button>
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;

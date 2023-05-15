import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import { toastNotif } from "./toast";

import Input from "./Input";

const Form = () => {
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
    setError(validate(data));
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
    <div>
      <form onSubmit={formSubmit}>
        <h2>Form</h2>

        <Input
          label="Username :"
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={error.name && touch.name && error.name}
        />

        <Input
          label="Email :"
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={error.email && touch.email && error.email}
        />

        <Input
          label="Password :"
          name="pass"
          type="password"
          value={pass}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={error.pass && touch.pass && error.pass}
        />

        <Input
          label="Confirm Password :"
          name="confirmpass"
          type="password"
          value={confirmpass}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={
            error.confirmpass && touch.confirmpass && error.confirmpass
          }
        />

        <Input
          label="I accept agreement"
          type="checkbox"
          name="isAgreed"
          value={isAgreed}
          onChange={changeHandler}
          onFocus={focusHandler}
          condition={error.isAgreed && touch.isAgreed && error.isAgreed}
        />

        <a href="#">Login</a>
        <button type="submit">SignUp</button>

        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;

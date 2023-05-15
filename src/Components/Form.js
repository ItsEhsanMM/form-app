import React, { useState, useEffect } from "react";
import { validate } from "./validate";

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

  return (
    <div>
      <form>
        <h2>Form</h2>

        <div>
          <label>UserName :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.name && touch.name && error.name}
        </div>

        <div>
          <label>Email :</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.email &&touch.email && error.email}
        </div>

        <div>
          <label>Password :</label>
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.pass && touch.pass && error.pass}
        </div>

        <div>
          <label>Confirm Password :</label>
          <input
            type="text"
            name="confirmpass"
            value={confirmpass}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.confirmpass && touch.confirmpass && error.confirmpass}
        </div>

        <div>
          <label>I accept agreement</label>
          <input
            type="checkbox"
            name="isAgreed"
            value={isAgreed}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.isAgreed && touch.isAgreed && error.isAgreed}
        </div>

        <a href="#">Login</a>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Form;

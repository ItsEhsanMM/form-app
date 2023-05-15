import React, { useState, useEffect } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
    confirmpass: "",
    isAgreed: false,
  });
  const { name, email, pass, confirmpass, isAgreed } = data;

  const changeHandler = (event) => {
    if (event.target.name === "isAgreed") {
      setData({ ...data, isAgreed: !isAgreed });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
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
          />
        </div>

        <div>
          <label>Email :</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Password :</label>
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Confirm Password :</label>
          <input
            type="text"
            name="confirmpass"
            value={confirmpass}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>I accept agreement</label>
          <input
            type="checkbox"
            name="isAgreed"
            value={isAgreed}
            onChange={changeHandler}
          />
        </div>

        <a href="#">Login</a>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Form;

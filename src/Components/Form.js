import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <h2>Form</h2>

        <div>
          <label>UserName :</label>
          <input type="text" name="username" />
        </div>

        <div>
          <label>Email :</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Password :</label>
          <input type="password" name="pass" />
        </div>
        <div>
          <label>Confirm Password :</label>
          <input type="text" name="confirmpass" />
        </div>

        <div>
          <label>I accept agreement</label>
          <input type="checkbox" name="agreement" />
        </div>

        <a href="#">Login</a>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Form;

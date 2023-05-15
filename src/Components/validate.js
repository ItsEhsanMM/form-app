export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "email required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      data.email
    )
  ) {
    errors.email = "Email is not valid";
  } else {
    delete errors.email;
  }

  if (data.pass.length === 0) {
    errors.pass = "password required";
  } else if (data.pass.length < 6) {
    errors.pass = "password must be at least 6 character";
  } else {
    delete errors.pass;
  }

  if (type === "signup") {
    if (!data.confirmpass) {
      errors.confirmpass = "confirm your password";
    } else if (data.confirmpass !== data.pass) {
      errors.confirmpass = "password does not match";
    } else {
      delete errors.confirmpass;
    }

    if (!data.isAgreed) {
      errors.isAgreed = "Accept our agreement";
    } else {
      delete errors.isAgreed;
    }

    if (!data.name.trim()) {
      errors.name = "UserName required";
    } else {
      delete errors.name;
    }
  }

  return errors;
};

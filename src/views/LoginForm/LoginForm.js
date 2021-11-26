import { useState } from "react";
const LoginForm = ({ submit }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(values);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  );
};

export default LoginForm;

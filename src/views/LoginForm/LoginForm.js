const LoginForm = () => {
  return (
    <form>
      <label htmlFor="username">Username: </label>
      <input id="username" type="text" name="username" />
      <label htmlFor="password">Password: </label>
      <input id="password" type="password" name="password" />

      <button>Submit</button>
    </form>
  );
};

export default LoginForm;

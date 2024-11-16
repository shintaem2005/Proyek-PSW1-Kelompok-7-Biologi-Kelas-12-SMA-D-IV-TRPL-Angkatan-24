import { useState } from "react"

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in:', credentials);
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
        <h2 className="text-center">Login Form</h2>
        <div className="mb-3">
          <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
          />
        </div>

        <div className="mb-3">
          <input 
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

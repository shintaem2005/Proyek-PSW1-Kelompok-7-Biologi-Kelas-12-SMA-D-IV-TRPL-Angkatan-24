import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email === "" && credentials.password === "") {
      console.log('Logged in:', credentials);

      navigate("/home");
    }
    else {
      setError("invalid email or password");
    }
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
        <h2 className="text-center">Login Form</h2>
        {error && <p className="text-danger">{error}</p>}
        
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
      <p className="text-center mt-3">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;

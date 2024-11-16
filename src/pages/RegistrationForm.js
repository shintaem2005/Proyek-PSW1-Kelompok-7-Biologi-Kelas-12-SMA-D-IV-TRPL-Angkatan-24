import React,{ useState } from "react"
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('Harus diisi');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
    }
    console.log('Registered:', formData);

    navigate("/login")
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Registration Form</h2>
        {error && <p className="text-danger">{error}</p>}

        <div className="mb-3">
          <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          />
        </div>

        <div className="mb-3">
          <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formData.email}
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
          value={formData.password}
          onChange={handleChange}
          required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

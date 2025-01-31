import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from '../../assets/style/background.jpg';

const SignUp = () => {
  const initialUserDetails = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const [data, setData] = useState(initialUserDetails);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };

    setData(updatedData);
    setErrors({ ...errors, [name]: '' }); 
    localStorage.setItem('userInput', JSON.stringify(updatedData));

  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const minLength = 8;
    if (password.length < minLength) {
      return 'Password must be at least 8 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number.';
    }
    if (!/@/.test(password)) {
      return 'Password must contain at least one special character (@).';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = data;

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const passwordValidationMessage = isValidPassword(password);
    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (passwordValidationMessage) {
      newErrors.password = passwordValidationMessage;
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
  const users = JSON.parse(localStorage.getItem('user') || '[]');
    const updatedUsers = [...users, { name, email, password }];
    localStorage.setItem('user', JSON.stringify(updatedUsers));


        alert('SignUp Successful');
       setErrors({});
        setData(initialUserDetails); 
        navigate('/login');
  };

  return (
  
    <div className="container-fluid"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                overflow: "hidden"
            }}>

    <div className="d-flex justify-content-center align-items-center mt-1" style={{ minHeight: "100vh" }} >
    <div className="bg-white p-2 shadow-lg" style={{ width: "100%", maxWidth: "400px"}}>
      <h2 className="text-center mb-2">Sign Up</h2>
      {errors.form && <p className="text-red-500 text-sm mb-2">{errors.form}</p>}
   
       <form onSubmit={handleSubmit} className="w-100 mx-auto">
        <div className="mb-4">
          <label  className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="form-control" 
             value={data.name}
            onChange={handleInput}
            required
          />
        </div>
        {errors.name && <p className="text-danger">{errors.name}</p>} 

        <div className="mb-4">
          <label className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="form-control" 
             value={data.email}
            onChange={handleInput}
            required
          />
        </div>
        {errors.email && <p className="text-danger">{errors.email}</p>} 

        <div className="mb-4">
          <label  className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="form-control" 
             value={data.password}
            onChange={handleInput}
            required
          />
        </div>
        {errors.password && <p className="text-danger">{errors.password}</p>} 

        <div className="mb-4">
          <label className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="form-control" 
             value={data.confirmPassword}
            onChange={handleInput}
            required
          />
        </div>
        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>} 

        <button
          type="submit"
          className="w-full py-2 px-4 btn btn-primary text-white rounded-md"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Already have an account?{" "} 
        <Link to="/login" className="text-indigo-600 hover:underline">
        Login
        </Link>
        </p>
        </div>
            </div>
            </div>
);
};

export default SignUp;

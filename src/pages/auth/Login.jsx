import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import backgroundImage from '../../assets/style/background.jpg'; 


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
            setErrors((prev) => ({ ...prev, email: "" }));
        }

        if (name === "password") {
            setPassword(value);
            setErrors((prev) => ({ ...prev, password: "" }));
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        const minLength = 8;
        if (password.length < minLength) return "Password must be at least 8 characters long.";
        if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter.";
        if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter.";
        if (!/[0-9]/.test(password)) return "Password must contain at least one number.";
        if (!/@/.test(password))
            return "Password must contain at least one special character.";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!isValidEmail(email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!password) {
            newErrors.password = "Password is required.";
        } else {
            const passwordError = isValidPassword(password);
            if (passwordError) newErrors.password = passwordError;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const getDetails = JSON.parse(localStorage.getItem("user")) || [];
        if (!Array.isArray(getDetails)) {
            setErrors({ form: "User data is corrupted. Please try again later." });
            return;
        }

        const user = getDetails.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            alert("Login successfully");
            navigate("/Home");
        } else {
            setErrors({ form: "Invalid Email or Password!" });
        }
    };

    return (

        <div className="container-fluid"
        style ={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundAttachment: "fixed",
           minHeight: "100vh",
        }}>
        <div className="d-flex justify-content-center align-items-center " style={{ minHeight: "100vh" }}>
        <div className="bg-white p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px"}}>
          <h2 className="text-center mb-4">Login</h2>
          {errors.form && <p className="text-red-500 text-sm mb-2">{errors.form}</p>}
          <form onSubmit={handleSubmit} className="w-100 mx-auto">
            <div className="mb-4">
              <label className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                value={email}
                onChange={handleInput}
                required
              />
            </div>
            {errors.email && <p className="text-danger">{errors.email}</p>}

            <div className="mb-4">
              <label className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="form-control"
                value={password}
                onChange={handleInput}
                required
              />
            </div>
            {errors.password && <p className="text-danger">{errors.password}</p>}

            <button
              type="submit"
              className="w-full py-2 px-4 btn btn-primary text-white rounded-md hover:bg-indigo-700"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don't have an account? 
            <Link to="/" className="text-indigo-600 hover:underline">
            Sign up 
            </Link>
            </p>

            
        </div>
    </div>
    </div>
    );
}

export default Login;

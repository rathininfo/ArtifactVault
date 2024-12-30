import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { createUser, signWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; // Reference to the form element
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    // Password Validation
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      alert(passwordError);
      return;
    }

    // Call createUser to register the user and update their profile
    createUser(email, password, name, photoURL)
      .then((result) => {
        console.log("User registered successfully:", result);
        navigate("/login"); // Redirect after successful registration
      })
      .catch((error) => {
        console.log("Error registering user:", error.message);
        setError(error.message); // Set error message to display to the user
      });
  };

  // Password Validation
  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Password must have at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must have at least one lowercase letter.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  // Google SignIn Handler
  const handleGoogleLogin = async () => {
    try {
      await signWithGoogle(); // Sign in with Google
      navigate("/"); // Redirect to home page or dashboard after successful Google login
    } catch (error) {
      setError(error.message || "Google login failed!");
      alert(error.message || "Google login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 font-bold mb-2"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
          >
            Register with Google
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

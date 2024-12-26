import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogin = () => navigate("/login");

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log("User successfully logged out");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error.message);
      });
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 left-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Website Name/Logo */}
        <Link to="/" className="text-2xl font-bold">
          ArtifactVault
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/all-artifacts" className="hover:underline">
            All Artifacts
          </Link>
          <Link to="/add-artifact" className="hover:underline">
            Add Artifact
          </Link>
          {!user ? (
            <button
              onClick={handleLogin}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Login
            </button>
          ) : (
            <div className="relative">
              {/* User Profile */}
              <button
                className="flex items-center focus:outline-none"
                onClick={toggleDropdown}
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="h-10 w-10 rounded-full"
                />
              </button>

              {/* Display User Name on Hover */}
              <div
                className={`absolute top-12 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded shadow-md text-sm z-40 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                {user.displayName || "User"}
              </div>

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-48 z-30 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
                onClick={(e) => e.stopPropagation()} // Prevent click events from closing the dropdown
              >
                <Link
                  to="/my-artifacts"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  My Artifacts
                </Link>
                <Link
                  to="/liked-artifacts"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Liked Artifacts
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-red-200"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-600 text-white shadow-md">
          <div className="flex flex-col items-center gap-4 py-4 my-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/artifacts" className="hover:underline">
              All Artifacts
            </Link>
            <Link to="/add-artifact" className="hover:underline">
              Add Artifact
            </Link>
            {!user ? (
              <button
                onClick={handleLogin}
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                Login
              </button>
            ) : (
              <>
                <p className="font-semibold bg-green-500 px-2">
                  {user.displayName || "User"}
                </p>
                <Link
                  to="/my-artifacts"
                  className="block hover:underline transition duration-300"
                >
                  My Artifacts
                </Link>
                <Link
                  to="/liked-artifacts"
                  className="block hover:underline transition duration-300"
                >
                  Liked Artifacts
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

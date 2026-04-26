import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">

      {/* Logo */}
      <h2 className="text-xl font-bold text-blue-600">
        AI Code Review
      </h2>

      {/* Right Side */}
      <div className="space-x-4 flex items-center">

        {/* Always visible */}
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>

        {/* 🔓 NOT logged in */}
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Signup
            </Link>
          </>
        ) : (
          /* 🔐 Logged in */
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
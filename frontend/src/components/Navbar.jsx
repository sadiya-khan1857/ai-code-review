import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
      <h2 className="text-xl font-bold text-blue-600">
        AI Code Review
      </h2>

      <div className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link to="/signup" className="text-gray-700 hover:text-blue-600">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
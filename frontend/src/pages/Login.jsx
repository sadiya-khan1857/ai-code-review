import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="text-right mb-4">
          <Link to="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          New user?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
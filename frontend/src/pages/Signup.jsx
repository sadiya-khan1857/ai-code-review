import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">

      {/* 🌈 Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700"></div>

      {/* soft overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 🧊 Glass Card */}
      <div className="relative w-full max-w-md">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-white">

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center">
            Create Account ✨
          </h2>

          <p className="text-center text-white/70 text-sm mt-1 mb-6">
            Start your AI-powered code reviews
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm text-white/80">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition shadow-md"
          >
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-5 text-white/70">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-200 hover:underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;
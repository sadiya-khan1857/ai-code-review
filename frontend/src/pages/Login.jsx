import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">

      {/* 🌫 Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

      {/* subtle noise overlay feel */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 🧊 Glass Card */}
      <div className="relative w-full max-w-md">

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8 text-white">

          {/* Header */}
          <h2 className="text-2xl font-semibold text-center">
            Welcome Back
          </h2>

          <p className="text-center text-white/60 text-sm mt-1 mb-6">
            Sign in to continue your code reviews
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="text-sm text-white/70">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Forgot */}
          <div className="text-right mb-5">
            <Link to="#" className="text-xs text-blue-300 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition shadow-md"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-5 text-white/60">
            New here?{" "}
            <Link to="/signup" className="text-blue-300 hover:underline">
              Create account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
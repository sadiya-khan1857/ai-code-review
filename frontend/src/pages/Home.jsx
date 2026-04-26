import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-6">

      {/* HERO */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          AI-Powered Code Review 🚀
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Analyze your code instantly, detect issues, and get optimized solutions.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow"
          >
            Start Reviewing
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">⚡ Instant Analysis</h3>
          <p className="text-gray-600 text-sm">
            Get real-time feedback on your code.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">🐞 Bug Detection</h3>
          <p className="text-gray-600 text-sm">
            Detect issues with severity levels.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">✨ Code Optimization</h3>
          <p className="text-gray-600 text-sm">
            Get improved code suggestions instantly.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;
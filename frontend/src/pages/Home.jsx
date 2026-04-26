import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-6">

      {/* HERO */}
      <div className="text-center max-w-3xl animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          AI-Powered Code Review 🚀
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Analyze your code instantly, detect issues, and get optimized solutions.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Start Reviewing
          </button>
        </div>
      </div>

      {/* CODE PREVIEW CARD */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-4 w-full max-w-2xl transform hover:scale-[1.02] transition duration-300">
        <div className="text-xs text-gray-400 mb-2">example.py</div>
        <pre className="text-sm font-mono text-gray-800">
{`def add(a, b):
    return a + b

# ✔ Optimized successfully`}
        </pre>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            ⚡ Instant Analysis
          </h3>
          <p className="text-gray-600 text-sm">
            Get real-time feedback on your code.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-2 text-red-500">
            🐞 Bug Detection
          </h3>
          <p className="text-gray-600 text-sm">
            Detect issues with severity levels.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-2 text-green-600">
            ✨ Code Optimization
          </h3>
          <p className="text-gray-600 text-sm">
            Get improved code suggestions instantly.
          </p>
        </div>

      </div>

      {/* FOOTER LINE */}
      <p className="mt-16 text-sm text-gray-400">
        Built with AI • Clean UI • Fast Feedback
      </p>

      {/* ANIMATION STYLE */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}

export default Home;
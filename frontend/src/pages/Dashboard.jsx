import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";

function Dashboard() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const [history, setHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    Prism.highlightAll();
  }, [review]);

  const handleReview = async () => {
    if (!code.trim()) {
      setError("Please enter code first");
      return;
    }

    setLoading(true);
    setError("");
    setReview(null);

    setTimeout(() => {
      const data = {
        issues: [
          {
            type: "Bug",
            severity: "high",
            message: "Unused variable",
            line: 12,
          },
        ],
        suggestions: ["Remove unused variables"],
        improved_code: `def add(a, b):
    return a + b`,
        created_at: new Date().toISOString(),
      };

      setReview(data);
      setHistory((prev) => [data, ...prev]);
      setLoading(false);
    }, 1000);
  };

  const getBadge = (severity) => {
    const base = "px-2 py-1 rounded text-xs font-semibold";

    switch (severity?.toLowerCase()) {
      case "high":
        return <span className={`${base} bg-red-100 text-red-600`}>🔴 High</span>;
      case "medium":
        return <span className={`${base} bg-orange-100 text-orange-600`}>🟠 Medium</span>;
      case "low":
        return <span className={`${base} bg-yellow-100 text-yellow-600`}>🟡 Low</span>;
      default:
        return <span className={base}>{severity}</span>;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(review.improved_code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (date) => new Date(date).toLocaleString();

  return (
    <div className="flex h-screen bg-gray-50">

      {/* 🔹 SIDEBAR */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white border-r shadow-sm transition-all duration-300 flex flex-col`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-3 hover:bg-gray-100"
        >
          {sidebarOpen ? "⬅" : "➡"}
        </button>

        {sidebarOpen && (
          <h2 className="px-4 font-semibold text-gray-700">
            Review History
          </h2>
        )}

        <div className="flex-1 overflow-y-auto p-2">
          {history.length === 0 ? (
            sidebarOpen && (
              <p className="text-gray-500 text-sm">No reviews yet</p>
            )
          ) : (
            history.map((item, i) => (
              <div
                key={i}
                onClick={() => setReview(item)}
                className="cursor-pointer p-2 rounded hover:bg-gray-100 text-sm"
              >
                {sidebarOpen ? (
                  <>
                    <div>Review {i + 1}</div>
                    <div className="text-xs text-gray-400">
                      {formatDate(item.created_at)}
                    </div>
                  </>
                ) : (
                  "📄"
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* 🔹 MAIN */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Dashboard
            </h1>
            <p className="text-gray-500 text-sm">
              Analyze your code and review results
            </p>
          </div>

          {/* INPUT CARD */}
          <div className="bg-white p-5 rounded-xl shadow-sm border space-y-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <div className="flex justify-between items-center">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
              </select>

              <button
                onClick={handleReview}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Review Code
              </button>
            </div>
          </div>

          {/* ERROR */}
          {error && <p className="text-red-500">{error}</p>}

          {/* LOADING */}
          {loading && (
            <div className="bg-white p-4 rounded-lg shadow text-blue-600">
              Analyzing code...
            </div>
          )}

          {/* OUTPUT */}
          {review && (
            <div className="space-y-6">

              {/* ISSUES */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <h2 className="text-lg font-semibold p-4 border-b">
                  Issues Found
                </h2>

                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-gray-600">
                    <tr>
                      <th className="p-3 text-left">Type</th>
                      <th className="p-3 text-left">Severity</th>
                      <th className="p-3 text-left">Issue</th>
                      <th className="p-3 text-left">Line</th>
                    </tr>
                  </thead>

                  <tbody>
                    {review.issues.map((item, i) => (
                      <tr key={i} className="border-t hover:bg-gray-50">
                        <td className="p-3">{item.type}</td>
                        <td className="p-3">{getBadge(item.severity)}</td>
                        <td className="p-3">{item.message}</td>
                        <td className="p-3">{item.line || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* SUGGESTIONS */}
              <div className="bg-white p-5 rounded-xl shadow-sm border">
                <h2 className="text-lg font-semibold mb-3">
                  Suggestions
                </h2>

                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {review.suggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              {/* CODE */}
              <div className="bg-white p-5 rounded-xl shadow-sm border">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold">
                    Improved Code
                  </h2>

                  <button
                    onClick={handleCopy}
                    className="text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm">
                  <code className={`language-${language}`}>
                    {review.improved_code}
                  </code>
                </pre>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
import { useState, useEffect } from "react";
import Prism from "prismjs";


// Prism languages
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";

// Theme
import "prismjs/themes/prism-tomorrow.css";

// Plugins
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

function Dashboard() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Python");
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const [history, setHistory] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }, [review, language]);

  const getPrismLanguage = (lang) => {
    switch (lang) {
      case "Python":
        return "python";
      case "JavaScript":
        return "javascript";
      case "Java":
        return "java";
      default:
        return "javascript";
    }
  };

  const getLineHighlights = () => {
    if (!review?.issues) return "";
    return review.issues
      .map((item) => item.line)
      .filter(Boolean)
      .join(",");
  };

  // 🔥 UPDATED: save full review data
  const handleReview = async () => {
    if (!code.trim()) {
      setError("Please enter code first");
      return;
    }

    setLoading(true);
    setError("");
    setReview(null);

    try {
      const data = {
        issues: [
          {
            type: "Bug",
            severity: "high",
            message: "Unused variable",
            line: 2,
          },
        ],
        suggestions: ["Remove unused variables"],
        improved_code: `def add(a, b):
    temp = 10
    return a + b`,
        original_code: code,       // ✅ added
        language: language,        // ✅ added
        created_at: new Date().toISOString(),
      };

      setReview(data);
      setHistory((prev) => [data, ...prev]);
    } catch {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  // 🔥 NEW: handle history click properly
  const handleHistoryClick = (item) => {
    setReview(item);
    setCode(item.original_code);
    setLanguage(item.language);

    setTimeout(() => {
      document
        .getElementById("result-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
    <div className="flex h-screen bg-gray-100">

      {/* 🔹 SIDEBAR */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white border-r transition-all duration-300 flex flex-col`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-3 hover:bg-gray-100 text-lg"
        >
          {sidebarOpen ? "⬅" : "➡"}
        </button>

        {sidebarOpen && (
          <h2 className="font-bold px-4 mb-2">Review History</h2>
        )}

        <div className="flex-1 overflow-y-auto px-2">
          {history.length === 0 ? (
            sidebarOpen && (
              <p className="text-gray-500 text-sm px-2">
                No reviews yet
              </p>
            )
          ) : (
            history.map((item, i) => (
              <div
                key={i}
                onClick={() => handleHistoryClick(item)}
                title={!sidebarOpen ? `Review ${i + 1}` : ""}
                className={`cursor-pointer mb-2 rounded hover:bg-gray-100 transition ${
                  review === item ? "bg-blue-100" : ""
                } ${sidebarOpen ? "p-2 text-sm" : "p-3 text-center"}`}
              >
                {sidebarOpen ? (
                  <>
                    <div>Review {i + 1}</div>
                    <div className="text-xs text-gray-500">
                      {formatDate(item.created_at)}
                    </div>
                  </>
                ) : (
                  <span>📄</span>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-1 p-6 overflow-y-auto">
       

        
        <h1 className="text-3xl font-bold mb-6 text-center">
          Smart AI Code Review System
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Paste your code and get instant AI-powered feedback 🚀
        </p>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="w-full h-40 p-4 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded mb-4"
        >
          <option>Python</option>
          <option>JavaScript</option>
          <option>Java</option>
        </select>

        <br />

        <button
          onClick={handleReview}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mb-6 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Review Code"}
        </button>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading && <p className="text-blue-600">Analyzing code...</p>}

        {review && (
          <div id="result-section" className="space-y-6">

            {/* Issues */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Detected Issues</h2>

              {review.issues?.length === 0 ? (
                <p className="text-green-600">No issues found 🎉</p>
              ) : (
                <table className="w-full border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Type</th>
                      <th className="p-2 border">Severity</th>
                      <th className="p-2 border">Issue</th>
                      <th className="p-2 border">Line</th>
                    </tr>
                  </thead>
                  <tbody>
                    {review.issues.map((item, i) => (
                      <tr key={i} className="text-center">
                        <td className="p-2 border">{item.type}</td>
                        <td className="p-2 border">
                          {getBadge(item.severity)}
                        </td>
                        <td className="p-2 border">{item.message}</td>
                        <td className="p-2 border">{item.line || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Suggestions */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Suggestions</h2>
              <ul className="list-disc pl-6 space-y-1">
                {review.suggestions?.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Improved Code */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Improved Code</h2>

                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded">
                    {language}
                  </span>

                  <button
                    onClick={handleCopy}
                    className="text-sm bg-gray-800 text-white px-3 py-1 rounded"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <pre
                data-line={getLineHighlights()}
                className="line-numbers rounded overflow-auto text-sm p-4 bg-[#2d2d2d]"
              >
                <code className={`language-${getPrismLanguage(language)}`}>
                  {review.improved_code}
                </code>
              </pre>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
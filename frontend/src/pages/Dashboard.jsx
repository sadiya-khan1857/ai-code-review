import { useState } from "react";

function Dashboard() {
  const [showResult, setShowResult] = useState(false);

  const handleReview = () => {
    setShowResult(true);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
       AI Code Review System
      </h1>

      {/* Code Input */}
      <textarea
        placeholder="Paste your code here..."
        className="w-full h-48 p-4 border rounded-lg mb-4"
      />

      {/* Language */}
      <select className="p-2 border rounded mb-4">
        <option>Python</option>
        <option>JavaScript</option>
        <option>Java</option>
      </select>

      <br />

      {/* Button */}
      <button
        onClick={handleReview}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg mb-6"
      >
        Review Code
      </button>

      {/* Output Section */}
      {showResult && (
        <div className="space-y-6">

          {/* Issues Table */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Issues Found</h2>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Type</th>
                  <th className="p-2 border">Severity</th>
                  <th className="p-2 border">Issue</th>
                  <th className="p-2 border">Line</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Bug</td>
                  <td className="p-2 border text-red-500">High</td>
                  <td className="p-2 border">Unused variable</td>
                  <td className="p-2 border">12</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Suggestions */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Suggestions</h2>
            <ul className="list-disc pl-6">
              <li>Remove unused variables</li>
              <li>Improve naming conventions</li>
            </ul>
          </div>

          {/* Improved Code */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Improved Code</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto">
{`def add(a, b):
    return a + b`}
            </pre>
          </div>

        </div>
      )}
    </div>
  );
}

export default Dashboard;
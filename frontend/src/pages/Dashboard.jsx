function Dashboard(){
    return(
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-centre">AI Code Review Dashboard</h1>

            <textarea
            placeholder="Paste Your Code Here"
            className="w-full h-48 p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="p-2 border rounded mb-4">
            <option>Select Language</option>
            <option>Python</option>
            <option>JavaScript</option>
            <option>Java</option>
            
            </select>
        
            <br />

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Review Code
            </button>


        
        </div>
    
    )


}

export default Dashboard
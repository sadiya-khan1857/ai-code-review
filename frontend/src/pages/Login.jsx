function Login(){
    return(
        <div className="flex items-centre justify-centre h-scrreen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4 text-centre">Login</h2>
                <input 
                type="email"
                placeholder="Emaill" 
                className="w-full mb-3 p-2 border rounded "/>
                
                <input 
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 border rouded " />

                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Login
                </button>


            
            
            </div>
        
        
        
        
        </div>
    
    
    
    
    )


}

export default Login
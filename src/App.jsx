import { useState } from 'react'
import AdminPanel from './Components/AdminPanel'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
function App() {
  

  return (
    <>
       <Router>
   
    
    <div className="min-h-[calc(100vh-200px)]">
      <Routes>
        
        <Route path="/admin-panel" element={<AdminPanel />} />
        
      </Routes>
    </div>
    
  </Router>
      
    </>
  )
}

export default App

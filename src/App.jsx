import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel";

function App() {
  return (
    <Router>
      <div className="min-h-[calc(100vh-200px)]">
        <Routes>
          {/* Add these 2 routes */}
          <Route path="/" element={<Navigate to="/admin-panel" replace />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
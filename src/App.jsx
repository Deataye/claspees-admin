import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel";

function App() {
  return (
    <Router>
      <div className="min-h-[calc(100vh-200px)]">
        <Routes>
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
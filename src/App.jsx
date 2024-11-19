import Dashboard from "./dashboard/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;

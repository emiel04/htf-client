import Dashboard from "./Dashboard.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "./NavigationBar.jsx";
import "./index.css";

function App() {
    return (
        <Router>
            <div className="p-4">
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/about" element={<div>About Page</div>}/>
                    <Route path="/contact" element={<div>Contact Page</div>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

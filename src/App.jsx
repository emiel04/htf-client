import Dashboard from "./Dashboard.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "./NavigationBar.jsx";
import "./index.css";
import ChallengesPage from "./ChallengesPage.jsx";
import Challenge from "./Challenge.jsx";

function App() {
    return (
        <Router>
            <div className="p-4">
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/challenges" element={<ChallengesPage/>}/>
                    <Route path="/challenge/:id" element={<Challenge/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

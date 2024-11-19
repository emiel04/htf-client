import ChallengeCardDashboard from "./ChallengeCardDashboard.jsx";
import {useState} from "react";
import LevelProgress from "./components/LevelComponent.jsx";
import PieChart from "./components/CompletedChart.jsx";

function Dashboard() {
    const [name, setName] = useState("Bobby")
    const [completed, setCompleted] = useState(60);
    const [max] = useState(100);

    return (
        <div className="h-[calc(100vh-7.1rem)] grid grid-rows-[0.5fr_1fr] grid-cols-2 gap-4">
            <div className="bg-neutral shadow-xl rounded-xl flex">
                <div className="avatar flex">
                    <div className="h-48 rounded-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="Profile"
                        />
                    </div>
                </div>

                <div className={"flex flex-col"}>
                    <h2 className={"text-white font-bold text-2xl "}>{name}</h2>
                    <LevelProgress xp={350}></LevelProgress>
                </div>
            </div>
            <div className="bg-neutral shadow-xl rounded-xl flex justify-evenly">
                <PieChart completed={completed} max={max} />
                <PieChart completed={completed} max={max} />
                <PieChart completed={completed} max={max} />
            </div>
            <div className="bg-neutral shadow-xl rounded-xl overflow-hidden">
                <ul className="h-full p-5 flex gap-5 flex-col overflow-y-auto">
                    <ChallengeCardDashboard/>
                    <ChallengeCardDashboard/>
                    <ChallengeCardDashboard/>
                    <ChallengeCardDashboard/>
                    <ChallengeCardDashboard/>
                    <ChallengeCardDashboard/>
                </ul>
            </div>

            <div className="shadow-xl bg-neutral rounded-xl">
                <div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;

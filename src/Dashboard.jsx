import ChallengeCardDashboard from "./ChallengeCardDashboard.jsx";

function Dashboard() {
    return (
        <div className="h-[calc(100vh-7rem)] grid grid-rows-[0.5fr_1fr] grid-cols-2 gap-4">
            <div className="bg-neutral shadow-xl col-span-2 rounded-xl relative">
                <div className="avatar absolute top-4 left-4">
                    <div className="w-48 rounded-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-neutral shadow-xl rounded-xl overflow-hidden">
                <ul className="h-full p-5 flex gap-4 flex-col overflow-y-auto">
                    <ChallengeCardDashboard />
                    <ChallengeCardDashboard />
                    <ChallengeCardDashboard />
                    <ChallengeCardDashboard />
                    <ChallengeCardDashboard />
                    <ChallengeCardDashboard />
                </ul>
            </div>

            <div className="shadow-xl bg-neutral rounded-xl"></div>
        </div>
    );
}

export default Dashboard;

function LeaderboardCardDashboard({ name, xp, i }) {
    // Calculate level based on XP (starting at level 1)
    const level = Math.floor(xp / 100) + 1;

    // Define styles for ranking (gold, silver, bronze)
    let rankingColor = "";
    if (i === 1) {
        rankingColor = "text-gold";  // Gold
    } else if (i === 2) {
        rankingColor = " text-silver";  // Silver
    } else if (i === 3) {
        rankingColor = " text-bronze";  // Bronze
    } else {
        rankingColor = "text-neutral";  // Default for others
    }

    return (
        <div className="bg-base-100 h-32 rounded-xl flex w-3/5">
            <div className="avatar">
                <div className="w-32 rounded-l-xl">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt={name}
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center ml-2 gap-3 ">
                <h2 className="text-3xl font-bold text-neutral">{name}</h2>
                <span className="badge badge-secondary text-xl p-3 flex gap-1">Level {level}</span>
            </div>

            <div className="font-md flex flex-col items-center flex-1 justify-center gap-3">
                <h3 className={`text-6xl font-bold ${rankingColor}`}>#{i}</h3>
            </div>
        </div>
    );
}

export default LeaderboardCardDashboard;

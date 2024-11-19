import { useState } from "react";
import ChallengeCardChallenges from "./ChallengeCardChallenges.jsx";

function ChallengesPage() {
    const challenges = [
        { id: 1, title: "Test your aim", xp: 250, points: 10, difficulty: "HARD" },
        { id: 2, title: "Speed runner", xp: 200, points: 15, difficulty: "MEDIUM" },
        { id: 3, title: "Puzzle master", xp: 300, points: 20, difficulty: "HARD" },
        { id: 4, title: "Logic guru", xp: 150, points: 5, difficulty: "EASY" },
        { id: 5, title: "Sharpshooter", xp: 275, points: 12, difficulty: "MEDIUM" },
        { id: 6, title: "Timekeeper", xp: 100, points: 8, difficulty: "EASY" },
    ];
    const [searchQuery, setSearchQuery] = useState("");
    const filteredChallenges = challenges.filter((challenge) =>
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-[calc(100vh-7rem)] p-4 overflow-y-auto">
            <div className="mb-4  flex justify-center">
                <input
                    type="text"
                    placeholder="Search challenges..."
                    className="input input-bordered w-full max-w-lg mx-auto"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
                {filteredChallenges.map((challenge) => (
                    <ChallengeCardChallenges key={challenge.id} id={challenge.id} xp={challenge.xp} points={challenge.points} title={challenge.title} difficulty={challenge.difficulty} />
                ))}
            </div>
        </div>
    );
}

export default ChallengesPage;

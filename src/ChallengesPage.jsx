
import ChallengeCardChallenges from "./ChallengeCardChallenges.jsx";

function ChallengesPage() {
    return (
        <div className="h-[calc(100vh-7rem)] p-4 overflow-y-auto">
            <div className="flex flex-wrap gap-4 justify-center">
                <ChallengeCardChallenges/>
                <ChallengeCardChallenges/>
                <ChallengeCardChallenges/>
                <ChallengeCardChallenges/>
                <ChallengeCardChallenges/>
                <ChallengeCardChallenges/>
            </div>
        </div>
    );
}

export default ChallengesPage;

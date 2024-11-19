import ProgressBar from './bar.jsx';

const LevelProgress = ({ xp }) => {
    // Calculate the level based on XP (starting at level 1)
    const level = Math.floor(xp / 100) + 1;
    const xpToNextLevel = 100 * level;
    const xpAtCurrentLevel = xp % 100; // XP within the current level
    const progress = (xpAtCurrentLevel / 100) * 100; // Progress bar percentage

    return (
        <div className="max-w-sm rounded-lg flex flex-col h-full w-full">
            <h2 className="text-2xl font-semibold mb-2 text-white">Level: {level}</h2>
            <p className="text-white">XP: {xp}</p>

            {/* Progress Bar */}
            <ProgressBar progress={progress} />

            <p className="mt-2 text-sm text-white">
                {xpAtCurrentLevel} XP to next level
            </p>
        </div>
    );
};

export default LevelProgress;
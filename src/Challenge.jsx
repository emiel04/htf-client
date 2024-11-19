import BreathingCircle from "./BreathingCircle.jsx";

function Challenge() {
    return (
        <div className="h-[calc(100vh-7rem)] grid grid-cols-2 gap-4">
            <div className="bg-neutral p-6  text-white rounded-xl">
                <h1 className="text-3xl font-bold mb-4">Breathing Exercise</h1>
                <p className="text-lg mb-6">
                    This exercise helps you relax, reduce stress, and improve your focus. Follow the animation to synchronize your breathing.
                </p>
                <ul className="list-disc pl-5 text-lg">
                    <li>Inhale deeply as the circle expands.</li>
                    <li>Exhale slowly as the circle contracts.</li>
                    <li>Repeat for 5 minutes to feel calm and centered.</li>
                </ul>
            </div>
            <div className="rounded-xl bg-neutral flex justify-center items-center">
                <BreathingCircle />
            </div>
        </div>
    );
}

export default Challenge;

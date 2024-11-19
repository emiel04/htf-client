import BreathingCircle from "./BreathingCircle.jsx";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function Challenge() {
    const [timeLeft, setTimeLeft] = useState(10);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            toast.success("Challenge Completed!");
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startExercise = () => {
        setTimeLeft(10);
        setIsRunning(true);
    };

    return (
        <div className="h-[calc(100vh-7rem)] grid grid-cols-2 gap-4">
            <Toaster />
            <div className="bg-neutral p-6 text-white rounded-xl">
                <h1 className="text-3xl font-bold mb-4">Breathing Exercise</h1>
                <p className="text-lg mb-6">
                    This exercise helps you relax, reduce stress, and improve your focus. Follow the animation to synchronize your breathing.
                </p>
                <ul className="list-disc pl-5 text-lg">
                    <li>Inhale deeply as the circle expands.</li>
                    <li>Exhale slowly as the circle contracts.</li>
                    <li>Repeat for 10 seconds to feel calm and centered.</li>
                </ul>
                <button
                    onClick={startExercise}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                >
                    Start Exercise
                </button>
            </div>
            <div className="rounded-xl bg-neutral flex justify-center items-center">
                <BreathingCircle timeLeft={timeLeft} isRunning={isRunning} />
            </div>
        </div>
    );
}

export default Challenge;

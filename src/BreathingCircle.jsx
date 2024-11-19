import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function BreathingCircle({ timeLeft, isRunning }) {
    const circleRef = useRef(null);
    const waveRefs = useRef([]);

    useEffect(() => {
        if (isRunning) {
            gsap.to(circleRef.current, {
                scale: 1.5,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });

            waveRefs.current.forEach((wave, index) => {
                gsap.to(wave, {
                    scale: 1 + (index + 1) * 0.5,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                });
            });
        } else {
            gsap.killTweensOf(circleRef.current);
            waveRefs.current.forEach((wave) => gsap.killTweensOf(wave));
        }
    }, [isRunning]);

    return (
        <div className="relative w-40 h-40">
            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    ref={(el) => (waveRefs.current[index] = el)}
                    className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-full opacity-50"
                ></div>
            ))}
            <div
                ref={circleRef}
                className="relative w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
                <p className="text-white text-xl font-bold">
                    {timeLeft > 0 ? `${timeLeft}s` : "Done"}
                </p>
            </div>
        </div>
    );
}

export default BreathingCircle;

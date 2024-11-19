import { useRef, useState } from "react";
import { gsap } from "gsap";

function BearhingCircle() {
    const circleRef = useRef(null);
    const waveRefs = useRef([]);
    const [text, setText] = useState("Click to Start");

    const startExercise = () => {
        gsap.to(circleRef.current, {
            scale: 1.5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            onRepeat: () => {
                setText((prevText) =>
                    prevText === "Breathe In" ? "Breathe Out" : "Breathe In"
                );
            },
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

        setText("Breathe In");
    };

    return (
        <div className="">
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
                    onClick={startExercise}
                    className="relative w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                >
                    <p className="text-white text-xl font-bold">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default BearhingCircle;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function ChallengeCardChallenges({ title, xp, points, difficulty }) {
    return (
        <motion.div
            className="h-96 w-[calc((100%-2rem)/3)] flex-shrink-0 rounded-xl bg-base-100 flex flex-col items-center justify-center gap-6 p-4 shadow-2xl"
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <FontAwesomeIcon icon={faBullseye} size="8x" className="text-black" />
            <h2 className="text-2xl font-bold self-start">{title}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur corporis expedita fuga hic
            </p>
            <div className="self-end flex gap-2">
                <div className="badge badge-primary text-md font-bold p-2">{xp} xp</div>
                <div className="badge badge-secondary text-md font-bold p-2">{points} pt</div>
                <div className="badge badge-accent text-md font-bold p-2">{difficulty}</div>
            </div>
        </motion.div>
    );
}

export default ChallengeCardChallenges;

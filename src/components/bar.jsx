const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-gray-600 rounded-full mt-4">
            <div
                className="h-2 rounded-full bg-green-500"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;

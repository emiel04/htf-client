function ChallengeCardDashboard() {
    return <div className="bg-base-100 h-32 rounded-xl flex">
        <div className="avatar">
            <div className="w-32 rounded-l-xl">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
            </div>
        </div>

        <div className="flex flex-col justify-center ml-2 gap-3">
            <h2 className="text-3xl font-bold">This is a title</h2>
            <div className="text-xl">Lorem ipsum dolor sit amet, consec</div>
        </div>
        <div className="font-md flex flex-col items-center flex-1 justify-center gap-3">
            <div className="badge badge-secondary text-xl p-3 flex gap-1"><span
                className="font-extrabold">250</span>xp
            </div>
            <div className="badge badge-primary text-xl p-3 flex gap-1"><span
                className="font-extrabold">20</span>pt
            </div>
        </div>
    </div>
}

export default ChallengeCardDashboard;
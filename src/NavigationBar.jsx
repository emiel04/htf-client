import {Link} from "react-router-dom";

function NavigationBar() {
    return <div
        className="navbar bg-base-100 shadow-xl rounded-lg border border-gray-100 hover:shadow-xl transition duration-300 mb-3">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl font-extrabold"> <Link to="/">NASA</Link></a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link to="/challenges">challenges</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
    </div>
}

export default NavigationBar;
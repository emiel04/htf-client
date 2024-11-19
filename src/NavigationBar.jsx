function NavigationBar() {
    return <div
        className="navbar bg-base-100 shadow-xl rounded-lg border border-gray-100 hover:shadow-xl transition duration-300 mb-3">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl font-extrabold">NASA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a>Item 1</a></li>
                <li><a>Item 3</a></li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
    </div>
}

export default NavigationBar;
import { Link, Outlet } from "react-router-dom"

function Layout  (){
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
        <hr></hr>
        <Outlet></Outlet>
    </div>
}
export default Layout
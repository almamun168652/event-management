import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <div>
            <nav className="border-b">
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
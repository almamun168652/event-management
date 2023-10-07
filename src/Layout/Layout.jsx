import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <header className="border-b">
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer className="mt-12">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;
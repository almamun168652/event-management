import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {

    const { user , logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(res=> {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const navLinks = <>
        <li className="">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] font-bold border-b-2 border-[#152475]" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] font-bold border-b-2 border-[#152475]" : ""
                }
            >
                Contact
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] font-bold border-b-2 border-[#152475]" : ""
                }
            >
                Login
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] font-bold border-b-2 border-[#152475]" : ""
                }
            >
                Register
            </NavLink>
        </li>
    </>

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="navbar bg-base-100 flex justify-between">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="text-[#152475] font-bold text-3xl">Talk Expo</Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="flex gap-4 menu menu-horizontal px-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="">
                    {
                        user ?
                            <button onClick={handleSignOut} className="text-[#152475] hover:bg-[#152475] hover:text-[white] font-semibold px-3 py-1 rounded border border-[#152475]">Log Out</button>
                            :
                            <Link to='/login'> <button className="text-[#152475] hover:bg-[#152475] hover:text-[white] font-semibold px-3 py-1 rounded border border-[#152475]">Log In</button> </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// className="text-[#152475] hover:bg-[#152475] hover:text-[white] font-semibold px-3 py-1 rounded border border-[#152475]">Log In
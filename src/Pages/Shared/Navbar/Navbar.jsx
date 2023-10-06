import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li className="">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#152475] text-white font-semibold" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/speacial"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#152475] text-white" : ""
                }
            >
                Speacial
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/latest"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#152475] text-white" : ""
                }
            >
                Latest
            </NavLink>
        </li>
    </>

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="navbar bg-base-100 flex">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link className="text-[#152475] font-bold text-3xl">Science Lit</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 menu menu-horizontal px-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="text-[#152475] hover:bg-[#152475] hover:text-[white] font-bold px-4 py-1 rounded-md border border-2 border-[#152475]">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
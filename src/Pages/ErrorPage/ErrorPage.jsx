import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[#152475] mb-4">Page Not Found</h1>
                <img className="mx-auto w-3/4 md:w-1/3" src="https://i.ibb.co/ZJPgg9Q/3793096.jpg" alt="" />

                <Link to='/'>
                    <p className="text-white inline-block bg-[#152475] hover:bg-white hover:text-[#152475] transition-all border hover:border-[#152475] px-6 py-2">GO HOME</p>
                </Link>

            </div>
        </div>
    );
};

export default ErrorPage;
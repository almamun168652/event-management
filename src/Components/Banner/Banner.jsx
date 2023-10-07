import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 my-4">
            <div className="hero min-h-[80vh] bg-[url('https://i.ibb.co/r7hLtq2/banner.png')] bg-cover bg-no-repeat bg-center">
                <div className="hero-content flex-col h-full w-full lg:flex-row bg-gradient-to-r from-[#24aca5c6] to-[#1934ced2]">
                    <div className="text-center w-full md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold text-white"><span>Talk Expo</span> Digital Conference</h1>
                        <p className="text-md md:text-lg my-4 text-white">No grand idea was ever born in a conference, but a lot of foolish ideas have died there.</p>
                        <span className="text-white hover:bg-[#152475] transition-all text-sm border px-4 py-1"><Link>Learn More</Link></span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
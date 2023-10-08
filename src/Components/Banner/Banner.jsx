import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 my-4">
            <div className="hero min-h-[80vh] bg-[url('https://i.ibb.co/r7hLtq2/banner.png')] bg-cover bg-no-repeat bg-center">
                <div className="hero-content flex-col h-full w-full lg:flex-row bg-gradient-to-r from-[#24aca5c6] to-[#1934ced2]">
                    <div data-aos="fade-up" data-aos-duration="1000" className="text-center w-full md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold text-white"><span>Talk Expo</span> Digital Conference</h1>
                        <p className="text-md md:text-lg my-6 text-white">No grand idea was ever born in a conference, but a lot of foolish ideas have died there.</p>
                        <span className="text-white hover:bg-[#152475] transition-all border px-6 py-2"><Link>Get Started</Link></span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
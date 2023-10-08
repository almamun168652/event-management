import { MdLocationPin, MdOutlineMailOutline, MdCall } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
    return (
        <div className="max-w-screen-xl px-4 mx-auto my-20">

            <div  data-aos="flip-left" className="flex flex-col md:flex-row gap-10 justify-between p-10 border">
                <div className="w-full md:w-1/2">
                    <h1 className=" text-2xl md:text-4xl font-bold">Get Every Single <br />Update Here</h1>
                    <form className="my-5">
                        <input className="bg-[#1523752d] w-full px-4 py-4 my-2" type="text" placeholder="Enter Your Name" /><br />
                        <input className="bg-[#1523752d] w-full px-4 py-4 my-2" type="text" placeholder="Enter Your Email" /><br />
                        <input className="bg-[#1523752d] w-full px-4 py-4 my-2" type="text" placeholder="Enter Your Phone Number" /><br />
                        <input className="text-white inline-block mt-5 bg-[#152475] hover:bg-white hover:text-[#152475] transition-all border hover:border-[#152475] px-8 py-4" type="submit" value="Submit Now" />
                    </form>
                </div>
                <div className="w-full md:w-1/2">
                    <img className="w-full h-full" src="https://i.ibb.co/S6cMGhD/istockphoto-1168945108-612x612.jpg" alt="" />
                </div>
            </div>

            <div  data-aos="flip-right" className='flex flex-col md:flex-row justify-between shadow-xl min-h-[450px] my-20 border border-[#152475]'>
                <div className='w-full md:w-1/2 p-10'>
                    <img src="https://i.ibb.co/k4j6L4b/contact-icn.png" alt="" />
                    <h1 className=" text-3xl md:text-5xl mb-2 font-bold text-[#152475]">Lets get in touch</h1>
                    <p className='text-gray-500'>Please fill in the form to start conversation with us.</p>
                    <p className='text-black my-2 flex text-xl gap-1 font-semibold items-center'><MdLocationPin /> 2752 Willison Street Eagan, United State</p>
                    <p className='text-black my-2 flex text-xl gap-1 font-semibold items-center'><MdCall /> 01783-141675</p>
                    <p className='text-black my-2 flex text-xl gap-1 font-semibold items-center'><MdOutlineMailOutline /> talk@expo.com</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className="relative flex flex-col h-full bg-[#152475] p-10 text-white">
                        <h1 className='text-3xl font-semibold mb-5'>Contact Us</h1>
                        <form className="w-full h-full">
                            <div className="mb-4 flex flex-col gap-6">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Name
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Email
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type="password"
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Password
                                    </label>
                                </div>
                            </div>
                            <div className="inline-flex items-center">
                                <label
                                    className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />

                                </label>
                                <label
                                    className="mt-px cursor-pointer select-none font-light"
                                    htmlFor="checkbox"
                                >
                                    <p className="flex items-center font-sans text-sm font-normal leading-normal  antialiased">
                                        I agree the
                                        <a
                                            className="font-medium transition-colors hover:text-pink-500"
                                            href="#"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </p>
                                </label>
                            </div>
                            <button
                                className="mt-6 block w-full select-none rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#152475] hover:bg-transparent border-2 hover:text-white border-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;
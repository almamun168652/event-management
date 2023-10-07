import { MdLocationPin, MdAccessTimeFilled } from 'react-icons/md';



const Details = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 my-10">
            <div className='shadow-lg p-4 bg-gradient-to-r from-[#50c8c2ab] to-[rgba(49,81,197,0.37)]'>

                {/* <div className='flex flex-col lg:flex-row md:justify-between'> */}

                {/* <div className="p-3">
                        <div className='flex flex-col lg:flex-row items-center gap-10 mb-4'>
                            <img className='h-52 w-52 rounded-full border-4 border-white' src="https://i.ibb.co/Mgksc6h/technology-service.jpg" alt="" />
                            <div className='text-center'>
                                <h1 className='text-black font-bold text-2xl'>Speaker in the Conference</h1>
                                <h1 className='font-bold text-6xl'>John Die</h1>
                                <p>Web Developer, California, London</p>
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-col lg:flex-row justify-between font-semibold text-[#152475]'>
                                <span className='flex gap-1 items-center'><MdLocationPin /> Programming Hero Auditorium, London</span>
                                <span className='flex gap-1 items-center'><MdAccessTimeFilled /> 9.30 - 10.30 AM</span>
                            </div>
                            <h1 className='text-black text-3xl font-bold'>Technology Conferences - 2023</h1>
                            <p className="text-sm text-gray-600">Welcome to the Technology Conference 2023, where innovation meets inspiration! Join us for a dynamic gathering of industry leaders, tech visionaries, and thought-provoking discussions. Explore the latest advancements in AI, IoT, blockchain, cybersecurity, and more, while networking with top professionals shaping the future of technology. Dont miss this opportunity to stay at the forefront of the tech revolution.
                            </p>
                            <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center mt-2">
                                <p className="text-[#152475] text-xl font-bold">Ticket Price: $100</p>
                                <button className="relative w-full md:w-auto inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                    <span className="relative w-full md:w-auto px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Booking Now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className='object-cover w-full max-h-72 lg:h-auto lg:w-72 md:h-auto border-4 border-white rounded-md' src="https://i.ibb.co/Mgksc6h/technology-service.jpg" alt="" /> */}

                {/* </div> */}


                <div>
                    <div className='flex justify-around w-full'>
                        <div className='flex flex-col md:flex-row md:gap-20 items-center mb-4'>
                            <img className='h-52 w-52 rounded-full border-4 border-white' src="https://i.ibb.co/Mgksc6h/technology-service.jpg" alt="" />
                            <div className='text-center'>
                                <h1 className='text-black font-bold text-2xl'>Speaker in the Conference</h1>
                                <h1 className='font-bold text-6xl'>John Die</h1>
                                <p>Web Developer, California, London</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col-reverse lg:flex-row gap-10'>
                        <div>
                            <div className='flex flex-col md:flex-row justify-between font-semibold text-[#152475]'>
                                <span className='flex gap-1 items-center'><MdLocationPin /> Programming Hero Auditorium, London</span>
                                <span className='flex gap-1 items-center'><MdAccessTimeFilled /> 9.30 - 10.30 AM</span>
                            </div>
                            <h1 className='text-black text-3xl font-bold'>Technology Conferences - 2023</h1>
                            <p className="text-sm text-gray-600">Welcome to the Technology Conference 2023, where innovation meets inspiration! Join us for a dynamic gathering of industry leaders, tech visionaries, and thought-provoking discussions. Explore the latest advancements in AI, IoT, blockchain, cybersecurity, and more, while networking with top professionals shaping the future of technology. Dont miss this opportunity to stay at the forefront of the tech revolution.
                            </p>
                            <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center mt-2">
                                <p className="text-[#152475] text-xl font-bold">Ticket Price: $100</p>
                                <button className="relative w-full md:w-auto inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                    <span className="relative w-full md:w-auto px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Booking Now
                                    </span>
                                </button>
                            </div>
                        </div>
                        <img className='object-cover border-4 h-52 w-full border-white rounded-md' src="https://i.ibb.co/Mgksc6h/technology-service.jpg" alt="" />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;
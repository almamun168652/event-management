import { MdLocationPin, MdAccessTimeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SingleService = () => {
    return (
        <div>
            <div className="border shadow-xl rounded-lg border-gray-300">
                {/* card */}
                <div>

                    {/* single card */}
                    <div className=''>
                        <img className='object-cover rounded-t-md h-52 w-full mx-auto' src="https://i.ibb.co/Mgksc6h/technology-service.jpg" alt="" />
                        <div className="p-3">
                            <div className='font-semibold text-[#152475]'>
                                <span className='flex gap-1 items-center'><MdLocationPin /> Programming Hero Auditorium, London</span>
                                <span className='flex gap-1 items-center'><MdAccessTimeFilled /> 9.30 - 10.30 AM</span>
                            </div>
                            <h1 className='text-black text-xl font-bold'>Technology Conferences - 2023</h1>
                            <p className="text-sm text-gray-600">Welcome to the Technology Conference 2023, where innovation meets inspiration! Join us for a dynamic gathering of industry leaders...</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-[#152475] font-bold">Ticket Price: $100</p>
                                <span className="text-white hover:font-semibold rounded-md bg-[#152475] hover:text-[#152475] hover:bg-transparent border-1 border-transparent hover:border-[#152475] transition-all text-sm border px-4 py-2"><Link>View Details</Link></span>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;


{/* <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
</div> */}

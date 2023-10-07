import { MdLocationPin, MdAccessTimeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SingleService = ({ service }) => {


    const { card_img , id  , address , time , title , description , price} = service || {}


    return (
        <div>
            <div className="border shadow-xl rounded-lg border-gray-300">
                {/* card */}
                <div>

                    {/* single card */}
                    <div className=''>
                        <img className='object-cover rounded-t-md h-52 w-full mx-auto' src={card_img} alt="" />
                        <div className="p-3">
                            <div className='font-semibold text-[#152475]'>
                                <span className='flex gap-1 items-center'><MdLocationPin /> {address}</span>
                                <span className='flex gap-1 items-center'><MdAccessTimeFilled /> {time}</span>
                            </div>
                            <h1 className='text-black text-xl font-bold'>{title}</h1>
                            <p className="text-sm text-gray-600">{description.slice(0,100)}</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-[#152475] font-bold">Ticket Price: ${price}</p>
                                <Link to={`/details/${id}`}>
                                    <span className="text-white hover:font-semibold rounded-md bg-[#152475] hover:text-[#152475] hover:bg-transparent border-1 border-transparent hover:border-[#152475] transition-all text-sm border px-4 py-2">View Details</span>
                                </Link>
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

SingleService.propTypes = {
    service: PropTypes.object.isRequired
}

export default SingleService;



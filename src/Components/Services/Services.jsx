import { MdLocationPin , MdAccessTimeFilled } from 'react-icons/md';

const Services = () => {
    return (
        <div className="my-4">
            {/* title */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-black ">Our Services</h1>
                <span className="text-sm text-gray-600">Our all Services that you can Considers</span>
            </div>
            {/* card */}
            <div>
                <div>
                    <div>
                        <img src="https://i.ibb.co/Mgksc6h/technology-service.jpg" alt="" />
                    </div>
                    <div>
                        <span><MdLocationPin/> Programming Hero Auditorium, London</span>
                        <span><MdAccessTimeFilled/> 9.30 - 10.30 AM</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Services;
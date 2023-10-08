import SingleService from "../SignleService/SingleService";
import PropTypes from 'prop-types';

const Services = ({services}) => {

    return (
        <div className="my-8 max-w-screen-xl mx-auto px-4">
            {/* title */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-black mb-1">Our Services</h1>
                <span className="text-sm text-gray-600">Our all Services that you can Considers</span>
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
                    {
                        services?.map(service => <SingleService key={service.id} service={service}></SingleService>)
                    }
                </div>
            </div>

        </div>
    );
};


Services.propTypes = {
    services: PropTypes.array.isRequired
}


export default Services;
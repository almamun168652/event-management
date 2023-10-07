import SingleService from "../SignleService/SingleService";


const Services = () => {
    return (
        <div className="my-8 max-w-screen-xl mx-auto px-4">
            {/* title */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-black ">Our Services</h1>
                <span className="text-sm text-gray-600">Our all Services that you can Considers</span>
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
                    <SingleService></SingleService>
                    <SingleService></SingleService>
                    <SingleService></SingleService>
                    <SingleService></SingleService>
                    <SingleService></SingleService>
                    <SingleService></SingleService>
                </div>
            </div>

        </div>
    );
};

export default Services;
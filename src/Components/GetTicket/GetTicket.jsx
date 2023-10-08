import { Link } from "react-router-dom";


const GetTicket = () => {
    return (
        <div>
            <div>

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-black mb-1">Get Your Ticket</h1>
                </div>

                <div className="w-full md:w-3/4 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* single card */}
                    <div className="text-center bg-white border shadow-xl p-4 rounded-lg space-y-5">
                        <p className="uppercase text-lg font-bold">Basic Pass</p>
                        <h1 className="text-[#152475] font-bold text-4xl">$60</h1>
                        <div className="flex h-[60px] items-center">
                            <p className="text-sm text-gray-500">Regular seating comfortable seat, Coffee Break photos allowed one workshop certificate.</p>
                        </div>
                        <p className="text-[#152475] font-bold">Price Excluding 20% VAT</p>
                        <p className="text-white inline-block bg-[#152475] hover:bg-white hover:text-[#152475] transition-all border hover:border-[#152475] px-6 py-2"><Link>BUY TICKET</Link></p>
                    </div>

                    <div className="text-center bg-white border shadow-xl p-4 rounded-lg space-y-5">
                        <p className="uppercase text-lg font-bold">Standard Pass</p>
                        <h1 className="text-[#152475] font-bold text-4xl">$84</h1>
                        <div className="flex h-[60px] items-center">
                            <p className="text-sm text-gray-500">Two Day Conference Ticket Coffee-break & Networking Posters session. Lunch & Networking Task.</p>
                        </div>
                        <p className="text-[#152475] font-bold">Price Excluding 20% VAT</p>
                        <p className="text-white inline-block bg-[#152475] hover:bg-white hover:text-[#152475] transition-all border hover:border-[#152475] px-6 py-2"><Link>BUY TICKET</Link></p>
                    </div>

                    <div className="text-center bg-white border shadow-xl p-4 rounded-lg space-y-5">
                        <p className="uppercase text-lg font-bold">Golden Pass</p>
                        <h1 className="text-[#152475] font-bold text-4xl">$99</h1>
                        <div className="flex h-[60px] items-center">
                            <p className="text-sm text-gray-500">ThreeDay Conference Ticket Comfortable Seat Photos Allowed Coffee Break. One Certificate.</p>
                        </div>
                        <p className="text-[#152475] font-bold">Price Excluding 20% VAT</p>
                        <p className="text-white inline-block bg-[#152475] hover:bg-white hover:text-[#152475] transition-all border hover:border-[#152475] px-6 py-2"><Link>BUY TICKET</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTicket;

// https://i.ibb.co/vjR2j29/get-ticket.jpg
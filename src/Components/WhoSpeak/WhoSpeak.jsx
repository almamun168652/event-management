

const WhoSpeak = () => {
    return (
        <div className="max-w-screen-xl px-4 md:px-20 mx-auto my-16">
            {/* title */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-black mb-1">Who Speak?</h1>
                <span className="text-sm text-gray-600">Welcome to the dedicated to Building remarkable speakers.</span>
            </div>


            <div className="my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6  gap-x-20">
                    {/* single card */}
                    <div className="mx-auto">
                        <img className="object-cover h-80 w-72 border border-[#152475]" src="https://i.ibb.co/xqnLFys/speaker-1.jpg" alt="" />
                        <div className="bg-white p-4 text-center shadow-xl w-10/12 mx-auto relative -top-8 border-b border-[#152475]">
                            <p className="text-[#152475] font-bold">Aurora Summitshine</p>
                            <span className="text-gray-500 text-sm">CyberTech Maestro</span>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <img className="object-cover h-80 w-72 border border-[#152475]" src="https://i.ibb.co/yYR1ZtP/medical-Ins.jpg" alt="" />
                        <div className="bg-white p-4 text-center shadow-xl w-10/12 mx-auto relative -top-8 border-b border-[#152475]">
                            <p className="text-[#152475] font-bold">Xavier Vanguard</p>
                            <span className="text-gray-500 text-sm">Senior Medical Lecturer</span>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <img className="object-cover h-80 w-72 border border-[#152475]" src="https://i.ibb.co/XYqbW68/education-ins.jpg" alt="" />
                        <div className="bg-white p-4 text-center shadow-xl w-10/12 mx-auto relative -top-8 border-b border-[#152475]">
                            <p className="text-[#152475] font-bold">Seraphina Thunderheart</p>
                            <span className="text-gray-500 text-sm">Associate Professor Finance.</span>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <img className="object-cover h-80 w-72 border border-[#152475]" src="https://i.ibb.co/QmNvGVP/science-ins.jpg" alt="" />
                        <div className="bg-white p-4 text-center shadow-xl w-10/12 mx-auto relative -top-8 border-b border-[#152475]">
                            <p className="text-[#152475] font-bold">Maximus Starcaster</p>
                            <span className="text-gray-500 text-sm">Scientific Research Specialist.</span>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <img className="object-cover h-80 w-72 border border-[#152475]" src="https://i.ibb.co/M6YgS4y/leadership-ins.jpg" alt="" />
                        <div className="bg-white p-4 text-center shadow-xl w-10/12 mx-auto relative -top-8 border-b border-[#152475]">
                            <p className="text-[#152475] font-bold">Isabella Moonstrider</p>
                            <span className="text-gray-500 text-sm">Leadership Specialist.</span>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <img className="object-cover h-80 w-72 border border-[#152475]" src="https://i.ibb.co/LnWQSKq/fashion-designer.jpg" alt="" />
                        <div className="bg-white p-4 text-center shadow-xl w-10/12 mx-auto relative -top-8 border-b border-[#152475]">
                            <p className="text-[#152475] font-bold">Orion Zenithspeaker</p>
                            <span className="text-gray-500 text-sm">Fashion Designer USA</span>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default WhoSpeak;
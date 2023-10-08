


const Blog = () => {
    return (
        <div>
            

            <div className="hero mt-8 md:mt-14 min-h-[50vh] bg-cover bg-no-repeat bg-center">
                <div className="flex-col h-full w-full lg:flex-row bg-gradient-to-r from-[#24aca5c6] to-[#1934ced2]">
                    <div className="text-center mx-auto w-full md:w-1/2">
                        <img src="https://i.ibb.co/N20Y2ML/blog-img.png" alt="" />
                    </div>
                </div>
            </div>

            {/* blog */}
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto text-black max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold ">Our Blog</h2>
                        <p className="sm:text-xl ">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <article className="p-6 rounded-lg shadow-xl border bg-white border-[#152475]">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Tutorial
                                </span>
                                <span className="text-sm">14 days ago</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#152475]"><a href="#">1. Marco Giberti: The Event Planning Maverick</a></h2>
                            <p className="mb-5 text-gray-500 font-semibold">With more than 25 years in the event and tech industries, Marco Giberti (Founder of Vesuvio Ventures) is an event planning maverick with a rich media, events, and technology history. His event planning blog articles on Linkedin are a priceless asset for event planners and enthusiasts striving to remain at the forefront of this ever-evolving industry.

                                In addition to Giberti’s impressive entrepreneurial journey, his articles are a go-to for anyone interested in technology’s impact on live events, reflections on the ever-changing media landscape, and discussions on the future of corporate innovation. </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img className="w-10 h-10 border-2 border-[#152475] rounded-full" src="https://i.ibb.co/XYqbW68/education-ins.jpg" alt="Jese Leos avatar" />
                                    <span className="font-bold text-md text-[#152475]">
                                        Seraphina Thunderheart
                                    </span>
                                </div>
                                <a href="#" className="inline-flex items-center font-medium text-[#152475] hover:text-black underline">
                                    Read more
                                </a>
                            </div>
                        </article>
                        <article className="p-6 rounded-lg shadow-xl border bg-white border-[#152475]">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    Article
                                </span>
                                <span className="text-sm">14 days ago</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#152475]"><a href="#">2. Julius Solaris: The Man Behind Boldpush</a></h2>
                            <p className="mb-5 text-gray-500 font-semibold">With a remarkable track record — from establishing Showthemes and EventMB (now Skift Meetings) to founding Boldpush and becoming a sought-after keynote speaker — Julius Solaris is undeniably an authority in the world of event planning and technology.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img className="w-10 h-10 border-2 border-[#152475] rounded-full" src="https://i.ibb.co/yYR1ZtP/medical-Ins.jpg" alt="Bonnie Green avatar" />
                                    <span className="font-bold text-md text-[#152475]">
                                        Maximus Starcaster
                                    </span>
                                </div>
                                <a href="#" className="inline-flex items-center font-medium text-[#152475] hover:text-black underline">
                                    Read more
                                </a>
                            </div>
                        </article>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 mt-8">
                        <article className="p-6 rounded-lg shadow-xl border bg-white border-[#152475]">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Tutorial
                                </span>
                                <span className="text-sm">14 days ago</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#152475]"><a href="#">3. BizBash: The Place for Event Innovation</a></h2>
                            <p className="mb-5 text-gray-500 font-semibold">BizBash by David Adler is one of our favorite outlets for inspiration. With its focus on creativity and innovation, Bizbash covers a spectrum of topics, including event design, technology, venues, catering, and trade shows.

                                From the experiential marketing tactics of Fortune 500 companies to the intricate details of venue selection, get a scoop on what the leading professionals are coming up with. Explore groundbreaking event marketing blog articles, featured spotlights, informative white papers, and captivating podcasts to get creative ideas for your next conference.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img className="w-10 h-10 border-2 border-[#152475] rounded-full" src="https://i.ibb.co/QmNvGVP/science-ins.jpg" />
                                    <span className="font-bold text-md text-[#152475]">
                                        Isabella Moonstrider
                                    </span>
                                </div>
                                <a href="#" className="inline-flex items-center font-medium text-[#152475] hover:text-black underline">
                                    Read more
                                </a>
                            </div>
                        </article>
                        <article className="p-6 rounded-lg shadow-xl border bg-white border-[#152475]">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    Article
                                </span>
                                <span className="text-sm">14 days ago</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#152475]"><a href="#">4. techsytalk: The Place To Find Liz King Caruso</a></h2>
                            <p className="mb-5 text-gray-500 font-semibold">Stay in the loop on the latest innovations and best practices by following techsytalk’s amazing event blog, led by Liz King Caruso and a team of seasoned event experts. They’ve got insights, resources, and a fantastic podcast called The Event Hustler Show.

                                This vibrant community has much to say about event technology and engagement strategies. They are all about elevating attendee experiences, whether in-person or virtual, making techsytalk a valuable hub for anyone in the events industry seeking to grow and stay updated.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <img className="w-10 h-10 border-2 border-[#152475] rounded-full" src="https://i.ibb.co/LnWQSKq/fashion-designer.jpg" alt="Bonnie Green avatar" />
                                    <span className="font-bold text-md text-[#152475]">
                                        Orion Zenithspeaker
                                    </span>
                                </div>
                                <a href="#" className="inline-flex items-center font-medium text-[#152475] hover:text-black underline">
                                    Read more
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;
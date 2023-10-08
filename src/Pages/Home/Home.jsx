import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import WhoSpeak from "../../Components/WhoSpeak/WhoSpeak";
import GetTicket from "../../Components/GetTicket/GetTicket";


const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <WhoSpeak></WhoSpeak>
            <GetTicket></GetTicket>
        </div>
    );
};

export default Home;
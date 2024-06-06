import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MarketUpdate from "../components/MarketUpdate";
import Navbar from "../components/Navbar";
import WhyUs from "../components/WhyUs";

function Home() {

    return(
        <div>
            <Navbar/>
            <Hero/>
            <MarketUpdate/>
            <WhyUs/>
            <Footer/>
        </div>
    )
}

export default Home;
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import FeaturedWork from "../components/FeaturedWork";
import MarqueeSection from "../components/MarqueeSection";
import OurServices from "../components/OurServices";
import StackedCards from "../components/StackedCards";
import WhatsNew from "../components/WhatsNew";

const Home = () => {
    return (
        <div className="space-y-10">
          

            {/* Other Components Will Go Here */}
           <Banner/>
           <AboutSection/>
          <FeaturedWork/>
          <OurServices/>
            <MarqueeSection/>
            <StackedCards/>
            <WhatsNew/>
            
            <div className="text-center">
                <h2 className="text-3xl font-semibold">Our Services</h2>
                <p>Ekhane apnar baki components gulo boshate thakun...</p>
            </div>
        </div>
    );
};

export default Home;
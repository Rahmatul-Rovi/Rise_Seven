import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import FeaturedWork from "../components/FeaturedWork";
import Footer from "../components/Footer";
import MarqueeSection from "../components/MarqueeSection";
import OurServices from "../components/OurServices";
import ScrollTextReveal from "../components/ScrollTextReveal";
import StackedCards from "../components/StackedCards";
import WhatsNew from "../components/WhatsNew";

const Home = () => {
    return (
        <div className="space-y-10">
          
           <Banner/>
           <AboutSection/>
          <FeaturedWork/>
          <OurServices/>
            <MarqueeSection/>
            <StackedCards/>
            <WhatsNew/>
            <ScrollTextReveal/>
            
          <Footer/>
        </div>
    );
};

export default Home;
import Banner from "../components/Banner";

const Home = () => {
    return (
        <div className="space-y-10">
          

            {/* Other Components Will Go Here */}
           <Banner/>
            {/* <Category /> */}
            {/* <PopularItems /> */}
            
            <div className="text-center">
                <h2 className="text-3xl font-semibold">Our Services</h2>
                <p>Ekhane apnar baki components gulo boshate thakun...</p>
            </div>
        </div>
    );
};

export default Home;
const Home = () => {
    return (
        <div className="space-y-10">
            {/* Hero Section */}
            <section className="hero bg-base-200 py-20 rounded-2xl">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello World!</h1>
                        <p className="py-6">Welcome to Rise at Seven. Let's build something amazing.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </section>

            {/* Other Components Will Go Here */}
            {/* <Banner /> */}
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
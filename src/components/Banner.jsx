import React from 'react';
import { LuArrowUpRight } from "react-icons/lu"; // React icons install kora thakle use korben

const Banner = () => {
    return (
        <section className="min-h-screen flex flex-col relative">
            {/* 1. Green Leaderboard Bar (DaisyUI variant) */}
            <div className="bg-brand-mint text-center py-3 text-sm font-medium border-b border-brand-mint">
                <p>The Category Leaderboard - Live Now</p>
            </div>

            {/* 2. Main Hero Area with Red Bull Background */}
            <div className="flex-grow bg-dark relative p-6 sm:p-10 lg:p-16 text-white rounded-t-3xl overflow-hidden mt-2">
                {/* Custom Red Bull background layer (or place an image inside) */}
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: 'url("/path-to-redbull-background.jpg")' }} // Correct image path needed
                />
                
                {/* Blur Overlay ( mimicking image_0.png) */}
                <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" />

                {/* --- 2.1 Header Section --- */}
                <header className="relative z-10 flex items-center justify-between py-6">
                    {/* Logo */}
                    <div className="text-3xl font-extrabold text-white">
                        <span className="font-bold">Rise</span> at Seven
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-6 text-base font-medium">
                        {['Services', 'Industries', 'International', 'About', 'Work', 'Careers', 'Blog & Resources', 'Webinar'].map((item, idx) => (
                            <a key={item} href="#" className="hover:text-brand-mint">
                                {item} {item !== 'Work' && item !== 'Careers' && item !== 'Webinar' && <span className="ml-1 text-xs">+</span>}
                                {item === 'Work' && <span className="badge badge-sm badge-success ml-1 rounded-full p-1.5 text-xs">25</span>}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <button className="btn btn-outline btn-ghost border-white hover:bg-white hover:text-dark rounded-full px-8 text-base font-semibold gap-2">
                        Get In Touch <LuArrowUpRight />
                    </button>
                </header>

                {/* --- 2.2 Main Text Section --- */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center mt-20 lg:mt-32">
                    {/* Awards Text */}
                    <p className="text-base font-semibold text-white/90">#1 MOST RECOMMENDED CONTENT MARKETING AGENCY</p>
                    {/* Awards Icons (Need to import actual SVGs) */}
                    <div className="flex items-center gap-6 mt-4 mb-10 text-white/80">
                        {/* Use SVG icons here */}
                        <div className="h-10 w-24 border border-white/50 rounded-md p-2"> Award 1</div>
                        <div className="h-10 w-24 border border-white/50 rounded-md p-2"> Award 2</div>
                        <div className="h-10 w-24 border border-white/50 rounded-md p-2"> Award 3</div>
                        <div className="h-10 w-24 border border-white/50 rounded-md p-2"> Award 4</div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-7xl lg:text-9xl font-extrabold leading-none">
                        We Create<br/>Category
                    </h1>
                    
                    {/* Image Placeholder + "Leaders" */}
                    <div className="flex items-center gap-4 mt-[-10px] lg:mt-[-20px]">
                        <img 
                            src="/path-to-redbull-can.png" // Correct image path needed
                            alt="Red Bull Can"
                            className="h-20 lg:h-28 rounded-xl object-contain shadow-xl"
                        />
                         <h1 className="text-7xl lg:text-9xl font-extrabold leading-none">
                            Leaders
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-4xl font-medium mt-10">on every searchable platform</p>
                </div>

                {/* --- 2.3 Footer Text Section --- */}
                <footer className="absolute bottom-6 left-6 right-6 z-10 flex justify-between text-sm text-white/90 font-medium">
                    <p>Organic media planners creating, distributing & optimising</p>
                    <p>4 Global Offices serving</p>
                </footer>
            </div>
        </section>
    );
};

export default Banner;
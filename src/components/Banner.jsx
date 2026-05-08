import React from 'react';

const Banner = () => {
    return (
        <section className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif", background: '#000' }}>

            {/* 1. Top Mint Bar */}
            <div style={{ background: '#b2f5dc', textAlign: 'center', padding: '10px', fontSize: '13px', fontWeight: 600, color: '#111', letterSpacing: '0.02em' }}>
                🏆 The Category Leaderboard - Live Now
            </div>

            {/* 2. Main Hero */}
            <div style={{ position: 'relative', flex: 1, minHeight: 'calc(100vh - 42px)', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: '20px 20px 0 0', marginTop: '8px' }}>

                {/* Background gradient (Red Bull vibe) */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    background: `
                        radial-gradient(ellipse 60% 80% at 20% 60%, rgba(180,30,30,0.55) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 60% at 80% 40%, rgba(30,50,130,0.45) 0%, transparent 60%),
                        radial-gradient(ellipse 70% 50% at 50% 80%, rgba(10,10,40,0.8) 0%, transparent 70%),
                        linear-gradient(160deg, #1a2a5e 0%, #0d0d1a 40%, #2a0a0a 100%)
                    `
                }} />

                {/* Dark overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,18,0.55)', backdropFilter: 'blur(2px)', zIndex: 1 }} />

                {/* ---- NAV ---- */}
                <nav style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 40px' }}>

                    {/* Logo */}
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
                        Rise at Seven<sup style={{ fontSize: '10px', opacity: 0.7, fontWeight: 600 }}>®</sup>
                    </div>

                    {/* Nav Links */}
                    <ul style={{ display: 'flex', alignItems: 'center', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                        {['Services +', 'Industries +', 'International +', 'About +', 'Work', 'Careers', 'Blog & Resources +', 'Webinar'].map((item) => (
                            <li key={item}>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 500 }}>
                                    {item}
                                    {item === 'Work' && (
                                        <span style={{ background: '#22c55e', color: '#fff', fontSize: '10px', fontWeight: 700, borderRadius: '999px', padding: '1px 6px', marginLeft: '4px' }}>25</span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <button style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.8)', borderRadius: '999px', padding: '10px 24px', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif' }}>
                        Get In Touch
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="13" x2="13" y2="3" />
                            <polyline points="6,3 13,3 13,10" />
                        </svg>
                    </button>
                </nav>

                {/* ---- HERO CONTENT ---- */}
                <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px 40px 80px' }}>

                    {/* Awards Label */}
                    <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                        #1 Most Recommended Content Marketing Agency
                    </p>

                    {/* Awards Row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '22px' }}>❧</span>
                        {['GLOBAL\nSEARCH AWARDS', 'The Drum', 'UK Social\nMedia Awards', 'CONTENT\nAWARDS'].map((label) => (
                            <div key={label} style={{ width: '88px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.35)', borderRadius: '6px', padding: '4px 8px', background: 'rgba(255,255,255,0.05)' }}>
                                <span style={{ color: '#fff', fontSize: '9px', fontWeight: 700, textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{label}</span>
                            </div>
                        ))}
                        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '22px' }}>❧</span>
                    </div>

                    {/* Main Headline */}
                    <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, letterSpacing: '-3px', margin: 0 }}>
                        We Create<br />Category
                    </h1>

                    {/* "Leaders" + Product Image Row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '-6px' }}>
                        {/* Red Bull Can — replace src with your actual image */}
                        <div style={{ width: 'clamp(70px, 8vw, 100px)', height: 'clamp(70px, 8vw, 100px)', borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(135deg, #1a3a8c 0%, #c0392b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', flexShrink: 0 }}>
                            {/* 👇 এইখানে actual image দিলে: */}
                            {/* <img src="/redbull-can.png" alt="Red Bull" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                            <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700, textAlign: 'center' }}>Red Bull</span>
                        </div>

                        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, letterSpacing: '-3px', margin: 0 }}>
                            Leaders
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p style={{ fontSize: 'clamp(20px, 3vw, 36px)', fontWeight: 500, color: 'rgba(255,255,255,0.9)', marginTop: '32px', letterSpacing: '-0.5px' }}>
                        on every searchable platform
                    </p>
                </div>

                {/* ---- FOOTER ---- */}
                <div style={{ position: 'absolute', bottom: '24px', left: '40px', right: '40px', zIndex: 10, display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                    <span>Organic media planners creating, distributing & optimising</span>
                    <span>4 Global Offices serving</span>
                </div>
            </div>
        </section>
    );
};

export default Banner;

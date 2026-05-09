import React, { useEffect, useRef, useState } from 'react';

const projects = [
    {
        name: 'SIXT',
        year: '[2023-2025]',
        bgColor: '#1a1a1a',
        // image: '/images/sixt.jpg',  ← actual image দিলে এটা uncomment করো
        placeholder: { bg: 'linear-gradient(135deg, #2a2a2a 0%, #444 100%)', label: 'SIXT — Car Rental' },
        tag: 'Car rental',
    },
    {
        name: 'Dojo - B2B',
        year: '[2021-2025]',
        bgColor: '#1a1a1a',
        placeholder: { bg: 'linear-gradient(135deg, #00b8a0 0%, #007a6e 100%)', label: 'Dojo — Payment Machines' },
        tag: 'Card Machines',
    },
    {
        name: 'Magnet',
        year: '[2023-2024]',
        bgColor: '#1a1a1a',
        placeholder: { bg: 'linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 100%)', label: 'Magnet — Kitchen Showroom' },
        tag: 'Kitchen Showroom',
    },
    {
        name: 'Trade - B2B',
        year: '[2023-2024]',
        bgColor: '#1a1a1a',
        placeholder: { bg: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a5a 100%)', label: 'Trade B2B' },
        tag: 'B2B Trade',
    },
    {
        name: 'Leading E Sim',
        year: '[2023-2025]',
        bgColor: '#1a1a1a',
        placeholder: { bg: 'linear-gradient(135deg, #0a1a4a 0%, #1a3a8a 100%)', label: 'Leading eSIM Brand Globally' },
        tag: 'Esims',
    },
    {
        name: 'JD Sports',
        year: '[2025]',
        bgColor: '#1a1a1a',
        placeholder: { bg: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)', label: 'JD Sports' },
        tag: 'Sports Retail',
    },
];

const FeaturedWork = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const windowH = window.innerHeight;
            // which item is closest to center
            itemRefs.current.forEach((el, i) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const center = rect.top + rect.height / 2;
                if (center < windowH * 0.65 && center > windowH * 0.1) {
                    setActiveIndex(i);
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: '#111',
                fontFamily: "'Inter', sans-serif",
                position: 'relative',
            }}
        >
            <div style={{
                display: 'flex',
                position: 'relative',
            }}>
                {/* ── LEFT: Sticky panel ── */}
                <div style={{
                    width: '50%',
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '48px 40px',
                    zIndex: 2,
                }}>
                    {/* "Featured Work" label */}
                    <p style={{ color: '#fff', fontSize: '14px', fontWeight: 600, margin: 0 }}>Featured Work</p>

                    {/* Project name list */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px', marginTop: '40px' }}>
                        {projects.map((p, i) => {
                            const diff = i - activeIndex;
                            // active = white full, above = grey fading, below = grey fading
                            let opacity = 1;
                            let color = '#fff';
                            let fontSize = 'clamp(32px, 4.5vw, 60px)';

                            if (diff === 0) {
                                opacity = 1; color = '#fff';
                            } else if (Math.abs(diff) === 1) {
                                opacity = 0.45; color = '#aaa';
                            } else if (Math.abs(diff) === 2) {
                                opacity = 0.2; color = '#888';
                            } else {
                                opacity = 0.08; color = '#666';
                            }

                            return (
                                <div
                                    key={p.name}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        gap: '10px',
                                        transition: 'all 0.4s ease',
                                        opacity,
                                        cursor: 'default',
                                    }}
                                >
                                    <span style={{
                                        fontFamily: "'Syne', sans-serif",
                                        fontSize,
                                        fontWeight: 900,
                                        color,
                                        letterSpacing: '-1.5px',
                                        lineHeight: 1.05,
                                        transition: 'all 0.4s ease',
                                    }}>
                                        {p.name}
                                    </span>
                                    {diff === 0 && (
                                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                                            {p.year}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── RIGHT: Scrollable image panels ── */}
                <div style={{ width: '50%', padding: '40px 24px 40px 0' }}>
                    {projects.map((p, i) => (
                        <div
                            key={p.name}
                            ref={el => itemRefs.current[i] = el}
                            style={{
                                height: '100vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '16px',
                            }}
                        >
                            {/* Image card */}
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                height: '75vh',
                                position: 'relative',
                                background: p.placeholder.bg,
                                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                                transition: 'transform 0.3s ease',
                            }}>
                                {/* Replace this div with <img src={p.image} style={{width:'100%',height:'100%',objectFit:'cover'}}/> */}
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: p.placeholder.bg,
                                }}>
                                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px', fontWeight: 600 }}>
                                        {p.placeholder.label}
                                    </span>
                                </div>

                                {/* Search tag badge — bottom right */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '16px',
                                    right: '16px',
                                    background: 'rgba(255,255,255,0.15)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '999px',
                                    padding: '6px 14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                }}>
                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
                                        <circle cx="6.5" cy="6.5" r="5" />
                                        <line x1="10.5" y1="10.5" x2="15" y2="15" />
                                    </svg>
                                    {p.tag}
                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
                                        <polyline points="2,12 6,6 10,9 14,3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;

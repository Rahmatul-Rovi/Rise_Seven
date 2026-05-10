import React, { useEffect, useRef, useState } from 'react';

const projects = [
    {
        name: 'SIXT',
        year: '[2023-2025]',
        bgColor: '#1a1a1a',
        image: 'https://i.ibb.co.com/B5PC45KZ/istockphoto-1419724017-612x612.jpg',  
        placeholder: { bg: 'linear-gradient(135deg, #2a2a2a 0%, #444 100%)', label: 'SIXT — Car Rental' },
        tag: 'Car rental',
    },
    {
        name: 'Dojo - B2B',
        year: '[2021-2025]',
        bgColor: '#1a1a1a',
        image: 'https://i.ibb.co.com/nsG8F39V/point-sale-machine-design-resource-53876-105925.jpg', 
        placeholder: { bg: 'linear-gradient(135deg, #00b8a0 0%, #007a6e 100%)', label: 'Dojo — Payment Machines' },
        tag: 'Card Machines',
    },
    {
        name: 'Magnet',
        year: '[2023-2024]',
        bgColor: '#1a1a1a',
        image: 'https://i.ibb.co.com/0yWLnzc9/front.jpg',
        placeholder: { bg: 'linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 100%)', label: 'Magnet — Kitchen Showroom' },
        tag: 'Kitchen Showroom',
    },
    {
        name: 'Trade - B2B',
        year: '[2023-2024]',
        bgColor: '#1a1a1a',
        image: 'https://i.ibb.co.com/mFvg4k1f/hands-typing-on-laptop-b2b-600nw-2675119475.jpg',
        placeholder: { bg: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a5a 100%)', label: 'Trade B2B' },
        tag: 'B2B Trade',
    },
    {
        name: 'Leading E Sim',
        year: '[2023-2025]',
        bgColor: '#1a1a1a',
        image: 'https://i.ibb.co.com/RGxHVy7w/1631339459630-637669362601620485.png',
        placeholder: { bg: 'linear-gradient(135deg, #0a1a4a 0%, #1a3a8a 100%)', label: 'Leading eSIM Brand Globally' },
        tag: 'Esims',
    },
    {
        name: 'JD Sports',
        year: '[2025]',
        bgColor: '#1a1a1a',
        image: 'https://i.ibb.co.com/XfDxy5cN/images.jpg',
        placeholder: { bg: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)', label: 'JD Sports' },
        tag: 'Sports Retail',
    },
];

const FeaturedWork = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null); // Hover track করার জন্য
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const windowH = window.innerHeight;
            
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
                paddingBottom: '100px'
            }}
        >
            <div style={{ display: 'flex', position: 'relative' }}>
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
                    <p style={{ color: '#fff', fontSize: '14px', fontWeight: 600, margin: 0 }}>Featured Work</p>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px', marginTop: '40px' }}>
                        {projects.map((p, i) => {
                            const diff = i - activeIndex;
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
                            onMouseEnter={() => setHoveredIndex(i)} 
                            onMouseLeave={() => setHoveredIndex(null)} 
                            style={{
                                height: '100vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '16px',
                                cursor: 'pointer'
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
                            }}>
                              
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    background: hoveredIndex === i ? 'rgba(0,0,0,0.3)' : 'transparent',
                                    transition: 'background 0.5s ease',
                                    zIndex: 1
                                }}></div>

                                {/* IMAGE with ZOOM EFFECT */}
                                {p.image ? (
                                    <img 
                                        src={p.image} 
                                        alt={p.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)', 
                                            transform: hoveredIndex === i ? 'scale(1.1)' : 'scale(1)', 
                                        }}
                                        onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '100%', height: '100%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px', fontWeight: 600 }}>
                                            {p.placeholder.label}
                                        </span>
                                    </div>
                                )}

                                {/* Search tag badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '16px',
                                    right: '16px',
                                    background: 'rgba(0,0,0,0.4)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '999px',
                                    padding: '6px 14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: '#fff',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    zIndex: 5
                                }}>
                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
                                        <circle cx="6.5" cy="6.5" r="5" />
                                        <line x1="10.5" y1="10.5" x2="15" y2="15" />
                                    </svg>
                                    {p.tag}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FOOTER BUTTON: Explore Our Work ── */}
         <div style={{ 
  width: '100%', 
  display: 'flex', 
  justifyContent: 'center', 
  padding: '60px 0' 
}}>
  <button
    style={{
      padding: '11px 22px',
      borderRadius: '999px',
      border: 'none',
      background: '#fff',
      color: '#000',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'border-radius 0.001s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderRadius = '10px';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderRadius = '999px';
    }}
  >
    Explore Our Work
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </button>
</div>
        </section>
    );
};

export default FeaturedWork;
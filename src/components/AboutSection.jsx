import React, { useEffect, useRef } from 'react';

const clients = [
    'Shark Ninja',
    'Capital One',
    'Red Bull',
    'JD',
    'Kroger',
    'Nike',
    'Adidas',
    'Samsung',
    'Shark Ninja',
    'Capital One',
    'Red Bull',
    'JD',
    'Kroger',
    'Nike',
    'Adidas',
    'Samsung',
];

const AboutSection = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const el = marqueeRef.current;
        if (!el) return;
        let pos = 0;
        const speed = 0.5;
        const step = () => {
            pos -= speed;
            if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
            el.style.transform = `translateX(${pos}px)`;
            requestAnimationFrame(step);
        };
        const raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section style={{ background: '#f0efeb', fontFamily: "'Inter', sans-serif" }}>

            {/* ──  Dark top strip (bottom of hero bleed) ── */}
         

            {/* ── Client logo marquee ── */}
            <div style={{ overflow: 'hidden', padding: '36px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                    <span style={{ flexShrink: 0, paddingRight: '48px', paddingLeft: '40px', fontSize: '13px', color: '#555', fontWeight: 500, whiteSpace: 'nowrap' }}>
                        The agency behind
                    </span>

                    {/* Scrolling strip */}
                    <div ref={marqueeRef} style={{ display: 'inline-flex', gap: '72px', alignItems: 'center', willChange: 'transform' }}>
                        {clients.map((name, i) => (
                            <ClientLogo key={i} name={name} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ──  Main content ── */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '80px 40px 100px',
                gap: '40px',
                flexWrap: 'wrap',
            }}>
                {/* Left — description */}
                <p style={{
                    fontSize: 'clamp(18px, 2.2vw, 26px)',
                    fontWeight: 700,
                    color: '#111',
                    lineHeight: 1.35,
                    maxWidth: '420px',
                    margin: 0,
                }}>
                    A global team of search-first content marketers
                    engineering semantic relevancy &amp; category
                    signals for both the internet and people
                </p>

                {/* Right — big headline + buttons */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 'clamp(48px, 7vw, 96px)',
                        fontWeight: 900,
                        color: '#111',
                        lineHeight: 0.95,
                        letterSpacing: '-2px',
                        margin: '0 0 32px 0',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        Driving Demand &amp;&nbsp;Discovery
                        {/* Small inset image placeholder */}
                       <span style={{
  display: 'inline-block',
  width: '72px',
  height: '72px',
  borderRadius: '10px',
  overflow: 'hidden',
  verticalAlign: 'middle',
  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  flexShrink: 0,
}}>
  <img
    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80"
    alt="team"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</span>
                    </h2>

                    {/* CTA buttons */}
                 <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
  
  {/* Our Story Button */}
  <button
    style={{
      background: '#fff',
      color: '#111',
      border: 'none',
      borderRadius: '999px',
      padding: '14px 28px',
      fontSize: '15px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Inter, sans-serif',
      transition: 'border-radius 0.01s ease, background 0.01s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderRadius = '10px';
      e.currentTarget.style.background = '#e8e8e8';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderRadius = '999px';
      e.currentTarget.style.background = '#fff';
    }}
  >
    Our Story
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
      <line x1="3" y1="13" x2="13" y2="3" />
      <polyline points="6,3 13,3 13,10" />
    </svg>
  </button>

  {/* Our Services Button */}
  <button
    style={{
      background: 'transparent',
      color: '#111',
      border: 'none',
      borderRadius: '999px',
      padding: '14px 8px',
      fontSize: '15px',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'Inter, sans-serif',
      transition: 'border-radius 0.01s ease, background 0.01s ease, padding 0.3s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderRadius = '10px';
      e.currentTarget.style.background = '#e8e8e8';
      e.currentTarget.style.padding = '14px 20px';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderRadius = '999px';
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.padding = '14px 8px';
    }}
  >
    Our Services
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
      <line x1="3" y1="13" x2="13" y2="3" />
      <polyline points="6,3 13,3 13,10" />
    </svg>
  </button>

</div>
                </div>
            </div>
        </section>
    );
};

/* ── Client logo renderer ── */
const ClientLogo = ({ name }) => {
    const styles = {
        fontSize: '18px',
        fontWeight: 800,
        color: '#111',
        letterSpacing: '-0.5px',
        whiteSpace: 'nowrap',
        fontFamily: "'Inter', sans-serif",
    };

    // Custom styling per brand to loosely mimic real logos
    const map = {
        'Shark Ninja': (
            <span style={styles}>
                Shark <span style={{ fontWeight: 900, letterSpacing: '0.05em' }}>NINJA</span>
            </span>
        ),
        'Capital One': (
            <span style={{ ...styles, fontStyle: 'italic' }}>Capital<span style={{ fontWeight: 400 }}>One</span></span>
        ),
        'Red Bull': (
            <span style={{ ...styles, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <svg width="22" height="16" viewBox="0 0 40 30" fill="#111">
                    <ellipse cx="20" cy="22" rx="18" ry="6" />
                    <polygon points="10,22 5,8 18,18" />
                    <polygon points="30,22 35,8 22,18" />
                </svg>
                Red Bull
            </span>
        ),
        'JD': (
            <span style={{ ...styles, background: '#111', color: '#fff', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px' }}>JD</span>
        ),
        'Kroger': (
            <span style={styles}>Kroger</span>
        ),
        'Nike': (
            <span style={{ ...styles, fontSize: '22px' }}>Nike</span>
        ),
        'Adidas': (
            <span style={styles}>adidas</span>
        ),
        'Samsung': (
            <span style={styles}>Samsung</span>
        ),
    };

    return (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {map[name] || <span style={styles}>{name}</span>}
        </span>
    );
};

export default AboutSection;

import React, { useState } from 'react';

const dropdownData = {
  'Services +': {
    links: ['Digital PR', 'Search & Growth Strategy', 'Data & Insights', 'Organic Social & Content', 'Content Experience', 'Onsite SEO'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
  },
  'Industries +': {
    links: ['B2B Marketing', 'eCommerce', 'Finance', 'Health & Wellness', 'Technology', 'Retail'],
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
  },
  'International +': {
    links: ['Sheffield', 'Manchester', 'London', 'New York'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80',
  },
  'About +': {
    links: ['About Us', 'Meet The Risers', 'Culture', 'Testimonials'],
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
  },
  'Blog & Resources +': {
    links: ['Blog', 'Case Studies', 'Whitepapers', 'Webinars'],
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80',
  },
};

const navItems = ['Services +', 'Industries +', 'International +', 'About +', 'Work', 'Careers', 'Blog & Resources +', 'Webinar'];

const platforms = ['Google', 'ChatGPT', 'Gemini', 'TikTok', 'YouTube', 'Pinterest', 'GIPHY', 'reddit', 'amazon'];

const Banner = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <section style={{ fontFamily: "'DM Sans', Inter, sans-serif", background: '#ECEAE4', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />

      {/* 1. Top Mint Bar */}
      <div style={{ background: '#b2f5dc', textAlign: 'center', padding: '10px', fontSize: '13px', fontWeight: 600, color: '#111', letterSpacing: '0.02em' }}>
        🏆 The Category Leaderboard - Live Now
      </div>

      {/* 2. Main Hero */}
      <div style={{ position: 'relative', minHeight: 'calc(100vh - 42px)', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRadius: '20px 20px 0 0', marginTop: '8px' }}>

        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
          alt="hero bg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />

        {/* Light overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(1px)', zIndex: 1 }} />

        {/* NAV */}
        <nav
          style={{ position: 'relative', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', background: 'rgba(255,255,255,0.0)' }}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {/* Logo */}
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', flexShrink: 0 }}>
            Rise at Seven<sup style={{ fontSize: '10px', opacity: 0.7, fontWeight: 600 }}>®</sup>
          </div>

          {/* Nav Links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '6px', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
            {navItems.map((item) => {
              const hasDropdown = !!dropdownData[item];
              const isActive = activeDropdown === item;
              return (
                <li key={item} style={{ position: 'relative' }}>
                  <a
                    href="#"
                    onMouseEnter={() => setActiveDropdown(hasDropdown ? item : null)}
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      padding: '7px 14px',
                      borderRadius: '999px',
                      background: isActive ? '#fff' : 'transparent',
                      color: isActive ? '#111' : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'background 0.2s, color 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item}
                    {item === 'Work' && (
                      <span style={{ background: '#22c55e', color: '#fff', fontSize: '10px', fontWeight: 700, borderRadius: '999px', padding: '1px 6px', marginLeft: '2px' }}>25</span>
                    )}
                  </a>

                  {/* Dropdown panel */}
                  {hasDropdown && isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 12px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#fff',
                        borderRadius: '16px',
                        padding: '24px',
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'stretch',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                        minWidth: '360px',
                        zIndex: 100,
                      }}
                    >
                      {/* Links */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, justifyContent: 'center' }}>
                        {dropdownData[item].links.map((link) => (
                          <a
                            key={link}
                            href="#"
                            style={{ fontSize: '16px', fontWeight: 700, color: '#111', textDecoration: 'none', transition: 'color 0.15s' }}
                            onMouseEnter={e => e.target.style.color = '#5eead4'}
                            onMouseLeave={e => e.target.style.color = '#111'}
                          >
                            {link}
                          </a>
                        ))}
                      </div>

                      {/* Image */}
                      <div style={{ width: '180px', height: '180px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                        <img
                          src={dropdownData[item].img}
                          alt={item}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
       <button
  style={{
    background: '#fff',
    color: '#111',
    border: 'none',
    borderRadius: '999px',
    padding: '10px 24px',
    fontSize: '13.5px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'DM Sans, sans-serif',
    flexShrink: 0,
    transition: 'border-radius 0.01s ease',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.borderRadius = '10px';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.borderRadius = '999px';
  }}
>
  Get In Touch
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="13" x2="13" y2="3" />
    <polyline points="6,3 13,3 13,10" />
  </svg>
</button>
        </nav>

        {/* HERO CONTENT */}
        <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px 40px 100px' }}>

          {/* Awards Label */}
          <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>
            #1 Most Recommended Content Marketing Agency
          </p>

          {/* Awards Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px' }}>❧</span>
            {['GLOBAL\nSEARCH AWARDS', 'The Drum', 'UK Social\nMedia Awards', 'CONTENT\nAWARDS'].map((label) => (
              <div key={label} style={{ width: '84px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '6px', padding: '4px 8px', background: 'rgba(255,255,255,0.12)' }}>
                <span style={{ color: '#fff', fontSize: '8px', fontWeight: 700, textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{label}</span>
              </div>
            ))}
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px' }}>❧</span>
          </div>

          {/* Main Headline */}
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(60px, 9vw, 110px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, letterSpacing: '-3px', margin: 0 }}>
            We Create Category
          </h1>

          {/* "Leaders" + inline image */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '4px' }}>
            <div style={{ width: 'clamp(60px, 7vw, 90px)', height: 'clamp(60px, 7vw, 90px)', borderRadius: '14px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}>
              <img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=200&q=80" alt="brand" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(60px, 9vw, 110px)', fontWeight: 900, color: '#fff', lineHeight: 0.92, letterSpacing: '-3px', margin: 0 }}>
              Leaders
            </h1>
          </div>

          {/* Subtitle */}
          <p style={{ fontSize: 'clamp(18px, 2.5vw, 30px)', fontWeight: 500, color: 'rgba(255,255,255,0.92)', marginTop: '28px', letterSpacing: '-0.3px' }}>
            on every searchable platform
          </p>

          {/* Platform logos row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {platforms.map((p) => (
              <span key={p} style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.02em' }}>{p}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ position: 'absolute', bottom: '24px', left: '40px', right: '40px', zIndex: 10, display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
          <p style={{ margin: 0, maxWidth: '460px' }}>
                    Organic media planners creating, distributing &amp; optimising<br />
                    <strong style={{ color: '#fff' }}>search-first</strong> content for SEO, Social, PR, Ai and LLM search
                </p>
                <p style={{ margin: 0, textAlign: 'right' }}>
                    4 Global Offices serving<br />
                    <strong style={{ color: '#fff' }}>UK, USA (New York) &amp; EU</strong>
                </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

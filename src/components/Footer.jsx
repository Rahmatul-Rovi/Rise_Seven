import { useState } from "react";

const navCol1 = ["Services", "Work", "About", "Culture", "Meet The Risers"];
const navCol2 = ["Testimonials", "Blog & Resources", "Webinars", "Careers"];
const navCol3 = ["Sheffield", "Manchester", "London", "New York", "Contact"];

const socials = [
  { label: "f", name: "Facebook" },
  { label: "𝕏", name: "Twitter" },
  { label: "in", name: "LinkedIn" },
  { label: "▶", name: "YouTube" },
  { label: "♪", name: "TikTok" },
  { label: "◎", name: "Instagram" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap');

        .footer-wrap {
          background: #ECEAE4;
          padding-bottom: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .footer-inner {
          background: #0a0a0a;
          border-radius: 20px 20px 0 0;
          overflow: hidden;
          margin: 0;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 340px 1fr 1fr 1fr;
          gap: 40px;
          padding: 48px 48px 0;
          align-items: start;
        }

        .footer-tagline {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.4;
        }

        .email-row {
          display: flex;
          align-items: center;
          background: #1e1e1e;
          border-radius: 999px;
          padding: 4px 4px 4px 18px;
          gap: 8px;
          margin-bottom: 20px;
        }

        .email-input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          flex: 1;
          min-width: 0;
        }

        .email-input::placeholder { color: #666; }

        .email-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #5eead4;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #000;
          flex-shrink: 0;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .email-btn:hover {
          background: #2dd4bf;
          transform: scale(1.08);
        }

        .socials-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .social-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #1e1e1e;
          border: none;
          color: #fff;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .social-btn:hover { background: #5eead4; color: #000; }

        .nav-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 36px;
        }

        .nav-link {
          font-size: 15px;
          font-weight: 500;
          color: #aaa;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
          width: fit-content;
        }

        .nav-link:hover { color: #5eead4; }

        .brand-row {
          padding: 60px 0 0;
          overflow: hidden;
          line-height: 0.85;
        }

        .brand-name {
          font-size: clamp(80px, 14vw, 180px);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.04em;
          white-space: nowrap;
          padding: 0 24px;
          display: block;
          line-height: 0.9;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 48px 24px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-legal {
          font-size: 12px;
          color: #555;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .footer-legal a {
          color: #555;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal a:hover { color: #fff; }

        .footer-credit {
          font-size: 12px;
          color: #555;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            padding: 32px 24px 0;
          }
          .footer-bottom { padding: 16px 24px 20px; }
          .brand-name { font-size: clamp(48px, 12vw, 120px); }
        }

        @media (max-width: 560px) {
          .footer-top { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="footer-wrap">
        <div className="footer-inner">

          {/* Top grid */}
          <div className="footer-top">

            {/* Email signup */}
            <div>
              <p className="footer-tagline">Stay updated with Rise news</p>
              <div className="email-row">
                <input
                  className="email-input"
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="email-btn" aria-label="Subscribe">↗</button>
              </div>
              <div className="socials-row">
                {socials.map((s) => (
                  <button key={s.name} className="social-btn" aria-label={s.name} title={s.name}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav col 1 */}
            <nav className="nav-col">
              {navCol1.map((item) => (
                <span
                  key={item}
                  className="nav-link"
                >
                  {item}
                </span>
              ))}
            </nav>

            {/* Nav col 2 */}
            <nav className="nav-col">
              {navCol2.map((item) => (
                <span key={item} className="nav-link">{item}</span>
              ))}
            </nav>

            {/* Nav col 3 — locations */}
            <nav className="nav-col">
              {navCol3.map((item) => (
                <span key={item} className="nav-link">{item}</span>
              ))}
            </nav>
          </div>

          {/* Giant brand name */}
          <div className="brand-row">
            <span className="brand-name">Rise at Seven®</span>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <div className="footer-legal">
              <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
              <span>•</span>
              <span>Company Number 11955187</span>
              <span>•</span>
              <span>VAT Registered GB 322402945</span>
              <span>•</span>
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms & conditions</a>
            </div>
            <div className="footer-credit">Website MadeByShape</div>
          </div>

        </div>
      </footer>
    </>
  );
}

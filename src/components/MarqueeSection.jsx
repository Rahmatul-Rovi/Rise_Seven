import { useRef } from "react";

const marqueeItems = [
  { type: "text", content: "Not Algorithms" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&q=80",
    alt: "conference",
  },
  { type: "text", content: "Chasing Consumers" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&q=80",
    alt: "people group",
  },
  { type: "text", content: "Not Algorithms" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&q=80",
    alt: "conference",
  },
  { type: "text", content: "Chasing Consumers" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&q=80",
    alt: "people group",
  },
];

export default function MarqueeSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;900&display=swap');

        .marquee-outer {
          background: #ECEAE4;
          overflow: hidden;
          padding: 40px 0;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee-scroll 18s linear infinite;
          gap: 0;
        }

        .marquee-outer:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-text {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(56px, 8vw, 110px);
          font-weight: 900;
          color: #111;
          white-space: nowrap;
          letter-spacing: -0.03em;
          line-height: 1;
          padding: 0 32px;
          flex-shrink: 0;
        }

        .marquee-img-wrap {
          flex-shrink: 0;
          width: clamp(80px, 9vw, 130px);
          height: clamp(80px, 9vw, 130px);
          border-radius: 16px;
          overflow: hidden;
          margin: 0 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .marquee-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <div className="marquee-outer">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) =>
            item.type === "text" ? (
              <span key={i} className="marquee-text">
                {item.content}
              </span>
            ) : (
              <div key={i} className="marquee-img-wrap">
                <img src={item.src} alt={item.alt} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

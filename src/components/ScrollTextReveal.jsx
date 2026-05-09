import { useEffect, useRef, useState } from "react";

export default function ScrollTextReveal() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = section.offsetHeight;

      // progress: 0 when section enters bottom of viewport, 1 when it leaves top
      const progress = Math.max(
        0,
        Math.min(1, (windowH - rect.top) / (windowH + sectionH))
      );

      // Start at +80vw (off-screen right), end at -20vw (slightly off-screen left)
      const translateX = 80 - progress * 120;
      setOffset(translateX);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;900&display=swap');

        .str-section {
          background: #ECEAE4;
          height: 300vh;
          position: relative;
        }

        .str-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .str-text {
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(52px, 10vw, 130px);
          font-weight: 700;
          color: #111;
          letter-spacing: -0.03em;
          line-height: 1;
          will-change: transform;
          padding: 0 48px;
        }
      `}</style>

      <div className="str-section" ref={sectionRef}>
        <div className="str-sticky">
          <div
            className="str-text"
            style={{
              transform: `translateX(${offset}vw)`,
              transition: "transform 0.05s linear",
            }}
          >
            Ready to Rise at Seven?
          </div>
        </div>
      </div>
    </>
  );
}

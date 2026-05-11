import { useEffect, useRef, useState } from "react";

const FULL_TEXT = "Ready to Rise at Seven?";

const words = FULL_TEXT.split(" ").map((word) =>
  word.split("").map((char) => char)
);

const allLetters = [];
words.forEach((word, wi) => {
  word.forEach((char, li) => {
    allLetters.push({ char, wi, li });
  });
});
const totalLetters = allLetters.length;

export default function ScrollTextReveal() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = section.offsetHeight;
      const p = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + sectionH)));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateX = 55 - progress * 110;

  const getLetterStyle = (globalIndex) => {
    const start = 0.08 + (globalIndex / totalLetters) * 0.35;
    const end = start + 0.2;
    const lp = Math.max(0, Math.min(1, (progress - start) / (end - start)));
    const factor = 1 - lp; 

    const baseRotate = globalIndex % 2 === 0 ? -38 : -28;
    const baseY = globalIndex % 2 === 0 ? -70 : -50;

    return {
      display: "inline-block",
      transform: `translateY(${baseY * factor}px) rotate(${baseRotate * factor}deg)`,
      transformOrigin: "bottom center",
      transition: "transform 0.12s ease-out",
      willChange: "transform",
    };
  };

  let globalIndex = 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap');

        .str-section {
          background: #ECEAE4;
          height: 400vh;
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
          display: flex;
          align-items: flex-end;
          gap: 0.22em;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(48px, 9vw, 120px);
          font-weight: 700;
          color: #111;
          letter-spacing: -0.03em;
          line-height: 1;
          padding: 0 48px;
          will-change: transform;
        }

        .str-word {
          display: inline-flex;
          align-items: flex-end;
        }
      `}</style>

      <div className="str-section" ref={sectionRef}>
        <div className="str-sticky">
          <div
            className="str-text"
            style={{
              transform: `translateX(${translateX}vw)`,
              transition: "transform 0.06s linear",
            }}
          >
            {words.map((word, wi) => (
              <span key={wi} className="str-word">
                {word.map((char, li) => {
                  const idx = globalIndex++;
                  return (
                    <span key={li} style={getLetterStyle(idx)}>
                      {char}
                    </span>
                  );
                })}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

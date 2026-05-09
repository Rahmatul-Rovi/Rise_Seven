import { useEffect, useRef } from "react";

const cards = [
  {
    id: 1,
    bg: "#0a0a0a",
    textColor: "#fff",
    title: "Pioneers",
    imgSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    description:
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    extra:
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    accentBg: "#5eead4",
  },
  {
    id: 2,
    bg: "#5eead4",
    textColor: "#000",
    title: "Award Winning",
    imgSrc:
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400&q=80",
    description:
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    extra: null,
    accentBg: "#fff",
  },
  {
    id: 3,
    bg: "#ffffff",
    textColor: "#000",
    title: "Speed",
    imgSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    description:
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    extra: null,
    accentBg: "#5eead4",
  },
];

export default function StackedCards() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      cards.forEach((_, i) => {
        const card = cardRefs.current[i];
        if (!card) return;

        const cardTop = card.getBoundingClientRect().top;
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - cardTop) / windowHeight)
        );

        const nextCard = cardRefs.current[i + 1];
        if (nextCard) {
          const nextTop = nextCard.getBoundingClientRect().top;
          const shrinkProgress = Math.max(
            0,
            Math.min(1, (windowHeight - nextTop) / windowHeight)
          );
          const scale = 1 - shrinkProgress * 0.05;
          card.style.transform = `scale(${scale})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap');

        .stacked-section {
          background: #ECEAE4;
          padding: 60px 24px 120px;
          font-family: 'DM Sans', sans-serif;
        }

        .stacked-label {
          text-align: center;
          font-size: 15px;
          font-weight: 500;
          color: #555;
          margin-bottom: 40px;
          letter-spacing: 0.01em;
        }

        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .sticky-card-wrap {
          position: sticky;
          top: 80px;
          margin-bottom: -20px;
        }

        .sticky-card-wrap:last-child {
          margin-bottom: 0;
        }

        .card-inner {
          border-radius: 24px;
          padding: 40px 32px 44px;
          text-align: center;
          transform-origin: top center;
          transition: transform 0.1s linear;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
        }

        .card-accent {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 24px;
          opacity: 0.35;
          top: -40px;
          right: -40px;
          transform: rotate(15deg);
          pointer-events: none;
        }

        .card-img-wrap {
          width: 140px;
          height: 140px;
          border-radius: 18px;
          overflow: hidden;
          margin: 0 auto 28px;
          position: relative;
          z-index: 1;
        }

        .card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-title {
          font-size: clamp(36px, 6vw, 52px);
          font-weight: 900;
          margin: 0 0 16px;
          letter-spacing: -0.03em;
          line-height: 1;
          position: relative;
          z-index: 1;
        }

        .card-desc {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
          max-width: 420px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          opacity: 0.85;
        }

        .card-extra {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
          max-width: 380px;
          margin: 16px auto 0;
          position: relative;
          z-index: 1;
        }

        .spacer {
          height: 60vh;
        }
      `}</style>

      <div className="stacked-section" ref={sectionRef}>
        <p className="stacked-label">Legacy In The Making</p>

        <div className="cards-container">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="sticky-card-wrap"
              style={{ top: `${80 + i * 24}px`, zIndex: i + 1 }}
            >
              <div
                className="card-inner"
                ref={(el) => (cardRefs.current[i] = el)}
                style={{
                  background: card.bg,
                  color: card.textColor,
                }}
              >
                {/* Accent shape behind */}
                <div
                  className="card-accent"
                  style={{ background: card.accentBg }}
                />

                <div className="card-img-wrap">
                  <img src={card.imgSrc} alt={card.title} />
                </div>

                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>
                {card.extra && (
                  <p className="card-extra">{card.extra}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="spacer" />
      </div>
    </>
  );
}

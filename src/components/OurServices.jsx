import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Digital PR",
    bg: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  },
  {
    id: 2,
    title: "Search & Growth Strategy",
    bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 3,
    title: "Data & Insights",
    bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 4,
    title: "Organic Social & Content",
    bg: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
  },
  {
    id: 5,
    title: "Content Experience",
    bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: 6,
    title: "Onsite SEO",
    bg: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
];

const leftServices = services.slice(0, 3);
const rightServices = services.slice(3, 6);

function ServiceItem({ service, isLast, borderLeft }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "22px 0",
        borderBottom: isLast ? "none" : "1px solid #c8c5bc",
        borderLeft: borderLeft ? "1px solid #c8c5bc" : "none",
        paddingLeft: borderLeft ? "32px" : "0",
        paddingRight: borderLeft ? "0" : "32px",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* Pill background with image */}
      <div
        style={{
          position: "absolute",
          inset: "6px 0",
          borderRadius: "999px",
          overflow: "hidden",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scaleY(0.6) scaleX(0.9)",
          transformOrigin: "left center",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          background: "#333",
        }}
      >
        <img
          src={service.bg}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Label */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "clamp(20px, 2.2vw, 28px)",
          fontWeight: 800,
          color: hovered ? "#fff" : "#111",
          transition: "color 0.25s ease",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        <span
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-8px)",
            transition: "opacity 0.25s ease, transform 0.25s ease",
            fontSize: "1em",
            lineHeight: 1,
          }}
        >
          ↗
        </span>
        {service.title}
      </div>
    </div>
  );
}

export default function OurServices() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800;900&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          background: "#ECEAE4",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                color: "#111",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "14px",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Our
              <span
                style={{
                  display: "inline-block",
                  width: "clamp(44px, 5vw, 64px)",
                  height: "clamp(44px, 5vw, 64px)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  flexShrink: 0,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80"
                  alt="team"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </span>
              Services
            </h2>

            <button
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "10px 22px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#111",
                fontFamily: "'DM Sans', sans-serif",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              View All Services ↗
            </button>
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #c8c5bc",
              margin: "0 0 0",
            }}
          />

          {/* Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* Left column */}
            <div>
              {leftServices.map((s, i) => (
                <ServiceItem
                  key={s.id}
                  service={s}
                  isLast={i === leftServices.length - 1}
                  borderLeft={false}
                />
              ))}
            </div>

            {/* Right column */}
            <div>
              {rightServices.map((s, i) => (
                <ServiceItem
                  key={s.id}
                  service={s}
                  isLast={i === rightServices.length - 1}
                  borderLeft={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

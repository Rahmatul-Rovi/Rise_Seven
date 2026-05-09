import { useState } from "react";

const posts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    author: "Ray Saddiq",
    authorImg: "https://i.pravatar.cc/32?img=11",
    readTime: "3 mins",
    tag: null,
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    author: "Ray Saddiq",
    authorImg: "https://i.pravatar.cc/32?img=11",
    readTime: "2 mins",
    tag: null,
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    author: "Carrie Rose",
    authorImg: "https://i.pravatar.cc/32?img=5",
    readTime: "2 mins",
    tag: "News",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  },
];

function PostCard({ post, isHovered, onEnter, onLeave }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        cursor: "pointer",
        flex: "1 1 0",
        minWidth: 0,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          borderRadius: "14px",
          overflow: "hidden",
          aspectRatio: "4/3",
        }}
      >
        <img
          src={post.img}
          alt={post.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: isHovered ? "blur(6px) brightness(0.75)" : "none",
            transform: isHovered ? "scale(1.04)" : "scale(1)",
            transition: "filter 0.35s ease, transform 0.35s ease",
          }}
        />

        {/* Tag badge */}
        {post.tag && (
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              background: "rgba(255,255,255,0.92)",
              borderRadius: "999px",
              padding: "4px 12px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#111",
              zIndex: 2,
            }}
          >
            {post.tag}
          </div>
        )}

        {/* Arrow button on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#5eead4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              color: "#000",
              transform: isHovered ? "scale(1)" : "scale(0.7)",
              transition: "transform 0.3s ease",
            }}
          >
            ↗
          </div>
        </div>
      </div>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: "13px",
          color: "#555",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <img
            src={post.authorImg}
            alt={post.author}
            style={{ width: "22px", height: "22px", borderRadius: "50%", objectFit: "cover" }}
          />
          <span>{post.author}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span>🕐</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          margin: 0,
          fontSize: "clamp(16px, 1.6vw, 20px)",
          fontWeight: 700,
          color: "#111",
          lineHeight: 1.35,
          letterSpacing: "-0.02em",
        }}
      >
        {post.title}
      </h3>
    </div>
  );
}

export default function WhatsNew() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap');

        .wn-section {
          background: #ECEAE4;
          padding: 60px 48px 80px;
          font-family: 'DM Sans', sans-serif;
        }

        .wn-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .wn-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          color: #111;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 14px;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .wn-title-img {
          width: clamp(44px, 5vw, 64px);
          height: clamp(44px, 5vw, 64px);
          border-radius: 10px;
          overflow: hidden;
          display: inline-flex;
          flex-shrink: 0;
        }

        .wn-title-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .wn-btn {
          background: #fff;
          border: none;
          border-radius: 999px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          color: #111;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .wn-divider {
          border: none;
          border-top: 1px solid #c8c5bc;
          margin: 0 0 32px;
        }

        .wn-grid {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        @media (max-width: 768px) {
          .wn-section { padding: 40px 20px 60px; }
          .wn-grid { flex-direction: column; }
        }
      `}</style>

      <div className="wn-section">
        {/* Header */}
        <div className="wn-header">
          <h2 className="wn-title">
            What's
            <div className="wn-title-img">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&q=80"
                alt="event"
              />
            </div>
            New
          </h2>
          <button className="wn-btn">Explore More Thoughts ↗</button>
        </div>

        <hr className="wn-divider" />

        {/* Cards */}
        <div className="wn-grid">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              isHovered={hoveredId === post.id}
              onEnter={() => setHoveredId(post.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

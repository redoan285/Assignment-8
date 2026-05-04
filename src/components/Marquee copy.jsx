'use client';

export default function Marquee() {
  const items = [
    "New Arrivals: Marble Elegance Tile",
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community for Expert Advice",
    "Limited Edition: Golden Quartz Series",
    "Eco-Friendly: Sustainable Ceramic Collection",
  ];

  return (
    <div className="bg-primary text-primary-content py-3 overflow-hidden whitespace-nowrap border-y border-primary-focus relative">
      <div className="flex animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
            <span className="mx-8 text-primary-content/50">|</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

// src/components/CatCard.tsx
import { motion } from "framer-motion";
import type { Cat } from "../types";

interface CatCardProps {
	cat: Cat;
	index: number;
}

const BG_COLORS: Record<string, string> = {
	"bg-terra": "#C4622D",
	"bg-sage": "#6B7A55",
	"bg-brown": "#8B7B6E",
};

export default function CatCard({ cat, index }: CatCardProps) {
	const bgColor = BG_COLORS[cat.bgClass] ?? "#C4622D";
	const isOffset = index === 1;

	return (
		<motion.article
			className="cat-card"
			initial={{ opacity: 0, y: isOffset ? 48 : 32 }}
			whileInView={{ opacity: 1, y: isOffset ? 24 : 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{
				duration: 0.5,
				delay: index * 0.12,
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={{
				y: isOffset ? 20 : -4,
				x: -4,
				boxShadow: "10px 10px 0px #1A1510",
			}}
			role="listitem"
			aria-label={`Gato: ${cat.name}`}
			style={{
				background: "#FAF7F0",
				border: "3px solid #1A1510",
				boxShadow: "6px 6px 0px #1A1510",
				position: "relative",
				cursor: "default",
				marginBottom: !isOffset ? "0" : "48px",
			}}
		>
			{/* Cat image area */}
			<div className="cat-card__image" aria-hidden="true" style={{ background: bgColor }}>
				<img
					src={cat.image}
					alt={cat.name}
					style={{
						objectPosition: index === 1 ? "center 40%" : "center",
					}}
				/>

				{cat.forAdoption && (
					<span className="cat-card__adoption-badge" aria-label="Disponível para adoção">
						Para Adoção
					</span>
				)}
			</div>

			{/* Card body */}
			<div className="cat-card__body">
				<h3 className="cat-card__name">{cat.name}</h3>
				<p className="cat-card__breed">
					{cat.breed} · {cat.age}
				</p>
				<p className="cat-card__description">{cat.description}</p>

				<div className="cat-card__traits" aria-label="Características">
					{cat.traits.map((trait) => (
						<span key={trait} className="cat-card__trait">
							{trait}
						</span>
					))}
				</div>

				<a href="#reserva" className="btn btn--secondary">
					Conhecer →
				</a>
			</div>

			<style>{`
        .cat-card { overflow: visible; }

        .cat-card__image {
          height: 190px;
          border-bottom: 3px solid #1A1510;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .cat-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(1.4) brightness(0.95);
          transition: transform 0.3s ease;
        }
        
        

        .cat-card__image:hover img {
          transform: scale(0.90);
        }

        .cat-card__adoption-badge {
          position: absolute;
          top: 14px;
          right: -6px;
          background: #C8E800;
          border: 2px solid #1A1510;
          font-family: 'DM Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          box-shadow: 3px 3px 0 #1A1510;
          z-index: 10;
        }

        .cat-card__body {
          padding: 22px;
        }

        .cat-card__name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          text-transform: uppercase;
          margin-bottom: 4px;
          color: #1A1510;
        }

        .cat-card__breed {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-terra-light);
          margin-bottom: 12px;
        }

        .cat-card__description {
          font-family: 'Fraunces', serif;
          font-size: 0.85rem;
          color: rgba(26, 21, 16, 0.65);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .cat-card__traits {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .cat-card__trait {
          font-family: 'DM Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border: 2px solid #1A1510;
          background: #E4D9BC;
        }
      `}</style>
		</motion.article>
	);
}

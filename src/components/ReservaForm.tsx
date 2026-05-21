// src/components/ReservaForm.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ReservaForm() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
			setError("Por favor, insira um e-mail válido.");
			return;
		}

		setError("");
		setLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1200));

		setLoading(false);
		setSubmitted(true);
		setTimeout(() => {
			setEmail("");
			setSubmitted(false);
		}, 5000); /* Reset form after 5 seconds*/
	};

	return (
		<>
			<style>{`

				.reserva-form-wrapper {
					max-width: 520px;
					margin: 0 auto 16px;
					display: flex;
					gap: 0;
					border: 3px solid var(--color-ink);
					box-shadow: 6px 6px 0 var(--color-rust);
				}

				.reserva-input {
					flex: 1;
					min-width: 0; /* evita overflow em flex */
					padding: 16px 22px;
					font-family: 'Fraunces', serif;
					font-size: 0.95rem;
					border: none;
					background: var(--color-cream);
					outline: none;
					color: var(--color-ink);
				}
 
				.reserva-input::placeholder {
					color: var(--color-sand);
					opacity: 0.7;
				}
 
				.reserva-btn {
					padding: 16px 24px;
					background: var(--color-ink);
					color: var(--color-cream);
					border: none;
					border-left: 3px solid var(--color-ink);
					font-family: 'Syne', sans-serif;
					font-weight: 700;
					font-size: 0.75rem;
					text-transform: uppercase;
					letter-spacing: 0.06em;
					cursor: pointer;
					white-space: nowrap;
					transition: background 0.15s;
					min-width: 130px;
				}
 
				.reserva-btn:disabled {
					background: var(--color-rust);
					cursor: wait;
				}
 
				.reserva-hint {
					font-family: 'DM Mono', monospace;
					font-size: 0.7rem;
					letter-spacing: 0.08em;
					text-transform: uppercase;
					color: #241e16b5;
					text-align: center;
				}
 
				.reserva-error {
					font-family: 'DM Mono', monospace;
					font-size: 0.75rem;
					letter-spacing: 0.08em;
					text-transform: uppercase;
					color: var(--color-rust);
					text-align: center;
					margin: 8px 0px;
				}
 
				@media (max-width: 480px) {
					.reserva-form-wrapper {
						flex-direction: column;
						max-width: 100%;
					}
 
					.reserva-input {
						padding: 14px 16px;
						border-bottom: 3px solid var(--color-ink);
					}
 
					.reserva-btn {
						border-left: none;
						min-width: unset;
						padding: 14px 16px;
						text-align: center;
					}
				}
 
				@media (max-width: 768px) {
					.reserva-form-wrapper {
						max-width: 100%;
					}
 
					.reserva-input {
						padding: 14px 16px;
					}
 
					.reserva-btn {
						min-width: 110px;
						padding: 14px 18px;
					}
				}
			`}</style>

			<div className="reserva-form">
				<AnimatePresence mode="wait">
					{!submitted ? (
						<motion.div
							key="form"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -16 }}
							transition={{ duration: 0.3 }}
						>
							<form
								onSubmit={handleSubmit}
								aria-label="Formulário de reserva"
								noValidate
								className="reserva-form-wrapper "
							>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="seu@email.com"
									aria-label="Seu endereço de e-mail"
									autoComplete="email"
									className="reserva-input "
								/>
								<button
									type="submit"
									disabled={loading}
									aria-label="Enviar pedido de reserva"
									className="reserva-btn "
								>
									{loading ? "Enviando…" : "Reservar →"}
								</button>
							</form>

							{error && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="reserva-error"
									role="alert"
								>
									{error}
								</motion.p>
							)}

							<p className="reserva-hint">Confirmação em até 2h · Gratuito para cancelar</p>
						</motion.div>
					) : (
						<motion.div
							key="success"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
							style={{ textAlign: "center" }}
							role="status"
							aria-live="polite"
						>
							<div
								style={{
									display: "inline-block",
									padding: "32px 48px",
									background: "#1A1510",
									border: "3px solid #1A1510",
									boxShadow: "6px 6px 0 #7B3520",
									marginBottom: "16px",
								}}
							>
								<span style={{ fontSize: "3rem", display: "block", marginBottom: "12px" }}>🐾</span>
								<p
									style={{
										fontFamily: "'Syne', sans-serif",
										fontWeight: 700,
										fontSize: "1rem",
										textTransform: "uppercase",
										letterSpacing: "0.04em",
										color: "#C8E800",
										marginBottom: "6px",
									}}
								>
									Reserva Recebida!
								</p>
								<p
									style={{
										fontFamily: "'Fraunces', serif",
										fontStyle: "italic",
										fontSize: "0.85rem",
										color: "rgba(240, 232, 208, 0.65)",
									}}
								>
									Confirmação enviada para <strong style={{ color: "#F0E8D0" }}>{email}</strong>
								</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}

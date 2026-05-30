import { useEffect, useState } from "react";

export function Hero() {
    const [typedText, setTypedText] = useState("");
    const fullText =
        "Full-support development lab. We build products at every layer — from architecture to deployment. Small team, fast execution, no overhead.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText((prev) => prev + fullText.charAt(index));
            index++;
            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, 25);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="hero"
            aria-label="Hero"
        >
            <div className="hero-bg" />
            <div className="hero-grid" />

            {/* Floating Particles */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
            >
                {Array.from({ length: 12 }).map((_, r) => (
                    <div
                        key={r}
                        className="particle"
                        style={{
                            left: `${10 + ((7.5 * r) % 90)}%`,
                            top: `${5 + ((13 * r) % 85)}%`,
                            animationDelay: `${0.7 * r}s`,
                            animationDuration: `${7 + (r % 4) * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 max-w-[600px] text-center px-4">
                {/* Subhead */}
                <div className="animate-[fadeUp_0.6s_ease_0.2s_both]">
                    <p className="hero-sub">
                        <span className="text-[#333]">// </span>FULL-SUPPORT
                        DEVELOPMENT LAB
                    </p>
                </div>

                {/* Logo */}
                <div className="animate-[fadeUp_0.8s_ease_0.4s_both]">
                    <img
                        alt="Umbrella Software Lab logo"
                        width="120"
                        height="120"
                        src="/logo.png"
                        style={{
                            width: "clamp(56px, 16vw, 140px)",
                            height: "auto",
                            filter: "drop-shadow(0 0 30px rgba(204,0,0,0.15))",
                        }}
                    />
                </div>

                {/* Glitch Title */}
                <div className="animate-[fadeUp_0.8s_ease_0.6s_both] mt-2">
                    <h1 className="hero-title">
                        <span
                            className="glitch"
                            data-text="UMBRELLA"
                        >
                            UMBRELLA
                        </span>
                        <span
                            style={{
                                display: "block",
                                color: "var(--red)",
                                fontSize: ".4em",
                                letterSpacing: ".15em",
                                fontWeight: 400,
                                marginTop: ".25em",
                            }}
                        >
                            {/* SOFTWARE LAB */}
                            LABS
                        </span>
                    </h1>
                </div>

                {/* Console Typing Text */}
                <div className="min-h-[50px] mt-2 mb-4">
                    <p className="font-mono text-[0.78rem] text-text-secondary leading-relaxed max-w-[540px]">
                        {typedText}
                        <span className="inline-block text-primary w-2 h-4 bg-primary ml-1 animate-[blink_1s_step-end_infinite]">
                            █
                        </span>
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="animate-[fadeUp_0.6s_ease_1.3s_both] flex flex-col sm:flex-row gap-3 w-full max-w-[320px] justify-center">
                    <a
                        href="#contact"
                        className="btn-primary pulse-glow justify-center text-center"
                    >
                        GET IN TOUCH →
                    </a>
                    <a
                        href="#about"
                        className="btn-outline justify-center text-center"
                    >
                        WHAT WE DO
                    </a>
                </div>
            </div>
        </section>
    );
}

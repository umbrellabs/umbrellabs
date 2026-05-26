import { useEffect, useRef, useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";

interface Message {
    role: "user" | "agent";
    text: string;
}

const evaluatorMessages: Message[] = [
    { role: "user", text: "I have an idea for an AI-powered legal assistant" },
    {
        role: "agent",
        text: "Scanning market... 340 competitors found. Analyzing gaps. Your angle: real-time court ruling analysis with precedent matching.",
    },
    {
        role: "agent",
        text: "Viability: 87/100. Revenue potential: $2.4M ARR in 18 months. Worth exploring.",
    },
    {
        role: "agent",
        text: "> Architecture: 3 AI agents in pipeline\n> Scope: 14 days to production\n> Stack: Claude API + vector DB + Next.js\n> First users: Day 15",
    },
    {
        role: "agent",
        text: "Analysis complete. Passing to the team for review.",
    },
];

export function Services() {
    const [msgCount, setMsgCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const animatedRef = useRef(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animatedRef.current) {
                    animatedRef.current = true;
                    evaluatorMessages.forEach((_, index) => {
                        setTimeout(
                            () => {
                                setMsgCount(index + 1);
                            },
                            index === 0 ? 400 : 400 + 1800 * index,
                        );
                    });
                }
            },
            { threshold: 0.2 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [msgCount]);

    return (
        <section
            id="services"
            className="section bg-bg-2"
        >
            <div className="section-inner grid gap-10 lg:grid-cols-2 lg:items-center">
                {/* Title column */}
                <SectionReveal className="flex flex-col">
                    <div className="section-label">Pipeline</div>
                    <h2 className="section-title mb-4">
                        How we{" "}
                        <span className="text-primary font-bold">work</span>
                    </h2>
                    <p className="text-text-secondary text-sm leading-[1.7] max-w-[480px]">
                        Every project starts with an AI-driven analysis —
                        market, feasibility, architecture. This is how we move
                        fast without cutting corners.
                    </p>
                </SectionReveal>

                {/* Live Demo Evaluator Card column */}
                <SectionReveal
                    delay={0.15}
                    className="w-full"
                >
                    <div
                        ref={containerRef}
                        className="card overflow-hidden rounded-xl border border-border"
                    >
                        {/* Header bar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f0f] border-b border-border">
                            <div
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background:
                                        msgCount > 0
                                            ? "#28c840"
                                            : "var(--text-muted)",
                                    boxShadow:
                                        msgCount > 0
                                            ? "0 0 6px #28c840"
                                            : "none",
                                    transition: "all 0.3s",
                                }}
                            />
                            <span className="font-mono text-[0.6rem] tracking-[0.1em] text-text-dim uppercase">
                                UMBRELLA EVALUATOR v3.2 — LIVE DEMO
                            </span>
                        </div>

                        {/* Scrollable chat body */}
                        <div
                            ref={scrollRef}
                            className="flex flex-col gap-3 p-4 max-h-[360px] overflow-y-auto min-h-[220px]"
                        >
                            {evaluatorMessages
                                .slice(0, msgCount)
                                .map((msg, index) => {
                                    const isUser = msg.role === "user";
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col animate-[fadeUp_0.4s_ease]"
                                            style={{
                                                alignItems: isUser
                                                    ? "flex-end"
                                                    : "flex-start",
                                            }}
                                        >
                                            {/* Header: APPLICANT / AI EVALUATOR */}
                                            <div className="font-mono text-[0.5rem] tracking-[0.08em] text-text-muted mb-1 uppercase">
                                                {isUser
                                                    ? "APPLICANT"
                                                    : "AI EVALUATOR"}
                                            </div>
                                            {/* Bubble */}
                                            <div
                                                className="font-mono text-[0.7rem] leading-relaxed px-3.5 py-2.5 rounded-lg max-w-[92%] whitespace-pre-line"
                                                style={{
                                                    background: isUser
                                                        ? "rgba(204,0,0,0.12)"
                                                        : "rgba(255,255,255,0.03)",
                                                    border: `1px solid ${isUser ? "var(--red-dark)" : "var(--border)"}`,
                                                    color: isUser
                                                        ? "var(--text)"
                                                        : "var(--text-dim)",
                                                }}
                                            >
                                                {msg.text}
                                            </div>
                                        </div>
                                    );
                                })}

                            {/* Typing indicator dots */}
                            {msgCount > 0 &&
                                msgCount < evaluatorMessages.length && (
                                    <div className="flex gap-1.5 p-2 items-center">
                                        {[0, 1, 2].map((dotIdx) => (
                                            <div
                                                key={dotIdx}
                                                className="w-1.5 h-1.5 rounded-full bg-primary"
                                                style={{
                                                    animation: `blink 1.4s ease-in-out ${0.2 * dotIdx}s infinite`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
}

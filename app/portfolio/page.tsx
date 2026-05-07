import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Clock, Code2, Globe, Palette } from "lucide-react";

const projects = [
  {
    code: "001",
    status: "IN_DEVELOPMENT",
    category: "WEB_APP",
    icon: <Globe size={18} strokeWidth={1.4} />,
    title: "Digitale invitasjoner",
    desc: "Fullstack webapplikasjon for å opprette og sende personlige digitale invitasjoner. Bygget med Next.js, Stripe og Claude API.",
    tags: ["Next.js", "Claude API", "Stripe", "AI"],
    highlight: true,
  },
  {
    code: "002",
    status: "IN_DEVELOPMENT",
    category: "UX_DESIGN",
    icon: <Palette size={18} strokeWidth={1.4} />,
    title: "Denne nettsiden",
    desc: "Designet og bygget som en interaktiv CV og portefølje. Modernistisk estetikk med AI-assistert utvikling.",
    tags: ["Next.js", "Tailwind", "AI-assistert"],
    highlight: false,
  },
  {
    code: "003",
    status: "QUEUED",
    category: "AUTOMATION",
    icon: <Code2 size={18} strokeWidth={1.4} />,
    title: "Prosjekt kommer snart",
    desc: "Et nytt AI-prosjekt er under utvikling. Kom tilbake for å se hva som bygges.",
    tags: ["AI", "Automatisering"],
    highlight: false,
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-50" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="h-px w-10"
                style={{ backgroundColor: "var(--color-foreground)" }}
              />
              <span
                className="text-[11px] tracking-[0.2em]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
              >
                PROJECTS · LOG · BUILDS
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={60}>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8"
              style={{
                color: "var(--color-foreground)",
                lineHeight: "0.95",
                letterSpacing: "-0.04em",
              }}
            >
              Portefølje<span style={{ color: "var(--color-tertiary)" }}>.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div
              className="flex items-start gap-4 max-w-2xl pl-4"
              style={{ borderLeft: "1px solid var(--color-foreground)" }}
            >
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-foreground)" }}
              >
                Her samler jeg det jeg bygger med AI — ekte prosjekter som viser hvordan
                jeg kombinerer teknologi, struktur og kreativitet for å skape reell verdi.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-foreground)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <AnimatedSection>
            <div
              className="flex items-center justify-between pb-4 mb-12"
              style={{ borderBottom: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-[10px] tracking-[0.25em]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
                >
                  // INDEX
                </span>
                <div
                  className="h-px w-10"
                  style={{ backgroundColor: "var(--color-foreground)" }}
                />
                <span
                  className="text-[10px] tracking-[0.25em]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
                >
                  ALL_PROJECTS
                </span>
              </div>
              <span
                className="text-[10px]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
              >
                COUNT: {projects.length.toString().padStart(2, "0")}
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--color-border)" }}>
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 100}>
                <div
                  className="group relative p-7 flex flex-col gap-5 h-full transition-all duration-300 hover:bg-[var(--color-foreground)] cursor-pointer"
                  style={{
                    backgroundColor: project.highlight
                      ? "var(--color-foreground)"
                      : "var(--color-surface)",
                    color: project.highlight
                      ? "var(--color-background)"
                      : "var(--color-foreground)",
                  }}
                >
                  {/* Top bar */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] tracking-[0.25em]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: project.highlight ? "rgba(255,255,255,0.5)" : "var(--color-tertiary)",
                      }}
                    >
                      // {project.code}
                    </span>
                    <div
                      className="flex items-center gap-1.5"
                      style={{ color: project.highlight ? "rgba(255,255,255,0.5)" : "var(--color-tertiary)" }}
                    >
                      <Clock size={10} strokeWidth={1.4} />
                      <span
                        className="text-[10px] tracking-[0.15em]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="transition-colors duration-300 group-hover:text-[var(--color-background)]">
                    {project.icon}
                  </div>

                  {/* Category */}
                  <span
                    className="text-[10px] tracking-[0.25em]"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: project.highlight ? "rgba(255,255,255,0.7)" : "var(--color-secondary)",
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Title + desc */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h3
                      className="text-xl font-medium transition-colors duration-300 group-hover:text-[var(--color-background)]"
                      style={{
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{
                        color: project.highlight
                          ? "rgba(255,255,255,0.7)"
                          : "var(--color-secondary)",
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 tracking-[0.1em]"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: project.highlight ? "var(--color-background)" : "var(--color-foreground)",
                          border: project.highlight
                            ? "1px solid rgba(255,255,255,0.3)"
                            : "1px solid var(--color-border-strong)",
                        }}
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-background)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="p-12 md:p-16 text-center relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-foreground)",
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-8">
                <div
                  className="w-1.5 h-1.5 rounded-full tech-pulse"
                  style={{ backgroundColor: "var(--color-foreground)" }}
                />
                <span
                  className="text-[10px] tracking-[0.25em]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
                >
                  STATUS · BUILDING
                </span>
              </div>

              <h2
                className="text-3xl md:text-5xl font-medium mb-6"
                style={{
                  color: "var(--color-foreground)",
                  letterSpacing: "-0.03em",
                }}
              >
                Prosjektene{" "}
                <span style={{ color: "var(--color-tertiary)" }}>ferdigstilles.</span>
              </h2>
              <p
                className="text-base leading-relaxed max-w-md mx-auto mb-10"
                style={{ color: "var(--color-secondary)" }}
              >
                Denne porteføljen er under aktiv utvikling. Kom tilbake snart for
                å se fullstendige case studies, demo-lenker og detaljerte
                beskrivelser av hva jeg har bygget med AI.
              </p>

              <Link
                href="/"
                className="group inline-flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
                style={{
                  color: "var(--color-foreground)",
                  border: "1px solid var(--color-foreground)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.05em",
                }}
              >
                <ArrowRight size={14} className="rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
                <span>TILBAKE TIL HJEM</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

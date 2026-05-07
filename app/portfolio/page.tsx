import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, ExternalLink, Clock, Sparkles, Code2, Globe, Palette } from "lucide-react";

const projects = [
  {
    status: "coming-soon",
    category: "Webapplikasjon",
    icon: <Globe size={20} />,
    title: "Digitale invitasjoner",
    desc: "En fullstack webapplikasjon for å opprette og sende personlige digitale invitasjoner. Bygget med Next.js, Stripe og Claude API.",
    tags: ["Next.js", "Claude API", "Stripe", "AI"],
    highlight: true,
  },
  {
    status: "coming-soon",
    category: "UX / Design",
    icon: <Palette size={20} />,
    title: "Denne nettsiden",
    desc: "Designet og bygget som en interaktiv CV og portefølje. Modernistisk estetikk med AI-assistert utvikling.",
    tags: ["Next.js", "Tailwind CSS", "AI-assistert"],
    highlight: false,
  },
  {
    status: "coming-soon",
    category: "Automatisering",
    icon: <Code2 size={20} />,
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
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--color-accent-light)", transform: "translate(25%, -25%)" }}
        />

        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{
                backgroundColor: "var(--color-accent-light)",
                color: "var(--color-accent-dark)",
              }}
            >
              <Sparkles size={12} />
              Bevisbank · AI-prosjekter · Arbeid
            </div>
          </AnimatedSection>

          <AnimatedSection delay={60}>
            <h1
              className="text-5xl md:text-7xl font-semibold mb-6"
              style={{
                color: "var(--color-foreground)",
                lineHeight: "1.05",
                letterSpacing: "-0.03em",
              }}
            >
              Portefølje
              <span style={{ color: "var(--color-accent)" }}>.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: "var(--color-secondary)" }}
            >
              Her samler jeg det jeg bygger med AI — ekte prosjekter som viser hvordan
              jeg kombinerer teknologi, struktur og kreativitet for å skape reell verdi.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="py-16 pb-28" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Section label */}
          <AnimatedSection>
            <div
              className="flex items-center gap-3 mb-12"
              style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "1.5rem" }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-accent-dark)" }}
              >
                Prosjekter
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: "var(--color-muted)",
                  color: "var(--color-secondary)",
                }}
              >
                {projects.length}
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 100}>
                <div
                  className="group relative p-6 rounded-2xl flex flex-col gap-4 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: project.highlight ? "var(--color-surface)" : "var(--color-muted)",
                    border: project.highlight
                      ? "1.5px solid var(--color-accent)"
                      : "1px solid var(--color-border)",
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "var(--color-accent-light)",
                        color: "var(--color-accent-dark)",
                      }}
                    >
                      {project.icon}
                    </div>

                    {/* Status badge */}
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0"
                      style={{
                        backgroundColor: "var(--color-muted)",
                        color: "var(--color-secondary)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <Clock size={10} />
                      Kommer snart
                    </div>
                  </div>

                  {/* Category */}
                  <span className="text-xs font-medium" style={{ color: "var(--color-accent-dark)" }}>
                    {project.category}
                  </span>

                  {/* Title + desc */}
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: "var(--color-accent-light)",
                          color: "var(--color-accent-dark)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover overlay for future links */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
                    style={{ backgroundColor: "rgba(168, 197, 160, 0.05)" }}
                  >
                    <ExternalLink size={16} style={{ color: "var(--color-accent-dark)" }} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMING SOON MESSAGE ── */}
      <section className="py-20" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--color-muted) 0%, var(--color-surface) 100%)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  backgroundColor: "var(--color-accent-light)",
                  color: "var(--color-accent-dark)",
                }}
              >
                <Clock size={22} />
              </div>

              <h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                style={{ color: "var(--color-foreground)" }}
              >
                Prosjektene ferdigstilles
              </h2>
              <p
                className="text-base leading-relaxed max-w-md mx-auto mb-8"
                style={{ color: "var(--color-secondary)" }}
              >
                Denne porteføljen er under aktiv utvikling. Kom tilbake snart for
                å se fullstendige case studies, demo-lenker og detaljerte
                beskrivelser av hva jeg har bygget med AI.
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
                style={{
                  color: "var(--color-foreground)",
                  border: "1.5px solid var(--color-border)",
                }}
              >
                Tilbake til hjem
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

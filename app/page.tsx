import AnimatedSection from "@/components/AnimatedSection";
import LinkedInIcon from "@/components/LinkedInIcon";
import Link from "next/link";
import { ArrowRight, Brain, Layers, TrendingUp, Users, CheckCircle2, Sparkles } from "lucide-react";

const skills = [
  {
    icon: <Brain size={20} />,
    title: "AI & Automatisering",
    desc: "Bruker AI aktivt til å effektivisere prosesser og skape konkrete løsninger.",
  },
  {
    icon: <Layers size={20} />,
    title: "Microsoft Cloud",
    desc: "Dyp erfaring med M365, Azure og adopsjon av skyteknologi i komplekse miljøer.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Struktur & Strategi",
    desc: "Gjør det kompliserte enkelt. Prioriterer riktig, leverer presist.",
  },
  {
    icon: <Users size={20} />,
    title: "Kunderelasjoner",
    desc: "Bygger tillit, driver adopsjon og sørger for at kunder faktisk lykkes.",
  },
];

const experience = [
  {
    period: "2023 — nå",
    title: "Customer Success Manager",
    company: "Crayon",
    desc: "Hjelper kunder å hente ut reell verdi fra IT-investeringer. Fokus på Microsoft Cloud, kostnadseffektivitet og langsiktig adopsjon.",
    tags: ["Microsoft Cloud", "Adopsjon", "Verdilevering"],
  },
];

const education = [
  {
    period: "2020 — 2023",
    title: "Markedsføring og salgsledelse",
    company: "Høyskolen Kristiania",
    desc: "Faglig fundament innen markedsføring, salgsstrategi og forretningsmessig kommunikasjon.",
    tags: ["Markedsføring", "Salgsledelse", "Strategi"],
  },
  {
    period: "Tidligere",
    title: "Bachelor",
    company: "Universitetet i Sørøst-Norge",
    desc: "",
    tags: [],
  },
];

const values = [
  "Gjør det komplekse forståelig",
  "Skaper struktur der det mangler",
  "Leverer verdi, ikke bare rapport",
  "Integrerer AI i alt jeg gjør",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--color-accent-light)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--color-accent)" }}
        />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <AnimatedSection delay={0}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
                style={{
                  backgroundColor: "var(--color-accent-light)",
                  color: "var(--color-accent-dark)",
                }}
              >
                <Sparkles size={12} />
                Customer Success · Microsoft Cloud · AI
              </div>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <h1
                className="text-5xl md:text-7xl font-semibold mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-foreground)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.03em",
                }}
              >
                Hei, jeg er{" "}
                <span style={{ color: "var(--color-accent-dark)" }}>Maria</span>
                <span style={{ color: "var(--color-accent)" }}>.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={160}>
              <p
                className="text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
                style={{ color: "var(--color-secondary)" }}
              >
                Jeg er Customer Success Manager som forenkler komplekse IT-miljøer,
                driver adopsjon av Microsoft Cloud — og bruker AI til å jobbe smartere
                hver eneste dag.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={220}>
              <p
                className="text-base leading-relaxed mb-10 max-w-xl"
                style={{ color: "var(--color-secondary)" }}
              >
                Jeg tror på at teknologi skal skape frihet, ikke friksjon. Gjennom
                strukturert tenkning og AI-drevne arbeidsmetoder hjelper jeg
                organisasjoner å realisere det de faktisk betalte for.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-85"
                  style={{
                    backgroundColor: "var(--color-foreground)",
                    color: "var(--color-background)",
                  }}
                >
                  Se porteføljen min
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://www.linkedin.com/in/maria-alyeska-cabalan-60b46b231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
                  style={{
                    color: "var(--color-foreground)",
                    border: "1.5px solid var(--color-border)",
                  }}
                >
                  <LinkedInIcon size={15} />
                  LinkedIn
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
          <span className="text-xs" style={{ color: "var(--color-secondary)", fontFamily: "var(--font-body)" }}>
            Scroll
          </span>
          <div
            className="w-px h-8 rounded-full"
            style={{ background: "linear-gradient(to bottom, var(--color-accent), transparent)" }}
          />
        </div>
      </section>

      {/* ── OM MEG ── */}
      <section id="om-meg" className="py-28" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                  style={{ color: "var(--color-accent-dark)" }}
                >
                  Om meg
                </span>
                <h2
                  className="text-4xl md:text-5xl font-semibold mb-6"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Jeg skaper orden
                  <br />
                  <span style={{ color: "var(--color-accent-dark)" }}>i kompleksiteten.</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={80}>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-secondary)" }}>
                  Som Customer Success Manager hos Crayon er jeg bindeleddet mellom
                  teknologi og forretningsverdi. Jeg hjelper kundene å forstå hva de
                  har kjøpt — og faktisk ta det i bruk på en måte som gir effekt.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={140}>
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-secondary)" }}>
                  Med bakgrunn fra markedsføring og salgsledelse fra Høyskolen Kristiania
                  kombinerer jeg forretningsforståelse med teknisk innsikt. I tillegg
                  bruker jeg AI som et daglig verktøy — ikke bare snakker om det,
                  men <em>bygger</em> med det.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <ul className="flex flex-col gap-3">
                  {values.map((v) => (
                    <li key={v} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 size={16} style={{ color: "var(--color-accent-dark)", flexShrink: 0 }} />
                      <span style={{ color: "var(--color-foreground)" }}>{v}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={120} className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-sm rounded-2xl p-8"
                style={{
                  backgroundColor: "var(--color-muted)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full mb-6"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <blockquote
                  className="text-lg font-medium leading-snug mb-6"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-foreground)" }}
                >
                  &ldquo;Jeg gjør det komplekse enkelt — og hjelper folk å lykkes med
                  teknologien de allerede har.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-foreground)" }}
                  >
                    MA
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
                      Maria Alyeska Cabalan
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-secondary)" }}>
                      Customer Success Manager, Crayon
                    </p>
                  </div>
                </div>
                <div
                  className="flex gap-6 mt-8 pt-6"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  {[
                    { number: "3+", label: "Års erfaring" },
                    { number: "M365", label: "Spesialist" },
                    { number: "AI", label: "Daglig bruker" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="text-xl font-semibold"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--color-foreground)" }}
                      >
                        {stat.number}
                      </p>
                      <p className="text-xs" style={{ color: "var(--color-secondary)" }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── KOMPETANSE ── */}
      <section className="py-28" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "var(--color-accent-dark)" }}
            >
              Kompetanse
            </span>
            <h2
              className="text-4xl md:text-5xl font-semibold mb-14"
              style={{ color: "var(--color-foreground)" }}
            >
              Hva jeg bringer
              <br />
              <span style={{ color: "var(--color-accent-dark)" }}>til bordet.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.title} delay={i * 80}>
                <div
                  className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "var(--color-accent-light)",
                      color: "var(--color-accent-dark)",
                    }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-foreground)" }}>
                    {skill.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                    {skill.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ERFARING & UTDANNING ── */}
      <section id="erfaring" className="py-28" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Erfaring */}
            <div>
              <AnimatedSection>
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                  style={{ color: "var(--color-accent-dark)" }}
                >
                  Erfaring
                </span>
                <h2 className="text-3xl font-semibold mb-10" style={{ color: "var(--color-foreground)" }}>
                  Arbeidserfaring
                </h2>
              </AnimatedSection>
              <div className="flex flex-col gap-6">
                {experience.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 80}>
                    <div
                      className="p-6 rounded-2xl"
                      style={{ backgroundColor: "var(--color-muted)", border: "1px solid var(--color-border)" }}
                    >
                      <span className="text-xs font-medium mb-3 block" style={{ color: "var(--color-accent-dark)" }}>
                        {item.period}
                      </span>
                      <h3 className="text-base font-semibold" style={{ color: "var(--color-foreground)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: "var(--color-secondary)" }}>
                        {item.company}
                      </p>
                      {item.desc && (
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-secondary)" }}>
                          {item.desc}
                        </p>
                      )}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
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
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Utdanning */}
            <div>
              <AnimatedSection>
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                  style={{ color: "var(--color-accent-dark)" }}
                >
                  Utdanning
                </span>
                <h2 className="text-3xl font-semibold mb-10" style={{ color: "var(--color-foreground)" }}>
                  Akademisk bakgrunn
                </h2>
              </AnimatedSection>
              <div className="flex flex-col gap-6">
                {education.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 80}>
                    <div
                      className="p-6 rounded-2xl"
                      style={{ backgroundColor: "var(--color-muted)", border: "1px solid var(--color-border)" }}
                    >
                      <span className="text-xs font-medium mb-3 block" style={{ color: "var(--color-accent-dark)" }}>
                        {item.period}
                      </span>
                      <h3 className="text-base font-semibold" style={{ color: "var(--color-foreground)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: "var(--color-secondary)" }}>
                        {item.company}
                      </p>
                      {item.desc && (
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-secondary)" }}>
                          {item.desc}
                        </p>
                      )}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
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
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-muted) 60%, var(--color-surface) 100%)",
                border: "1px solid var(--color-accent-light)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
                style={{
                  backgroundColor: "var(--color-accent)",
                  transform: "translate(33%, -50%)",
                }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest mb-4 block relative z-10"
                style={{ color: "var(--color-accent-dark)" }}
              >
                La oss snakke
              </span>
              <h2
                className="text-3xl md:text-5xl font-semibold mb-5 relative z-10"
                style={{ color: "var(--color-foreground)" }}
              >
                Klar for å skape
                <br />
                <span style={{ color: "var(--color-accent-dark)" }}>noe nytt sammen?</span>
              </h2>
              <p
                className="text-base mb-10 max-w-lg mx-auto relative z-10"
                style={{ color: "var(--color-secondary)" }}
              >
                Enten du er nysgjerrig på AI, trenger en skarpere Customer Success-strategi
                eller ønsker å koble på noen som tenker nytt — ta gjerne kontakt.
              </p>
              <div className="flex flex-wrap gap-3 justify-center relative z-10">
                <a
                  href="mailto:mariacabalan@outlook.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-85"
                  style={{
                    backgroundColor: "var(--color-foreground)",
                    color: "var(--color-background)",
                  }}
                >
                  Send meg en e-post
                  <ArrowRight size={15} />
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
                  style={{
                    color: "var(--color-foreground)",
                    border: "1.5px solid var(--color-foreground)",
                  }}
                >
                  Se portefølje
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

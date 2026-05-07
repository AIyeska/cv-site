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
    desc: "Forretningsforståelse, salgsstrategi og kommunikasjon — et fundament som viste seg mer verdifullt enn forventet da det kombineres med teknologi og AI.",
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
  "Teknologi og kreativitet",
  "Strategi og problemløsning",
  "Struktur og innovasjon",
  "Brukerforståelse og forretningsverdi",
];

const intersections = [
  { left: "Mennesker", right: "Teknologi" },
  { left: "Business", right: "Innovasjon" },
  { left: "Struktur", right: "Kreativitet" },
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
                Customer Success Manager hos Crayon. Jeg forenkler komplekse IT-miljøer,
                driver adopsjon av Microsoft Cloud — og bygger AI-løsninger som faktisk
                løser ekte problemer.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={220}>
              <p
                className="text-base leading-relaxed mb-10 max-w-xl"
                style={{ color: "var(--color-secondary)" }}
              >
                Jeg er ikke kommet hit via den korteste veien — og det er nøyaktig
                derfor jeg er god på det jeg gjør. Bredde, nysgjerrighet og evnen
                til å se helheten har blitt mitt sterkeste konkurransefortrinn.
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

          {/* Header */}
          <AnimatedSection>
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "var(--color-accent-dark)" }}
            >
              Om meg
            </span>
            <h2
              className="text-4xl md:text-5xl font-semibold mb-16 max-w-2xl"
              style={{ color: "var(--color-foreground)" }}
            >
              Ikke en tradisjonell vei —{" "}
              <span style={{ color: "var(--color-accent-dark)" }}>men den rette.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div className="flex flex-col gap-6">
              <AnimatedSection delay={60}>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  Jeg har ikke hatt en helt tradisjonell vei inn i teknologi. Tidlig i karrieren
                  startet jeg på et studie jeg oppriktig trodde skulle bli riktig for meg. Like
                  før jeg var ferdig, innså jeg at bransjen var i stor endring — jeg studerte
                  tradisjonell markedsføring, men nettopp da kom SoMe og digital markedsføring
                  for fullt. Kompetansen jeg bygde, møtte ikke det markedet skrek etter.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  I stedet for å låse meg fast i noe som ikke føltes riktig, valgte jeg å
                  utforske ulike roller, bransjer og arbeidsmåter — for å forstå hvor jeg
                  faktisk kunne skape mest verdi. Det ga meg noe jeg verdsetter høyt i dag:
                </p>
              </AnimatedSection>

              <AnimatedSection delay={130}>
                <div
                  className="px-6 py-5 rounded-2xl"
                  style={{
                    backgroundColor: "var(--color-accent-light)",
                    border: "1px solid var(--color-accent)",
                  }}
                >
                  <p
                    className="text-xl font-semibold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-accent-dark)" }}
                  >
                    Bredde.
                  </p>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--color-foreground)" }}>
                    Sterk forretningsforståelse, teknisk innsikt og evnen til å se
                    sammenhengen mellom mennesker, prosesser og teknologi.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={160}>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  Jeg lærte tidlig at de beste løsningene ikke nødvendigvis er de mest
                  avanserte — men de som faktisk løser ekte problemer på en enkel og
                  effektiv måte.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={190}>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  Da jeg begynte å jobbe med AI, automatisering og moderne verktøy,
                  falt alt på plass. Det føltes som{" "}
                  <em style={{ color: "var(--color-foreground)", fontStyle: "italic" }}>full circle</em>.
                  Plutselig fikk jeg kombinert alle trådene jeg hadde samlet opp:
                </p>
              </AnimatedSection>

              <AnimatedSection delay={220}>
                <ul className="flex flex-col gap-2.5">
                  {values.map((v) => (
                    <li key={v} className="flex items-center gap-3 text-sm font-medium">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--color-accent-dark)" }}
                      />
                      <span style={{ color: "var(--color-foreground)" }}>{v}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  I dag bygger jeg AI-drevne løsninger og automatiseringer med fokus på
                  praktisk verdi, effektivisering og brukeropplevelse. Jeg er spesielt
                  interessert i hvordan AI kan integreres inn i eksisterende arbeidsprosesser
                  for å redusere manuelt arbeid, skape smartere flyt og frigjøre tid til
                  det som faktisk betyr noe.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={280}>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  Målet mitt er ikke bare å følge utviklingen innen AI — men å være med
                  å forme hvordan teknologien brukes på en måte som skaper reell verdi
                  for mennesker og virksomheter.
                </p>
              </AnimatedSection>
            </div>

            {/* Right side: quote card + intersection visual */}
            <div className="flex flex-col gap-6">
              <AnimatedSection delay={120}>
                <div
                  className="relative w-full rounded-2xl p-8"
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
                    &ldquo;Jeg trives i skjæringspunktet mellom mennesker, business og
                    teknologi — der komplekse behov må oversettes til løsninger som er
                    intuitive, skalerbare og nyttige i praksis.&rdquo;
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

              {/* Skjæringspunkt visual */}
              <AnimatedSection delay={200}>
                <div
                  className="w-full rounded-2xl p-6"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: "var(--color-accent-dark)" }}
                  >
                    Skjæringspunktet
                  </p>
                  <div className="flex flex-col gap-3">
                    {intersections.map((item) => (
                      <div key={item.left} className="flex items-center gap-3">
                        <span
                          className="text-sm font-medium text-right flex-1"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {item.left}
                        </span>
                        <div
                          className="w-6 h-px flex-shrink-0"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "var(--color-accent-dark)" }}
                        />
                        <div
                          className="w-6 h-px flex-shrink-0"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <span
                          className="text-sm font-medium flex-1"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {item.right}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p
                    className="text-xs mt-5 leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Denne siden er et innblikk i hva jeg bygger, hva jeg lærer,
                    og hvor jeg er på vei videre.
                  </p>
                </div>
              </AnimatedSection>
            </div>
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

import AnimatedSection from "@/components/AnimatedSection";
import LinkedInIcon from "@/components/LinkedInIcon";
import Link from "next/link";
import { ArrowRight, Brain, Layers, TrendingUp, Users } from "lucide-react";

const skills = [
  {
    code: "01",
    icon: <Brain size={18} strokeWidth={1.4} />,
    title: "AI & Automatisering",
    desc: "Bruker AI aktivt til å effektivisere prosesser og skape konkrete løsninger.",
  },
  {
    code: "02",
    icon: <Layers size={18} strokeWidth={1.4} />,
    title: "Microsoft Cloud",
    desc: "Dyp erfaring med M365, Azure og adopsjon av skyteknologi i komplekse miljøer.",
  },
  {
    code: "03",
    icon: <TrendingUp size={18} strokeWidth={1.4} />,
    title: "Struktur & Strategi",
    desc: "Gjør det kompliserte enkelt. Prioriterer riktig, leverer presist.",
  },
  {
    code: "04",
    icon: <Users size={18} strokeWidth={1.4} />,
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

// Mono technical label
function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] uppercase tracking-[0.18em]"
      style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
    >
      {children}
    </span>
  );
}

// Section index label like "// 01 → ABOUT"
function SectionIndex({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="text-[11px] tracking-[0.15em]"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
      >
        // {num}
      </span>
      <div
        className="h-px flex-1 max-w-[60px]"
        style={{ backgroundColor: "var(--color-foreground)" }}
      />
      <span
        className="text-[11px] uppercase tracking-[0.2em]"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-50" />

        {/* Crosshair lines */}
        <div
          className="absolute top-0 left-1/2 w-px h-full pointer-events-none opacity-40"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-border-strong) 30%, var(--color-border-strong) 70%, transparent)" }}
        />

        {/* Top status bar */}
        <div className="absolute top-20 left-0 right-0 px-6 z-20">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full tech-pulse"
                style={{ backgroundColor: "var(--color-foreground)" }}
              />
              <span
                className="text-[10px] tracking-[0.25em]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
              >
                ONLINE · CSM · CLOUD · AI
              </span>
            </div>
            <span
              className="text-[10px] tracking-[0.2em] hidden sm:block"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
            >
              N 59.2°  ·  E 10.9°  ·  FREDRIKSTAD
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl">

            <AnimatedSection delay={80}>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-foreground)",
                  lineHeight: "0.95",
                  letterSpacing: "-0.04em",
                }}
              >
                Maria
                <br />
                Alyeska
                <br />
                <span style={{ color: "var(--color-tertiary)" }}>Cabalan</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={160}>
              <div
                className="flex items-start gap-4 mb-6 pl-4"
                style={{ borderLeft: "1px solid var(--color-foreground)" }}
              >
                <p
                  className="text-base md:text-lg leading-relaxed max-w-xl"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Customer Success Manager hos Crayon. Jeg forenkler komplekse IT-miljøer,
                  driver adopsjon av Microsoft Cloud — og bygger AI-løsninger som faktisk
                  løser ekte problemer.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={220}>
              <p
                className="text-sm leading-relaxed mb-12 max-w-lg"
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
                  className="group inline-flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: "var(--color-foreground)",
                    color: "var(--color-background)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span>SE PORTEFØLJE</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/maria-alyeska-cabalan-60b46b231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
                  style={{
                    color: "var(--color-foreground)",
                    border: "1px solid var(--color-foreground)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <LinkedInIcon size={14} />
                  LINKEDIN
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom bar with index */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="max-w-6xl mx-auto flex items-end justify-between">
            <div>
              <div
                className="text-[10px] tracking-[0.25em] mb-1"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
              >
                INDEX
              </div>
              <div className="flex gap-3">
                {["01", "02", "03", "04"].map((n, i) => (
                  <div key={n} className="flex items-center gap-1.5">
                    <span
                      className="text-[11px]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: i === 0 ? "var(--color-foreground)" : "var(--color-tertiary)",
                      }}
                    >
                      {n}
                    </span>
                    {i === 0 && (
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "var(--color-foreground)" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div
                className="text-[10px] tracking-[0.25em]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
              >
                SCROLL ↓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OM MEG ── */}
      <section
        id="om-meg"
        className="py-32 relative"
        style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionIndex num="01" label="ABOUT" />

          <AnimatedSection>
            <h2
              className="text-4xl md:text-6xl font-medium mb-20 max-w-3xl"
              style={{
                color: "var(--color-foreground)",
                lineHeight: "1.0",
                letterSpacing: "-0.03em",
              }}
            >
              Ikke en tradisjonell vei —{" "}
              <span style={{ color: "var(--color-tertiary)" }}>men den rette.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <AnimatedSection delay={60}>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-foreground)" }}>
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
                  faktisk kunne skape mest verdi.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={130}>
                <div
                  className="p-6 my-2"
                  style={{
                    border: "1px solid var(--color-foreground)",
                    backgroundColor: "var(--color-background)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[10px] tracking-[0.25em]"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
                    >
                      OUTPUT_001
                    </span>
                    <div
                      className="h-px flex-1"
                      style={{ backgroundColor: "var(--color-border)" }}
                    />
                  </div>
                  <p
                    className="text-3xl md:text-4xl font-medium mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-foreground)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Bredde.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
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
                <p className="text-base leading-relaxed" style={{ color: "var(--color-foreground)" }}>
                  Da jeg begynte å jobbe med AI, automatisering og moderne verktøy,
                  falt alt på plass. Det føltes som{" "}
                  <span
                    className="px-1.5 py-0.5 text-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      backgroundColor: "var(--color-foreground)",
                      color: "var(--color-background)",
                    }}
                  >
                    full circle
                  </span>
                  . Plutselig fikk jeg kombinert alle trådene jeg hadde samlet opp:
                </p>
              </AnimatedSection>

              <AnimatedSection delay={220}>
                <ul className="flex flex-col gap-2 my-2">
                  {values.map((v, i) => (
                    <li key={v} className="flex items-center gap-4 py-2.5" style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <span
                        className="text-[10px] tracking-[0.15em] w-8"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="text-sm font-medium flex-1"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        {v}
                      </span>
                      <span
                        className="text-[10px]"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
                      >
                        ✓
                      </span>
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
                <p className="text-base leading-relaxed" style={{ color: "var(--color-foreground)" }}>
                  Målet mitt er ikke bare å følge utviklingen innen AI — men å være med
                  å forme hvordan teknologien brukes på en måte som skaper reell verdi
                  for mennesker og virksomheter.
                </p>
              </AnimatedSection>
            </div>

            {/* Right side */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
              <AnimatedSection delay={120}>
                <div
                  className="relative w-full p-7"
                  style={{
                    backgroundColor: "var(--color-foreground)",
                    color: "var(--color-background)",
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full tech-pulse"
                        style={{ backgroundColor: "var(--color-background)" }}
                      />
                      <span
                        className="text-[10px] tracking-[0.25em]"
                        style={{ fontFamily: "var(--font-mono)", opacity: 0.7 }}
                      >
                        STATEMENT.LOG
                      </span>
                    </div>
                    <span
                      className="text-[10px]"
                      style={{ fontFamily: "var(--font-mono)", opacity: 0.5 }}
                    >
                      v1.0
                    </span>
                  </div>

                  <blockquote
                    className="text-lg leading-snug mb-6"
                    style={{
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    &ldquo;Jeg trives i skjæringspunktet mellom mennesker, business og
                    teknologi — der komplekse behov må oversettes til løsninger som er
                    intuitive, skalerbare og nyttige i praksis.&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                    <div
                      className="w-9 h-9 flex items-center justify-center text-xs font-medium shrink-0"
                      style={{
                        border: "1px solid rgba(255,255,255,0.3)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      MA
                    </div>
                    <div>
                      <p className="text-xs font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                        MARIA ALYESKA CABALAN
                      </p>
                      <p className="text-[10px] tracking-[0.15em]" style={{ fontFamily: "var(--font-mono)", opacity: 0.6 }}>
                        CSM · CRAYON
                      </p>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-px mt-6" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                    {[
                      { number: "3+", label: "ÅRS_ERFARING" },
                      { number: "M365", label: "SPESIALIST" },
                      { number: "AI", label: "DAGLIG_BRUK" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="p-3"
                        style={{ backgroundColor: "var(--color-foreground)" }}
                      >
                        <p
                          className="text-2xl font-medium mb-1"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {stat.number}
                        </p>
                        <p
                          className="text-[9px] tracking-[0.15em]"
                          style={{ fontFamily: "var(--font-mono)", opacity: 0.6 }}
                        >
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
                  className="w-full p-6"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-foreground)",
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[10px] tracking-[0.25em]"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
                    >
                      INTERSECTIONS
                    </span>
                    <span
                      className="text-[10px]"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
                    >
                      [03]
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {intersections.map((item) => (
                      <div key={item.left} className="flex items-center gap-3">
                        <span
                          className="text-xs font-medium text-right flex-1"
                          style={{ color: "var(--color-foreground)", fontFamily: "var(--font-mono)" }}
                        >
                          {item.left.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 shrink-0">
                          <div
                            className="w-3 h-px"
                            style={{ backgroundColor: "var(--color-foreground)" }}
                          />
                          <div
                            className="w-1.5 h-1.5"
                            style={{
                              backgroundColor: "var(--color-foreground)",
                              transform: "rotate(45deg)",
                            }}
                          />
                          <div
                            className="w-3 h-px"
                            style={{ backgroundColor: "var(--color-foreground)" }}
                          />
                        </div>
                        <span
                          className="text-xs font-medium flex-1"
                          style={{ color: "var(--color-foreground)", fontFamily: "var(--font-mono)" }}
                        >
                          {item.right.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-5 pt-4"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      Denne siden er et innblikk i hva jeg bygger, hva jeg lærer,
                      og hvor jeg er på vei videre.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── KOMPETANSE ── */}
      <section
        className="py-32"
        style={{ backgroundColor: "var(--color-background)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionIndex num="02" label="CAPABILITIES" />

          <AnimatedSection>
            <h2
              className="text-4xl md:text-6xl font-medium mb-16 max-w-2xl"
              style={{
                color: "var(--color-foreground)",
                lineHeight: "1.0",
                letterSpacing: "-0.03em",
              }}
            >
              Hva jeg bringer{" "}
              <span style={{ color: "var(--color-tertiary)" }}>til bordet.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.title} delay={i * 80}>
                <div
                  className="p-7 h-full transition-all duration-300 hover:bg-[var(--color-surface)] cursor-default group"
                  style={{
                    borderTop: "1px solid var(--color-foreground)",
                    borderRight: i < skills.length - 1 ? "1px solid var(--color-border)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-[10px] tracking-[0.25em]"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
                    >
                      // {skill.code}
                    </span>
                    <div
                      className="transition-colors duration-200 group-hover:text-[var(--color-foreground)]"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {skill.icon}
                    </div>
                  </div>
                  <h3
                    className="text-base font-medium mb-3"
                    style={{ color: "var(--color-foreground)" }}
                  >
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
      <section
        id="erfaring"
        className="py-32"
        style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionIndex num="03" label="TIMELINE" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
            {/* Erfaring */}
            <div>
              <AnimatedSection>
                <div className="flex items-baseline gap-3 mb-10">
                  <h2
                    className="text-3xl font-medium"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    Arbeidserfaring
                  </h2>
                  <MonoLabel>[01]</MonoLabel>
                </div>
              </AnimatedSection>
              <div className="flex flex-col gap-6">
                {experience.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 80}>
                    <div
                      className="p-6"
                      style={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-[10px] tracking-[0.2em]"
                          style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
                        >
                          {item.period.toUpperCase()}
                        </span>
                        <span
                          className="text-[10px]"
                          style={{ fontFamily: "var(--font-mono)", color: "var(--color-tertiary)" }}
                        >
                          ACTIVE
                        </span>
                      </div>
                      <h3 className="text-base font-medium" style={{ color: "var(--color-foreground)" }}>
                        {item.title}
                      </h3>
                      <p
                        className="text-xs mb-4 mt-1"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
                      >
                        @ {item.company}
                      </p>
                      {item.desc && (
                        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-secondary)" }}>
                          {item.desc}
                        </p>
                      )}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-1 tracking-[0.1em]"
                              style={{
                                fontFamily: "var(--font-mono)",
                                color: "var(--color-foreground)",
                                border: "1px solid var(--color-border-strong)",
                              }}
                            >
                              {tag.toUpperCase()}
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
                <div className="flex items-baseline gap-3 mb-10">
                  <h2 className="text-3xl font-medium" style={{ color: "var(--color-foreground)" }}>
                    Utdanning
                  </h2>
                  <MonoLabel>[02]</MonoLabel>
                </div>
              </AnimatedSection>
              <div className="flex flex-col gap-6">
                {education.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 80}>
                    <div
                      className="p-6"
                      style={{
                        backgroundColor: "var(--color-background)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-[10px] tracking-[0.2em]"
                          style={{ fontFamily: "var(--font-mono)", color: "var(--color-foreground)" }}
                        >
                          {item.period.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-base font-medium" style={{ color: "var(--color-foreground)" }}>
                        {item.title}
                      </h3>
                      <p
                        className="text-xs mb-4 mt-1"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--color-secondary)" }}
                      >
                        @ {item.company}
                      </p>
                      {item.desc && (
                        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-secondary)" }}>
                          {item.desc}
                        </p>
                      )}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-1 tracking-[0.1em]"
                              style={{
                                fontFamily: "var(--font-mono)",
                                color: "var(--color-foreground)",
                                border: "1px solid var(--color-border-strong)",
                              }}
                            >
                              {tag.toUpperCase()}
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
      <section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-foreground)" }}
      >
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-[0.05]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-1.5 h-1.5 rounded-full tech-pulse"
                style={{ backgroundColor: "var(--color-background)" }}
              />
              <span
                className="text-[11px] tracking-[0.25em]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-background)" }}
              >
                READY · TO · CONNECT
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <h2
              className="text-4xl md:text-6xl font-medium mb-8 max-w-3xl"
              style={{
                color: "var(--color-background)",
                lineHeight: "1.0",
                letterSpacing: "-0.03em",
              }}
            >
              Klar for å skape{" "}
              <span style={{ opacity: 0.5 }}>noe nytt sammen?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={140}>
            <p
              className="text-base mb-12 max-w-xl"
              style={{ color: "var(--color-background)", opacity: 0.7 }}
            >
              Enten du er nysgjerrig på AI, trenger en skarpere Customer Success-strategi
              eller ønsker å koble på noen som tenker nytt — ta gjerne kontakt.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:mariacabalan@outlook.com"
                className="group inline-flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor: "var(--color-background)",
                  color: "var(--color-foreground)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.05em",
                }}
              >
                <span>SEND E-POST</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)]"
                style={{
                  color: "var(--color-background)",
                  border: "1px solid var(--color-background)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.05em",
                }}
              >
                <span>SE PORTEFØLJE</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

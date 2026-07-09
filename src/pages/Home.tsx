import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TetrisHero from "@/components/TetrisHero";
import { BlockReveal } from "@/components/BlockReveal";
import { techStack, type TechIcon } from "@/content/techStack";
import { colorByIndex } from "@/lib/tetromino";

const INTERESTS = [
  "Cybersecurity",
  "Machine Learning",
  "Robotics",
  "Cloud Computing",
  "Software Development",
];

function TechGlyph({ icon, name }: { icon: TechIcon; name: string }) {
  if (icon.type === "fa") return <FontAwesomeIcon icon={icon.icon} className="h-7 w-7" />;
  if (icon.type === "img")
    return <img src={icon.src} alt={name} width={28} height={28} className="h-7 w-7" />;
  return <span className="text-xl font-bold">{icon.text}</span>;
}

function SectionMarker({ n, label }: { n: string; label: string }) {
  return (
    <p className="hud mb-6">
      {n} / {label}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <title>Atul Rao | Portfolio</title>
      <meta
        name="description"
        content="Software Engineering Student at McMaster University passionate about building innovative solutions through cloud computing, machine learning, and robotics."
      />

      <Navbar />

      <main>
        <TetrisHero />

        {/* About */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <SectionMarker n="01" label="About" />
          <div className="grid gap-8 md:grid-cols-2">
            <BlockReveal className="brick brick-accent p-7">
              <div style={{ ["--accent" as string]: colorByIndex(0) }}>
                <h2 className="mb-4 text-2xl">Hi, I&apos;m Atul.</h2>
                <p className="mb-4 leading-relaxed text-[color:var(--color-ink-soft)]">
                  I&apos;ve been surrounded by technology my whole life — games, movies, the
                  internet — and have always been fascinated by its power to change the world.
                </p>
                <p className="leading-relaxed text-[color:var(--color-ink-soft)]">
                  I&apos;m a 3rd-year Software Engineering student at McMaster University,
                  actively seeking internships for 2026.
                </p>
              </div>
            </BlockReveal>

            <BlockReveal delay={120} className="brick brick-accent p-7">
              <div style={{ ["--accent" as string]: colorByIndex(2) }}>
                <h3 className="mb-4 text-xl">Interests</h3>
                <ul className="flex flex-wrap gap-2">
                  {INTERESTS.map((interest, i) => (
                    <li
                      key={interest}
                      className="hud rounded px-3 py-1.5"
                      style={{
                        border: "2px solid var(--color-ink)",
                        borderTop: `4px solid ${colorByIndex(i)}`,
                      }}
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </BlockReveal>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <SectionMarker n="02" label="Stack" />
          <div className="space-y-10">
            {Object.entries(techStack).map(([category, techs], ci) => (
              <div key={category}>
                <h3 className="mb-4 text-lg">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, i) => (
                    <BlockReveal key={tech.name} delay={i * 40}>
                      <div
                        className="brick flex h-24 w-24 flex-col items-center justify-center gap-2 p-2 text-center"
                        style={{ borderTop: `5px solid ${colorByIndex(ci * 3 + i)}` }}
                      >
                        <TechGlyph icon={tech.icon} name={tech.name} />
                        <span className="hud text-[0.6rem]">{tech.name}</span>
                      </div>
                    </BlockReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

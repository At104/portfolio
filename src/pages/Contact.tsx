import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlockReveal } from "@/components/BlockReveal";
import { contactMethods, socialLinks } from "@/content/contact";
import { colorByIndex } from "@/lib/tetromino";

export default function Contact() {
  return (
    <>
      <title>Contact | Atul Rao</title>
      <meta
        name="description"
        content="Get in touch with Atul Rao - open to Summer 2027 internships and opportunities in software, cloud, and machine learning."
      />

      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pb-8 pt-32">
        <p className="hud mb-3">01 / Contact</p>
        <h1 className="mb-4 text-4xl md:text-5xl">Let&apos;s Connect</h1>
        <p className="mb-12 max-w-2xl leading-relaxed text-[color:var(--color-ink-soft)]">
          I&apos;m always open to new opportunities, interesting projects, or just a casual conversation.
        </p>

        <div className="mb-12 grid gap-5 sm:grid-cols-2">
          {contactMethods.map((method, i) => (
            <BlockReveal key={method.title} delay={i * 80}>
              <div
                className="brick brick-accent flex h-full flex-col p-6"
                style={{ ["--accent" as string]: colorByIndex(i) }}
              >
                <FontAwesomeIcon icon={method.icon} className="mb-4 h-6 w-6" />
                <p className="hud mb-1">{method.title}</p>
                <p className="mb-2 text-sm text-[color:var(--color-ink-soft)]">{method.description}</p>
                {method.link ? (
                  <a href={method.link} className="mt-auto font-medium underline decoration-2 underline-offset-4">
                    {method.value}
                  </a>
                ) : (
                  <span className="mt-auto font-medium">{method.value}</span>
                )}
              </div>
            </BlockReveal>
          ))}
        </div>

        <p className="hud mb-6">02 / Elsewhere</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {socialLinks.map((social, i) => (
            <BlockReveal key={social.name} delay={i * 80}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brick brick-accent flex h-full items-start gap-4 p-6"
                style={{ ["--accent" as string]: colorByIndex(i + 3) }}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center">
                  {social.icon.type === "fa" ? (
                    <FontAwesomeIcon icon={social.icon.icon} className="h-6 w-6" />
                  ) : (
                    <img src={social.icon.src} alt={social.name} width={24} height={24} className="h-6 w-6" />
                  )}
                </span>
                <span>
                  <span className="block font-medium">{social.name}</span>
                  <span className="mb-1 block text-sm text-[color:var(--color-ink-soft)]">{social.description}</span>
                  <span className="hud">{social.handle}</span>
                </span>
              </a>
            </BlockReveal>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

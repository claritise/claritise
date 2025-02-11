import { Github, Twitter, Instagram, Youtube, AtSign } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { forwardRef } from "react";
import { TikTokIcon } from "~/components/icons/tiktok-icon";

type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/claritise",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/@claritise",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@claritise",
    icon: Youtube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@claritise",
    icon: forwardRef(TikTokIcon),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/claritize",
    icon: Twitter,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@claritise",
    icon: AtSign,
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-1 flex-col gap-4">
            <section className="rounded-xl bg-muted/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-card-foreground">
                Welcome to My Corner of the Web
              </h2>
              <p className="text-muted-foreground">
                Hello! I&apos;m 𝒶𝓃𝓃𝒶𝑔𝓇𝒶𝓂, a passionate writer, tech enthusiast
                and ameteur musician. This blog is where I share my thoughts on
                technology, literature, and life in general as well as music and
                projects I am working on! Feel free to explore my posts and get
                in touch!
              </p>
            </section>

            <section className="rounded-xl bg-muted/50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-card-foreground">
                Connect with Me
              </h2>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <link.icon className="size-16" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

import {
  Github,
  Twitter,
  Instagram,
  Youtube,
  AtSign,
  type LucideProps,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { forwardRef } from "react";

export function TikTokIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        transform="translate(1, 1) scale(0.9)"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
      />
    </svg>
  );
}

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
    href: "https://instagram.com/claritise",
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

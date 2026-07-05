import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <p className="text-sm text-ink-soft">
          &copy; {new Date().getFullYear()} {profile.name} — {profile.institution}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink-soft hover:text-brand"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink-soft hover:text-brand"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

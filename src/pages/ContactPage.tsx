import { Mail, Github, Linkedin, Building2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/content";

export function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <SectionHeader eyebrow="Get in Touch" title="Contact" />
      <p className="mx-auto max-w-xl text-lg text-ink-soft">
        Interested in collaboration, discussing research ideas, or learning more about my work? I'd love to hear
        from you.
      </p>

      <div className="mt-12 space-y-4 text-left">
        <div className="flex items-center gap-3 rounded-lg border border-line p-4">
          <Mail size={18} className="text-brand" />
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-soft">Professional Email</p>
            <a href={`mailto:${profile.email.professional}`} className="font-medium text-ink hover:text-brand">
              {profile.email.professional}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-line p-4">
          <Mail size={18} className="text-brand" />
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-soft">Personal Email</p>
            <a href={`mailto:${profile.email.personal}`} className="font-medium text-ink hover:text-brand">
              {profile.email.personal}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-line p-4">
          <Building2 size={18} className="text-brand" />
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-soft">Institution</p>
            <p className="font-medium text-ink">{profile.institution}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-line p-4">
          <Github size={18} className="text-brand" />
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-soft">GitHub</p>
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-brand">
              github.com/mhurtado13
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-line p-4">
          <Linkedin size={18} className="text-brand" />
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-soft">LinkedIn</p>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-brand">
              linkedin.com/in/marcelo-hurtado
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-lg bg-brand-soft p-8">
        <p className="mb-4 text-ink">Looking for collaborations or have questions about my research?</p>
        <a href={`mailto:${profile.email.professional}`}>
          <Button variant="primary">Send Me an Email</Button>
        </a>
      </div>
    </div>
  );
}

import { publications, awards, talksOral, talksPoster } from "@/data/content";

export interface Highlight {
  label: string;
  to: string;
}

function truncate(text: string, max: number) {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

function parseYear(value: string): number {
  const matches = value.match(/\d{4}/g);
  return matches ? Number(matches[matches.length - 1]) : 0;
}

interface Candidate extends Highlight {
  year: number;
}

/**
 * Picks the most recent achievement across publications, awards and talks
 * (by year, newest entry per array) so the homepage announcement bar stays
 * current as new items are added to content.ts. Ties favor publications,
 * then awards, then oral talks, then poster talks.
 */
export function getLatestHighlight(): Highlight {
  const candidates: Candidate[] = [];

  if (publications[0]) {
    candidates.push({
      label: `New publication: ${truncate(publications[0].title, 70)}`,
      year: parseYear(publications[0].year),
      to: "/publications",
    });
  }
  if (awards[0]) {
    candidates.push({
      label: awards[0].title,
      year: parseYear(awards[0].year),
      to: "/awards",
    });
  }
  if (talksOral[0]) {
    candidates.push({
      label: `Oral presentation: ${truncate(talksOral[0].venue, 70)}`,
      year: parseYear(talksOral[0].date),
      to: "/outreach",
    });
  }
  if (talksPoster[0]) {
    candidates.push({
      label: `Poster presentation: ${truncate(talksPoster[0].venue, 70)}`,
      year: parseYear(talksPoster[0].year),
      to: "/outreach",
    });
  }

  candidates.sort((a, b) => b.year - a.year);
  return candidates[0];
}

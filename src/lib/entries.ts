import { type Entry, resume } from "@/data/resume";
import { pageHead } from "@/lib/seo";

export type Section = "work" | "freelance" | "projects" | "education";

/** The four lists of entries on the home page, in page order */
export const sections: Record<Section, { label: string; path: string; entries: Entry[] }> = {
    work: { label: "Experience", path: "/work", entries: resume.work },
    freelance: { label: "Freelance", path: "/freelance", entries: resume.freelance },
    education: { label: "Education", path: "/education", entries: resume.education },
    projects: { label: "Projects", path: "/projects", entries: resume.projects },
};

export function getEntry(section: Section, slug: string) {
    return sections[section].entries.find((entry) => entry.slug === slug);
}

/** Site-relative path of an entry's page */
export function entryPath(section: Section, entry: Entry) {
    return `${sections[section].path}/${entry.slug}`;
}

/** "Jan 2025 - Present", or just the start when there is no end */
export function dateLabel(entry: Entry) {
    return entry.end ? `${entry.start} - ${entry.end}` : entry.start;
}

/** Head tags for an entry's page: title, description, canonical URL and breadcrumbs */
export function entryHead(section: Section, slug: string) {
    const entry = getEntry(section, slug);
    if (!entry) return {};
    const path = entryPath(section, entry);
    return pageHead({
        path,
        title: `${entry.title} | ${resume.name}`,
        description: entry.summary,
        breadcrumbs: [
            { label: "Home", path: "/" },
            { label: sections[section].label, path: `/#${section}` },
            { label: entry.title, path },
        ],
    });
}

// Logos for the technology chips on entry pages: the skills on the home page, plus a few more
const skillLogos = new Map<string, string>([
    ...resume.skills.flatMap((group) => group.items.map((item): [string, string] => [item.name, item.logoUrl])),
    ["Algolia", "/skills/algolia.svg"],
    ["DigitalOcean", "/skills/digitalocean.svg"],
    ["Docusaurus", "/skills/docusaurus.svg"],
    ["Firebase", "/skills/firebase.svg"],
    ["Mantine", "/skills/mantine.svg"],
    ["MDX", "/skills/mdx.svg"],
    ["OpenSearch", "/skills/opensearch.svg"],
    ["Railway", "/skills/railway.svg"],
    ["Redis", "/skills/redis.svg"],
    ["Swagger", "/skills/swagger.svg"],
    ["Turborepo", "/skills/turborepo.svg"],
    ["Vite+", "/skills/vite.svg"],
]);

// Names that share a logo with a skill above
const aliases: Record<string, string> = {
    "Cloudflare Pages": "Cloudflare",
    "Cloudflare Workers": "Cloudflare",
    "Express.js": "Express",
    "TanStack Form": "TanStack",
    "TanStack Query": "TanStack",
    "TanStack Router": "TanStack",
    "TanStack Start": "TanStack",
};

export function technologyLogo(name: string) {
    return skillLogos.get(aliases[name] ?? name);
}

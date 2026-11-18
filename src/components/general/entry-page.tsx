import { Fragment } from "react";

import { ArrowRight, ArrowUpRight, Award, FileText, Globe, Play } from "lucide-react";

import { Page } from "@/components/general/page";
import { Icons } from "@/components/icons";
import type { EntryLink } from "@/data/resume";
import { type Section, dateLabel, getEntry, sections, technologyLogo } from "@/lib/entries";
import { cn } from "@/lib/utils";

// Where a link goes: an icon, and a short line to show under its label
function linkKind(link: EntryLink) {
    if (!/^https?:/.test(link.href)) return { Icon: FileText, detail: "On this site" };
    const url = new URL(link.href);
    const host = url.hostname.replace(/^www\./, "");
    const service =
        host === "github.com"
            ? { Icon: Icons.github, name: "GitHub" }
            : host.endsWith("linkedin.com")
              ? { Icon: Icons.linkedin, name: "LinkedIn" }
              : host.endsWith("youtube.com") || host === "youtu.be"
                ? { Icon: Play, name: "YouTube" }
                : host.endsWith("udacity.com")
                  ? { Icon: Award, name: "Udacity" }
                  : { Icon: Globe, name: link.label === host ? "Website" : host };
    // When the label already names the service ("Code on GitHub"), show the address instead
    const detail = link.label.includes(service.name) ? (host + url.pathname).replace(/\/$/, "") : service.name;
    return { Icon: service.Icon, detail };
}

// The page of one job, client, project or school: what it is, what I did there, the stack and the links.
export function EntryPage({ section, slug }: { section: Section; slug: string }) {
    const entry = getEntry(section, slug);
    if (!entry) return null;

    const facts = [entry.subtitle, entry.type, entry.location, dateLabel(entry)].filter(Boolean);

    return (
        <Page
            back={{ href: `/#${section}`, label: sections[section].label }}
            logoUrl={entry.logoUrl}
            title={entry.title}
            // Same name as the card's title on the home page, so it flies into place
            titleTransitionName={`entry-${entry.slug}`}
            description={entry.summary}
            meta={
                <p className="flex flex-wrap gap-x-2 text-sm text-neutral-400">
                    {facts.map((fact, index) => (
                        <Fragment key={fact}>
                            {index > 0 && <span aria-hidden="true">·</span>}
                            <span>{fact}</span>
                        </Fragment>
                    ))}
                </p>
            }
        >
            {entry.highlights.length > 0 && (
                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Highlights</h2>
                    <ul className="flex flex-col gap-3">
                        {entry.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3 leading-relaxed">
                                <span
                                    aria-hidden="true"
                                    className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4177BD]"
                                />
                                <span className="opacity-90">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            {entry.technologies.length > 0 && (
                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">{section === "education" ? "Skills" : "Technologies"}</h2>
                    <ul className="flex flex-wrap gap-2">
                        {entry.technologies.map((name) => {
                            const logoUrl = technologyLogo(name);
                            return (
                                <li
                                    key={name}
                                    className="flex items-center gap-1.5 rounded-lg bg-neutral-900 px-2.5 py-1.5 text-sm"
                                >
                                    {logoUrl && (
                                        <img
                                            src={logoUrl}
                                            alt=""
                                            width={16}
                                            height={16}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-4 w-4 rounded-sm"
                                        />
                                    )}
                                    {name}
                                </li>
                            );
                        })}
                    </ul>
                </section>
            )}
            {entry.links.length > 0 && (
                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Links</h2>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {entry.links.map((link) => {
                            // Links to other sites open in a new tab and get a diagonal arrow; links within the site get a straight one
                            const external = /^https?:/.test(link.href);
                            const Arrow = external ? ArrowUpRight : ArrowRight;
                            const { Icon, detail } = linkKind(link);
                            return (
                                <li key={link.href} className="min-w-0">
                                    <a
                                        href={link.href}
                                        // A tile that lifts on hover, like the cards on the home page.
                                        // The strip under it keeps the hover while it's raised.
                                        className="group relative flex h-full items-center gap-3 rounded-xl bg-neutral-900 p-3 pr-4 transition duration-200 after:absolute after:inset-x-0 after:top-full after:h-1 hover:-translate-y-0.5 hover:bg-neutral-800"
                                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-neutral-300 transition-colors duration-200 group-hover:bg-neutral-700 group-hover:text-white">
                                            <Icon aria-hidden="true" className="h-5 w-5" />
                                        </span>
                                        <span className="flex min-w-0 flex-col">
                                            <span className="font-medium text-white">{link.label}</span>
                                            <span className="truncate text-sm text-neutral-400">{detail}</span>
                                        </span>
                                        <Arrow
                                            aria-hidden="true"
                                            className={cn(
                                                "ml-auto h-4 w-4 shrink-0 text-neutral-400 transition duration-200 group-hover:translate-x-0.5 group-hover:text-white",
                                                external && "group-hover:-translate-y-0.5",
                                            )}
                                        />
                                        {external && <span className="sr-only">(opens in a new tab)</span>}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            )}
        </Page>
    );
}

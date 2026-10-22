import { Fragment } from "react";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Page } from "@/components/general/page";
import { type Section, dateLabel, getEntry, sections, technologyLogo } from "@/lib/entries";

// The page of one job, client, project or school: what it is, what I did there, the stack and the links.
// The text is the same as on the resume.
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
                    <ul className="flex flex-col gap-2">
                        {entry.links.map((link) => {
                            // Links to other sites open in a new tab and get a diagonal arrow; links within the site get a straight one
                            const external = /^https?:/.test(link.href);
                            const Arrow = external ? ArrowUpRight : ArrowRight;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="link group inline-flex w-fit items-center gap-1.5 text-[#4177BD]"
                                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                        {link.label}
                                        <Arrow
                                            aria-hidden="true"
                                            className={
                                                external
                                                    ? "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                    : "h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                            }
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

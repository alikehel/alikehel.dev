import type { ReactNode } from "react";

import { Asset, HeadContent, Scripts, createRootRoute, useTags } from "@tanstack/react-router";

import { Navbar } from "@/components/general/navbar";
import { resume } from "@/data/resume";
import appCss from "@/styles/globals.css?inline";
import appCssUrl from "@/styles/globals.css?url";

const title = `${resume.name} | ${resume.title}`;
const ogImage = new URL("/og.jpg", resume.url).href;

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resume.name,
    jobTitle: resume.title,
    url: resume.url,
    image: new URL(resume.avatarUrl, resume.url).href,
    sameAs: resume.contact.social
        .filter((item) => item.name === "GitHub" || item.name === "LinkedIn")
        .map((item) => item.url),
};

const starLayers = ["stars", "stars2", "stars3", "stars4"];

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title },
            { name: "description", content: resume.summary },
            { name: "theme-color", content: "#000000" },
            { property: "og:type", content: "website" },
            { property: "og:site_name", content: resume.name },
            { property: "og:title", content: title },
            { property: "og:description", content: resume.summary },
            { property: "og:url", content: resume.url },
            { property: "og:image", content: ogImage },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:image:alt", content: title },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: resume.summary },
            { name: "twitter:image", content: ogImage },
        ],
        links: [
            // In production the CSS is inlined below, which saves a render-blocking request
            ...(import.meta.env.DEV ? [{ rel: "stylesheet", href: appCssUrl }] : []),
            { rel: "icon", href: "/favicon.ico" },
            { rel: "alternate", type: "application/rss+xml", title: `${resume.name}'s blog`, href: "/rss.xml" },
        ],
        styles: import.meta.env.DEV ? [] : [{ children: appCss }],
        scripts: [{ type: "application/ld+json", children: JSON.stringify(personJsonLd) }],
    }),
    shellComponent: RootDocument,
    notFoundComponent: NotFound,
});

// <HeadContent /> without the JS module preloads, since production ships no client JS
function StaticHeadContent() {
    const tags = useTags().filter((tag) => !(tag.tag === "link" && tag.attrs?.rel === "modulepreload"));
    return tags.map((tag) => <Asset {...tag} key={`tsr-meta-${JSON.stringify(tag)}`} />);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="dark">
            <head>{import.meta.env.DEV ? <HeadContent /> : <StaticHeadContent />}</head>
            <body className="antialiased">
                {children}
                <Navbar />
                <div aria-hidden="true" className="bg-animation -z-10 overflow-hidden opacity-70">
                    {starLayers.map((layer) => (
                        <div key={layer} className={layer} />
                    ))}
                </div>
                <img
                    src="/jinx-monkey.webp"
                    alt="Jinx Monkey"
                    width={100}
                    height={78}
                    loading="lazy"
                    decoding="async"
                    className="relative bottom-5 left-5 -z-50 opacity-80 md:fixed md:right-5 md:left-auto"
                />
                {/* The page is static HTML and CSS. Client JS only loads in dev, for hot reload. */}
                {import.meta.env.DEV && <Scripts />}
            </body>
        </html>
    );
}

function NotFound() {
    return (
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl opacity-80">This page doesn&apos;t exist.</p>
            <a href="/" className="text-xl text-[#4177BD] underline">
                Back home
            </a>
        </main>
    );
}

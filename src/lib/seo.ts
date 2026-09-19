import { resume } from "@/data/resume";

interface PageHeadOptions {
    /** Site-relative path, e.g. "/blog" */
    path: string;
    /** Full document title */
    title: string;
    description: string;
    /** Set for blog posts */
    article?: { published: string };
}

export function absoluteUrl(path: string) {
    return new URL(path, resume.url).href;
}

// Per-page head tags. Meta tags override the root's defaults; the canonical link is only set here.
export function pageHead({ path, title, description, article }: PageHeadOptions) {
    const url = absoluteUrl(path);
    const jsonLd = article && {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        datePublished: article.published,
        url,
        author: { "@type": "Person", name: resume.name, url: resume.url },
    };

    return {
        meta: [
            { title },
            { name: "description", content: description },
            { property: "og:type", content: article ? "article" : "website" },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:url", content: url },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            ...(article ? [{ property: "article:published_time", content: article.published }] : []),
        ],
        links: [{ rel: "canonical", href: url }],
        scripts: jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] : [],
    };
}

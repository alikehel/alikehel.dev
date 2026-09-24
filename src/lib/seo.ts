import { resume } from "@/data/resume";

export interface Crumb {
    label: string;
    /** Site-relative path, e.g. "/blog" */
    path: string;
}

interface PageHeadOptions {
    /** Site-relative path, e.g. "/blog" */
    path: string;
    /** Full document title */
    title: string;
    description: string;
    /** Trail from the home page to this page, used for breadcrumb structured data */
    breadcrumbs?: Crumb[];
    /** Set for blog posts */
    article?: { headline: string; published: string };
}

export function absoluteUrl(path: string) {
    return new URL(path, resume.url).href;
}

// Per-page head tags. Meta tags override the root's defaults; the canonical link is only set here.
export function pageHead({ path, title, description, breadcrumbs, article }: PageHeadOptions) {
    const url = absoluteUrl(path);

    const jsonLd: object[] = [];
    if (article) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.headline,
            description,
            datePublished: article.published,
            url,
            author: { "@type": "Person", name: resume.name, url: resume.url },
        });
    }
    if (breadcrumbs) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.label,
                item: absoluteUrl(crumb.path),
            })),
        });
    }

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
        scripts: jsonLd.map((data) => ({ type: "application/ld+json", children: JSON.stringify(data) })),
    };
}

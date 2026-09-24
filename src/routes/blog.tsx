import { createFileRoute } from "@tanstack/react-router";
import { Rss } from "lucide-react";

import { Page } from "@/components/general/page";
import { TitleWithArrow } from "@/components/general/title-arrow";
import { resume } from "@/data/resume";
import { formatDate, posts } from "@/lib/content";
import { type Crumb, pageHead } from "@/lib/seo";

const description = "Notes on building things for the web.";

// Breadcrumb trail for search engines (structured data only)
const breadcrumbs: Crumb[] = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
];

export const Route = createFileRoute("/blog")({
    head: () => pageHead({ path: "/blog", title: `Blog | ${resume.name}`, description, breadcrumbs }),
    component: BlogPage,
});

function BlogPage() {
    return (
        <Page back={{ href: "/", label: "Home" }} title="Blog" description={description}>
            <ul className="flex flex-col gap-4">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <a
                            href={`/blog/${post.slug}`}
                            className="group -mx-4 flex flex-col gap-1 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-[#70707050]"
                        >
                            <h2 className="text-2xl font-bold">
                                <TitleWithArrow title={post.title} className="h-5 w-5" />
                            </h2>
                            <p className="opacity-80">{post.description}</p>
                            <time dateTime={post.date} className="text-sm opacity-60">
                                {formatDate(post.date)}
                            </time>
                        </a>
                    </li>
                ))}
            </ul>
            <a href="/rss.xml" className="inline-flex w-fit items-center gap-1.5 text-sm text-[#4177BD] underline">
                <Rss aria-hidden="true" className="h-4 w-4" />
                RSS feed
            </a>
        </Page>
    );
}

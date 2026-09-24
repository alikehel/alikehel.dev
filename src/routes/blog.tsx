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
                            // Lifts a little on hover, like the cards on the home page
                            className="group relative -mx-4 flex flex-col gap-1 rounded-xl px-4 py-3 transition duration-200 after:absolute after:inset-x-0 after:top-full after:h-1 hover:-translate-y-0.5 hover:bg-[#70707050]"
                        >
                            {/* Same name as the post page's heading, so the title flies into place */}
                            <h2
                                className="shared-title w-fit text-2xl font-bold"
                                style={{ viewTransitionName: `post-${post.slug}` }}
                            >
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
            <a href="/rss.xml" className="link inline-flex w-fit items-center gap-1.5 text-sm text-[#4177BD]">
                <Rss aria-hidden="true" className="h-4 w-4" />
                RSS feed
            </a>
        </Page>
    );
}

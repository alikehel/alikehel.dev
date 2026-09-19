import { createFileRoute } from "@tanstack/react-router";

import { Page } from "@/components/general/page";
import { resume } from "@/data/resume";
import { formatDate, posts } from "@/lib/content";
import { pageHead } from "@/lib/seo";

const description = "Notes on building things for the web.";

export const Route = createFileRoute("/blog")({
    head: () => pageHead({ path: "/blog", title: `Blog | ${resume.name}`, description }),
    component: BlogPage,
});

function BlogPage() {
    return (
        <Page title="Blog" description={description}>
            <ul className="flex flex-col gap-8">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <a href={`/blog/${post.slug}`} className="group flex flex-col gap-1">
                            <h2 className="text-2xl font-bold group-hover:text-[#4177BD]">{post.title}</h2>
                            <p className="opacity-80">{post.description}</p>
                            <time dateTime={post.date} className="text-sm opacity-60">
                                {formatDate(post.date)}
                            </time>
                        </a>
                    </li>
                ))}
            </ul>
            <a href="/rss.xml" className="w-fit text-sm text-[#4177BD] underline">
                RSS feed
            </a>
        </Page>
    );
}

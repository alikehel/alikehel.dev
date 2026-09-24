import { createFileRoute, notFound } from "@tanstack/react-router";

import { Page } from "@/components/general/page";
import { mdxComponents } from "@/components/mdx-components";
import { resume } from "@/data/resume";
import { formatDate, getPost } from "@/lib/content";
import { type Crumb, pageHead } from "@/lib/seo";

// Breadcrumb trail for search engines (structured data only)
const postCrumbs = (slug: string, title: string): Crumb[] => [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: title, path: `/blog/${slug}` },
];

export const Route = createFileRoute("/blog_/$slug")({
    // Only plain data here: it is serialized into the page. The component is looked up again in PostPage.
    loader: ({ params }) => {
        const post = getPost(params.slug);
        if (!post) throw notFound();
        return { slug: post.slug, title: post.title, description: post.description, date: post.date };
    },
    head: ({ loaderData }) =>
        loaderData
            ? pageHead({
                  path: `/blog/${loaderData.slug}`,
                  title: `${loaderData.title} | ${resume.name}`,
                  description: loaderData.description,
                  breadcrumbs: postCrumbs(loaderData.slug, loaderData.title),
                  article: { headline: loaderData.title, published: loaderData.date },
              })
            : {},
    component: PostPage,
});

function PostPage() {
    const { slug, title, description, date } = Route.useLoaderData();
    const post = getPost(slug);
    if (!post) return null;

    return (
        <Page
            back={{ href: "/blog", label: "Blog" }}
            title={title}
            description={description}
            meta={
                <time dateTime={date} className="text-sm opacity-60">
                    {formatDate(date)}
                </time>
            }
        >
            <article className="prose max-w-none prose-invert prose-a:text-[#4177BD]">
                <post.Content components={mdxComponents} />
            </article>
        </Page>
    );
}

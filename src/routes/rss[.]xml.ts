import { createFileRoute } from "@tanstack/react-router";

import { resume } from "@/data/resume";
import { posts } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

const entities: Record<string, string> = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" };
const escape = (text: string) => text.replace(/[<>&'"]/g, (char) => entities[char] ?? char);

function buildFeed() {
    const items = posts
        .map((post) => {
            const url = absoluteUrl(`/blog/${post.slug}`);
            return `
    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(post.description)}</description>
    </item>`;
        })
        .join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(resume.name)}</title>
    <link>${resume.url}</link>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/>
    <description>${escape(resume.summary)}</description>
    <language>en</language>${items}
  </channel>
</rss>
`;
}

// Prerendered to a static rss.xml at build time (listed in `pages` in vite.config.ts)
export const Route = createFileRoute("/rss.xml")({
    server: {
        handlers: {
            GET: () =>
                new Response(buildFeed(), {
                    headers: { "content-type": "application/rss+xml; charset=utf-8" },
                }),
        },
    },
});

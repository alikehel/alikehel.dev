import type { ComponentType } from "react";

export interface Post {
    slug: string;
    title: string;
    description: string;
    /** YYYY-MM-DD */
    date: string;
    Content: ComponentType<{ components?: Record<string, ComponentType<never>> }>;
}

interface PostModule {
    default: Post["Content"];
    frontmatter: {
        title: string;
        description: string;
        date: string;
        /** Drafts only show up in dev */
        draft?: boolean;
    };
}

const modules = import.meta.glob<PostModule>("/content/blog/*.mdx", { eager: true });

export const posts: Post[] = Object.entries(modules)
    .filter(([, mod]) => import.meta.env.DEV || !mod.frontmatter.draft)
    .map(([path, mod]) => ({
        slug: path.slice(path.lastIndexOf("/") + 1, -".mdx".length),
        title: mod.frontmatter.title,
        description: mod.frontmatter.description,
        date: mod.frontmatter.date,
        Content: mod.default,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
    return posts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
    return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    });
}

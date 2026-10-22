import { createFileRoute, notFound } from "@tanstack/react-router";

import { EntryPage } from "@/components/general/entry-page";
import { entryHead, getEntry } from "@/lib/entries";

export const Route = createFileRoute("/projects/$slug")({
    // Only the slug is loaded: it is serialized into the page. The entry is looked up again in the component.
    loader: ({ params }) => {
        const entry = getEntry("projects", params.slug);
        if (!entry) throw notFound();
        return { slug: entry.slug };
    },
    head: ({ loaderData }) => (loaderData ? entryHead("projects", loaderData.slug) : {}),
    component: ProjectPage,
});

function ProjectPage() {
    const { slug } = Route.useLoaderData();
    return <EntryPage section="projects" slug={slug} />;
}

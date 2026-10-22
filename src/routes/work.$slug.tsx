import { createFileRoute, notFound } from "@tanstack/react-router";

import { EntryPage } from "@/components/general/entry-page";
import { entryHead, getEntry } from "@/lib/entries";

export const Route = createFileRoute("/work/$slug")({
    // Only the slug is loaded: it is serialized into the page. The entry is looked up again in the component.
    loader: ({ params }) => {
        const entry = getEntry("work", params.slug);
        if (!entry) throw notFound();
        return { slug: entry.slug };
    },
    head: ({ loaderData }) => (loaderData ? entryHead("work", loaderData.slug) : {}),
    component: WorkPage,
});

function WorkPage() {
    const { slug } = Route.useLoaderData();
    return <EntryPage section="work" slug={slug} />;
}

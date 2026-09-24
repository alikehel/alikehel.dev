import { createFileRoute } from "@tanstack/react-router";

import { Page } from "@/components/general/page";
import { mdxComponents } from "@/components/mdx-components";
import { resume } from "@/data/resume";
import { type Crumb, pageHead } from "@/lib/seo";

import Uses, { frontmatter } from "../../content/uses.mdx";

const { title, description } = frontmatter as { title: string; description: string };

// Breadcrumb trail for search engines (structured data only)
const breadcrumbs: Crumb[] = [
    { label: "Home", path: "/" },
    { label: title, path: "/uses" },
];

export const Route = createFileRoute("/uses")({
    head: () => pageHead({ path: "/uses", title: `${title} | ${resume.name}`, description, breadcrumbs }),
    component: UsesPage,
});

function UsesPage() {
    return (
        <Page back={{ href: "/", label: "Home" }} title={title} description={description}>
            <article className="prose max-w-none prose-invert prose-a:text-[#4177BD]">
                <Uses components={mdxComponents} />
            </article>
        </Page>
    );
}

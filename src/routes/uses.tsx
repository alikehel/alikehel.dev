import { createFileRoute } from "@tanstack/react-router";

import { Page } from "@/components/general/page";
import { mdxComponents } from "@/components/mdx-components";
import { resume } from "@/data/resume";
import { pageHead } from "@/lib/seo";

import Uses, { frontmatter } from "../../content/uses.mdx";

const { title, description } = frontmatter as { title: string; description: string };

export const Route = createFileRoute("/uses")({
    head: () => pageHead({ path: "/uses", title: `${title} | ${resume.name}`, description }),
    component: UsesPage,
});

function UsesPage() {
    return (
        <Page title={title} description={description}>
            <article className="prose max-w-none prose-invert prose-a:text-[#4177BD]">
                <Uses components={mdxComponents} />
            </article>
        </Page>
    );
}

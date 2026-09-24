import type { ReactNode } from "react";

import { ArrowLeft } from "lucide-react";

// Shell for content pages (blog, uses): a link back to the parent page, the heading, then the content
export function Page({
    back,
    title,
    description,
    meta,
    children,
}: {
    /** The parent page, e.g. { href: "/blog", label: "Blog" } */
    back: { href: string; label: string };
    title: string;
    description?: string;
    /** Extra line under the description, e.g. a date */
    meta?: ReactNode;
    children: ReactNode;
}) {
    return (
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 pt-16 pb-32 md:pt-28 md:pb-44">
            <header className="flex flex-col gap-3">
                <a
                    href={back.href}
                    className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-neutral-400 transition-colors hover:text-white"
                >
                    <ArrowLeft
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                    />
                    <span className="sr-only">Back to</span> {back.label}
                </a>
                <h1 className="text-4xl font-bold">{title}</h1>
                {description && <p className="text-xl opacity-80">{description}</p>}
                {meta}
            </header>
            {children}
        </main>
    );
}

import type { ReactNode } from "react";

import { resume } from "@/data/resume";

// Shell for content pages (blog, uses): same column as the home page, with a heading
export function Page({
    title,
    description,
    meta,
    children,
}: {
    title: string;
    description?: string;
    /** Extra line under the description, e.g. a date */
    meta?: ReactNode;
    children: ReactNode;
}) {
    return (
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 pt-16 pb-32 md:pt-28 md:pb-44">
            <header className="flex flex-col gap-3">
                <a href="/" className="w-fit text-sm font-semibold opacity-70 hover:opacity-100">
                    {resume.name}
                </a>
                <h1 className="text-4xl font-bold">{title}</h1>
                {description && <p className="text-xl opacity-80">{description}</p>}
                {meta}
            </header>
            {children}
        </main>
    );
}

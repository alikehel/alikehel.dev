import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface DockItem {
    title: string;
    icon: ReactNode;
    href: string;
    /** This link is the page being viewed */
    current?: boolean;
    /** Show the dot under the icon: the page being viewed, or its section (Blog on a post) */
    active?: boolean;
}

// The site's navigation: pages, a separator, then links out.
// The magnify effect, tooltips and the active dot are CSS-only (see `.dock-*` in globals.css).
export function FloatingDock({ pages, links }: { pages: DockItem[]; links: DockItem[] }) {
    return (
        // `dock` keeps it in place during page transitions
        <div className="dock pointer-events-auto flex h-14 items-end rounded-2xl bg-neutral-900 px-1.5 pb-2.5 md:h-16 md:px-2 md:pb-3">
            {pages.map((item) => (
                <DockLink key={item.title} item={item} />
            ))}
            {links.map((item, index) => (
                <DockLink key={item.title} item={item} separator={index === 0} />
            ))}
        </div>
    );
}

function DockLink({ item, separator = false }: { item: DockItem; separator?: boolean }) {
    return (
        // Each link's padding covers the space between icons, so the hover never drops while moving across
        <a
            href={item.href}
            aria-label={item.title}
            aria-current={item.current ? "page" : undefined}
            data-active={item.active ? "" : undefined}
            className={cn(
                "dock-item group relative flex h-full items-end",
                separator ? "dock-separator pr-1 pl-3 md:pr-2 md:pl-5" : "px-1 md:px-2",
            )}
        >
            <span className="dock-circle relative flex items-center justify-center rounded-full bg-neutral-800">
                <span className="pointer-events-none absolute -top-8 left-1/2 w-fit -translate-x-1/2 translate-y-2.5 rounded-md border border-neutral-900 bg-neutral-800 px-2 py-0.5 text-xs whitespace-pre text-white opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {item.title}
                </span>
                <span className="dock-icon flex items-center justify-center">{item.icon}</span>
            </span>
        </a>
    );
}

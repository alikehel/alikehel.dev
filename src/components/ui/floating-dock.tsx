import type { ReactNode } from "react";

interface DockItem {
    title: string;
    icon: ReactNode;
    href: string;
}

// The magnify effect, tooltips, and mobile menu are CSS-only (see `.dock-*` in globals.css)
export function FloatingDock({ items }: { items: DockItem[] }) {
    return (
        <>
            <div className="mx-auto hidden h-16 items-end rounded-2xl bg-neutral-900 px-2 pb-3 md:flex">
                {items.map((item) => (
                    // The link's padding fills the space between icons, so the hover never drops while moving across
                    <a
                        key={item.title}
                        href={item.href}
                        aria-label={item.title}
                        className="dock-item group flex h-full items-end px-2"
                    >
                        <span className="dock-circle relative flex items-center justify-center rounded-full bg-neutral-800">
                            <span className="pointer-events-none absolute -top-8 left-1/2 w-fit -translate-x-1/2 translate-y-2.5 rounded-md border border-neutral-900 bg-neutral-800 px-2 py-0.5 text-xs whitespace-pre text-white opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                                {item.title}
                            </span>
                            <span className="dock-icon flex items-center justify-center">{item.icon}</span>
                        </span>
                    </a>
                ))}
            </div>
            <div className="relative block md:hidden">
                <div id="dock-menu" popover="auto" className="dock-menu">
                    {items.map((item, index) => (
                        <a
                            key={item.title}
                            href={item.href}
                            aria-label={item.title}
                            title={item.title}
                            className="dock-menu-item flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900"
                            style={{ transitionDelay: `${(items.length - 1 - index) * 0.05}s` }}
                        >
                            <span className="h-4 w-4">{item.icon}</span>
                        </a>
                    ))}
                </div>
                <button
                    type="button"
                    popoverTarget="dock-menu"
                    aria-label="Toggle navigation menu"
                    title="Toggle navigation menu"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-5 w-5 text-neutral-400"
                    >
                        <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2" />
                        <path d="M4 9h16" />
                        <path d="M10 16l2 -2l2 2" />
                    </svg>
                </button>
            </div>
        </>
    );
}

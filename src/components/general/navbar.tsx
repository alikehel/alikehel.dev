import { useLocation } from "@tanstack/react-router";
import { House, NotebookPen, Wrench } from "lucide-react";

import { FloatingDock } from "@/components/ui/floating-dock";
import { resume } from "@/data/resume";

const iconClassName = "h-full w-full text-neutral-300";

const pages = [
    { title: "Home", href: "/", icon: <House className={iconClassName} /> },
    { title: "Blog", href: "/blog", icon: <NotebookPen className={iconClassName} /> },
    { title: "Uses", href: "/uses", icon: <Wrench className={iconClassName} /> },
];

const links = resume.contact.social.map((item) => ({
    title: item.name,
    href: item.url,
    icon: item.icon({ className: iconClassName }),
}));

export function Navbar() {
    const pathname = useLocation({ select: (location) => location.pathname });

    return (
        <nav
            aria-label="Main"
            className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center md:bottom-5"
        >
            <FloatingDock
                pages={pages.map((page) => ({
                    ...page,
                    current: pathname === page.href,
                    active:
                        page.href === "/"
                            ? pathname === "/"
                            : pathname === page.href || pathname.startsWith(`${page.href}/`),
                }))}
                links={links}
            />
        </nav>
    );
}

import { House, NotebookPen, Wrench } from "lucide-react";

import { FloatingDock } from "@/components/ui/floating-dock";
import { resume } from "@/data/resume";

const iconClassName = "h-full w-full text-neutral-300";

export function Navbar() {
    return (
        <nav className="fixed right-5 bottom-5 flex justify-center md:right-auto md:w-full">
            <FloatingDock
                items={[
                    { title: "Home", icon: <House className={iconClassName} />, href: "/" },
                    { title: "Blog", icon: <NotebookPen className={iconClassName} />, href: "/blog" },
                    { title: "Uses", icon: <Wrench className={iconClassName} />, href: "/uses" },
                    ...resume.contact.social.map((item) => ({
                        title: item.name,
                        icon: item.icon({ className: iconClassName }),
                        href: item.url,
                    })),
                ]}
            />
        </nav>
    );
}

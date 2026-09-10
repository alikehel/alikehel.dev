import { House } from "lucide-react";

import { FloatingDock } from "@/components/ui/floating-dock";
import { resume } from "@/data/resume";

const iconClassName = "h-full w-full text-neutral-300";

export function Navbar() {
    return (
        <nav className="fixed right-5 bottom-5 flex justify-center md:right-auto md:w-full">
            <FloatingDock
                items={[
                    { title: "Home", icon: <House className={iconClassName} />, href: "/" },
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

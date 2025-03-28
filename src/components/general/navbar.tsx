import { House } from "lucide-react";

import { resume } from "@/data/resume";

import { FloatingDock } from "../ui/floating-dock";

export function Navbar() {
    return (
        <nav className="fixed bottom-5 right-5 flex justify-center md:right-auto md:w-full">
            <FloatingDock
                items={[
                    {
                        title: "Home",
                        icon: <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
                        href: "/",
                    },
                    ...resume.contact.social.map((item) => ({
                        title: item.name,
                        icon: item.icon({
                            className: "h-full w-full text-neutral-500 dark:text-neutral-300",
                        }),
                        href: item.url,
                    })),
                ]}
            />
        </nav>
    );
}

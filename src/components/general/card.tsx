import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface CardProps {
    // children?: React.ReactNode;
    className?: string;
    logoUrl?: string;
    title: string;
    description?: string;
    href?: string;
    date?: string;
    links?: { type: string; href: string; icon: JSX.Element }[];
}

export function Card({ className, logoUrl, title, href, description, links, date }: CardProps) {
    const cardContent = () => {
        return (
            <>
                <div className="flex flex-row items-center gap-3">
                    <Image
                        src={logoUrl || ""}
                        alt={title}
                        width={180}
                        height={37}
                        className="border-5 h-16 w-16 rounded-xl border-stone-500 bg-white"
                    />
                    <div className="">
                        <div className="flex flex-row items-baseline gap-2">
                            <h3 className="text-xl">{title}</h3>
                            {links && (
                                <div className="flex flex-row items-center gap-3">
                                    {/* {links.map((link) => (
                                        <Link key={link.href} href={link.href}>
                                            {link.icon}
                                        </Link>
                                    ))} */}
                                </div>
                            )}
                        </div>
                        <p className="text-l opacity-80">{description}</p>
                        <div className="flex flex-row items-center gap-3"></div>
                    </div>
                </div>
                {date && <p className="text-l hidden w-64 text-end opacity-80 sm:block">{date}</p>}
            </>
        );
    };

    if (href) {
        return (
            <Link
                className={cn(
                    "flex cursor-pointer flex-row items-center justify-between rounded-xl py-2 transition-all duration-200 ease-in-out hover:bg-[#70707050] hover:px-4",
                    className,
                )}
                target="_blank"
                href={href || ""}
                aria-label={`${title} ${description ? `- ${description}` : ""}`}
                title={`${title} ${description ? `- ${description}` : ""}`}
            >
                {cardContent()}
            </Link>
        );
    }

    return (
        <div
            className={cn(
                "flex cursor-pointer flex-row items-center justify-between rounded-xl py-2 transition-all duration-200 ease-in-out hover:bg-[#70707050] hover:px-4",
                className,
            )}
        >
            {cardContent()}
        </div>
    );
}

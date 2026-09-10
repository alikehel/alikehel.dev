import { cn } from "@/lib/utils";

interface CardProps {
    className?: string;
    logoUrl?: string;
    title: string;
    description?: string;
    href?: string;
    date?: string;
}

export function Card({ className, logoUrl, title, href, description, date }: CardProps) {
    const label = description ? `${title} - ${description}` : title;
    const classes = cn(
        "flex flex-row items-center justify-between rounded-xl py-2 transition-all duration-200 ease-in-out hover:bg-[#70707050] hover:px-4",
        className,
    );

    const content = (
        <>
            <div className="flex flex-row items-center gap-3">
                {logoUrl && (
                    <img
                        src={logoUrl}
                        alt=""
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
                        className="h-16 w-16 shrink-0 rounded-xl bg-white"
                    />
                )}
                <div>
                    <h3 className="text-xl">{title}</h3>
                    {description && <p className="opacity-80">{description}</p>}
                </div>
            </div>
            {date && <p className="hidden w-64 shrink-0 text-end opacity-80 sm:block">{date}</p>}
        </>
    );

    if (href) {
        return (
            <a
                className={classes}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                aria-label={label}
                title={label}
            >
                {content}
            </a>
        );
    }

    return <div className={classes}>{content}</div>;
}

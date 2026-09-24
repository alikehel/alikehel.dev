import { TitleWithArrow } from "@/components/general/title-arrow";
import { cn } from "@/lib/utils";

interface CardProps {
    className?: string;
    logoUrl?: string;
    title: string;
    description?: string;
    href?: string;
    date?: string;
    /** Show a "Now" badge, e.g. on the current job */
    current?: boolean;
}

export function Card({ className, logoUrl, title, href, description, date, current }: CardProps) {
    // Links to other sites open in a new tab and get a diagonal arrow; links within the site get a straight one
    const external = href ? /^https?:/.test(href) : false;

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
                    <h3 className="text-xl">
                        {href ? <TitleWithArrow title={title} external={external} className="h-4 w-4" /> : title}
                    </h3>
                    {(description || current) && (
                        <p>
                            {description && <span className="opacity-80">{description}</span>}
                            {current && <NowBadge />}
                        </p>
                    )}
                </div>
            </div>
            {date && <p className="hidden w-64 shrink-0 text-end opacity-80 sm:block">{date}</p>}
        </>
    );

    // Padding stays constant (offset by the negative margin) so hovering only changes the background, not the layout
    const layout = "-mx-4 flex flex-row items-center justify-between rounded-xl px-4 py-2";

    if (href) {
        return (
            <a
                // Lifts a little on hover. The strip under it keeps the hover while the card is raised.
                className={cn(
                    layout,
                    "group relative transition duration-200 after:absolute after:inset-x-0 after:top-full after:h-1 hover:-translate-y-0.5 hover:bg-[#70707050]",
                    className,
                )}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {content}
                {external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
        );
    }

    // Cards without a link don't highlight or lift on hover, so they don't look clickable
    return <div className={cn(layout, className)}>{content}</div>;
}

function NowBadge() {
    return (
        <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 align-[0.1em] text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30 ring-inset">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Now
        </span>
    );
}

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

// A link title followed by an arrow. The arrow is kept on the same line as the title's last word.
export function TitleWithArrow({
    title,
    external = false,
    className,
}: {
    title: string;
    /** Links to other sites get a diagonal arrow */
    external?: boolean;
    /** Arrow size, e.g. "h-4 w-4" */
    className?: string;
}) {
    const words = title.split(" ");
    const last = words.pop();
    const arrowClassName = cn(
        "ml-1.5 inline-block align-[-0.05em] text-neutral-400 transition duration-200 group-hover:translate-x-0.5 group-hover:text-white",
        external && "group-hover:-translate-y-0.5",
        className,
    );

    return (
        <>
            {words.length > 0 && `${words.join(" ")} `}
            <span className="whitespace-nowrap">
                {last}
                {external ? (
                    <ArrowUpRight aria-hidden="true" className={arrowClassName} />
                ) : (
                    <ArrowRight aria-hidden="true" className={arrowClassName} />
                )}
            </span>
        </>
    );
}

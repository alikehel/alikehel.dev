import type { AnchorHTMLAttributes } from "react";

// Links to other sites open in a new tab and tell screen readers so; links within the site stay in this one.
// `link` gives them the animated underline.
function Link({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    const external = /^https?:/.test(href ?? "");
    return (
        <a
            href={href}
            className="link text-[#4177BD]"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            {...props}
        >
            {children}
            {external && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
    );
}

export const mdxComponents = { a: Link };

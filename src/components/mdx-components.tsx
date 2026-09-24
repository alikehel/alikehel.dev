import type { AnchorHTMLAttributes } from "react";

// Links to other sites open in a new tab; links within the site stay in this one.
// `link` gives them the animated underline.
function Link({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    const external = /^https?:/.test(href ?? "");
    return (
        <a
            href={href}
            className="link text-[#4177BD]"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            {...props}
        />
    );
}

export const mdxComponents = { a: Link };

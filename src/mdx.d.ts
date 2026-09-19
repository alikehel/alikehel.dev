declare module "*.mdx" {
    import type { ComponentType } from "react";

    /** Frontmatter exported by remark-mdx-frontmatter */
    export const frontmatter: Record<string, unknown>;

    const MDXContent: ComponentType<{ components?: Record<string, ComponentType<never>> }>;
    export default MDXContent;
}

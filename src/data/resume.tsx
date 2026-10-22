import { Icons } from "@/components/icons";

export interface EntryLink {
    label: string;
    /** Full URL for other sites, or a site-relative path */
    href: string;
}

/** A job, client, project or school. Each one has a card on the home page and its own page. */
export interface Entry {
    /** URL segment of its page, e.g. "talabatk" */
    slug: string;
    /** Company, client, project or school */
    title: string;
    /** Role or degree */
    subtitle?: string;
    logoUrl: string;
    start: string;
    /** "Present", a date, or left out when `start` says it all */
    end?: string;
    /** Employment type, e.g. "Full-time" or "Contract, part-time" */
    type?: string;
    location?: string;
    /** One line on what it is: the card's description and the first line of the page */
    summary: string;
    /** The same bullet points as the resume */
    highlights: string[];
    technologies: string[];
    links: EntryLink[];
}

export const resume = {
    name: "Ali Kehel",
    initials: "AK",
    title: "Software Engineer",
    url: "https://alikehel.dev/",
    location: "Cairo, Egypt",
    locationLink: "https://www.google.com/maps/place",
    /** Plain-text summary used for the meta description */
    summary:
        "Ali Kehel is a Software Engineer from Cairo, Egypt, who builds web applications with TypeScript, React and Node.js.",
    description: [
        "I'm a ",
        <strong key={"role"} className="font-bold text-[#4177BD]">
            Software Engineer
        </strong>,
        ". I build web apps with TypeScript, and I love watching ",
        <img
            key={"killua"}
            className="mr-0.5 inline-block max-h-[1.3rem] max-w-[1.3rem] rounded-full border-2 border-[#4177BD] bg-white object-cover"
            src={"/other/hxh.jpg"}
            // Decorative: the word next to it says what it is. Alt text here would end up in search snippets.
            alt=""
            width={64}
            height={64}
        />,
        <span key={"anime"} className="text-[#4177BD]">
            anime
        </span>,
        " and playing ",
        <img
            key={"solis"}
            className="mr-0.5 inline-block max-h-[1.3rem] max-w-[1.3rem] rounded-full border-2 border-[#4177BD] bg-white object-cover"
            src={"/other/r6s.jpg"}
            alt=""
            width={64}
            height={64}
        />,
        <span key={"games"} className="text-[#4177BD]">
            games
        </span>,
        ".",
    ],
    avatarUrl: "/me.webp",
    /** Skills by group, based on the projects I've worked on. The logos are in public/skills. */
    skills: [
        {
            group: "Languages",
            items: [
                { name: "TypeScript", logoUrl: "/skills/typescript.svg" },
                { name: "JavaScript", logoUrl: "/skills/javascript.svg" },
            ],
        },
        {
            group: "Frontend",
            items: [
                { name: "React.js", logoUrl: "/skills/reactjs.svg" },
                { name: "Next.js", logoUrl: "/skills/nextjs.svg" },
                { name: "TanStack", logoUrl: "/skills/tanstack.svg" },
                { name: "Tailwind CSS", logoUrl: "/skills/tailwindcss.svg" },
                { name: "shadcn/ui", logoUrl: "/skills/shadcnui.svg" },
            ],
        },
        {
            group: "Backend",
            items: [
                { name: "Node.js", logoUrl: "/skills/nodejs.svg" },
                { name: "Express", logoUrl: "/skills/express.svg" },
                { name: "Hono", logoUrl: "/skills/hono.svg" },
                { name: "Zod", logoUrl: "/skills/zod.svg" },
                { name: "Better Auth", logoUrl: "/skills/betterauth.svg" },
                { name: "Stripe", logoUrl: "/skills/stripe.svg" },
            ],
        },
        {
            group: "Databases",
            items: [
                { name: "MySQL", logoUrl: "/skills/mysql.svg" },
                { name: "PostgreSQL", logoUrl: "/skills/postgresql.svg" },
                { name: "SQLite", logoUrl: "/skills/sqlite.svg" },
                { name: "Sequelize", logoUrl: "/skills/sequelize.svg" },
                { name: "Drizzle", logoUrl: "/skills/drizzle.svg" },
                { name: "Prisma", logoUrl: "/skills/prisma.svg" },
            ],
        },
        {
            group: "Testing",
            items: [
                { name: "Vitest", logoUrl: "/skills/vitest.svg" },
                { name: "Playwright", logoUrl: "/skills/playwright.svg" },
            ],
        },
        {
            group: "DevOps",
            items: [
                { name: "Git", logoUrl: "/skills/git.svg" },
                { name: "GitHub Actions", logoUrl: "/skills/githubactions.svg" },
                { name: "Docker", logoUrl: "/skills/docker.svg" },
                { name: "Cloudflare", logoUrl: "/skills/cloudflare.svg" },
            ],
        },
    ],
    contact: {
        email: "ali.kehel.27.2@gmail.com",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/alikehel",
                icon: Icons.github,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/alikehel/",
                icon: Icons.linkedin,
            },
            {
                name: "Email",
                url: "mailto:ali.kehel.27.2@gmail.com",
                icon: Icons.email,
            },
            {
                name: "Resume",
                url: "https://bucket.alikehel.dev/Ali_Kehel_Resume.pdf",
                icon: Icons.fileText,
            },
        ],
    },
    work: [
        {
            slug: "ovarc",
            title: "Ovarc",
            subtitle: "Software Engineer",
            logoUrl: "/work/ovarc.webp",
            start: "Jan 2025",
            end: "Present",
            type: "Full-time",
            location: "Cairo, Egypt · Hybrid",
            summary: "Payroll, HR, benefits and company-incorporation platform for Egypt and the GCC.",
            highlights: [
                "Led the platform modernization: off end-of-life Node 16 to Node 24 and Express 5, an incremental JavaScript-to-TypeScript migration (1,000+ files, 86% today) with a restructure into core and feature modules, and Zod as the single source of truth for validation and generated OpenAPI docs.",
                "Built the payments stack on Stripe: transaction, log and invoice data model; webhooks for disputes, expired sessions and delayed settlement; ACH bank-account verification by micro-deposits with reminder jobs; Checkout subscriptions for the public salary calculator.",
                "Built the company-incorporation backend: application, ownership and capital steps, document review, dynamic government fees, a naming-compliance engine with Arabic and English normalization plus AI-assisted warnings (Gemini), and full Arabic localization.",
                "Implemented payroll rules: Egyptian income-tax and social-insurance updates, contractor taxes, employee terminations after a submitted payroll with refunds, recurring bonuses and deductions, auto-generated payroll cycles and a retrying exchange-rate job.",
                "Grew the test suite from almost nothing to 220 Vitest unit and integration files, writing about 73% of it, and built the end-to-end payroll journey in Playwright under a faked clock in Docker.",
                "Built the employee portal backend (registration, dashboard, leaves, payslips, benefits, HR requests with generated PDFs), admin impersonation with correct actor attribution, and presigned AWS S3 uploads with size and type limits.",
                "Shipped frontend features in the React 19 app (assets module, offboarding flow, auto-reload on deploys, accessibility fixes) and the marketing sites on Next.js 16.",
                "Authored 52% of backend commits across seven contributors; delivered 160+ stories in 36 two-week sprints.",
            ],
            technologies: [
                "TypeScript",
                "Node.js",
                "Express",
                "Sequelize",
                "MySQL",
                "Zod",
                "React.js",
                "Next.js",
                "Stripe",
                "AWS S3",
                "Vitest",
                "Playwright",
                "Docker",
                "GitHub Actions",
            ],
            links: [
                { label: "ovarc.io", href: "https://ovarc.io" },
                { label: "Ovarc on LinkedIn", href: "https://www.linkedin.com/company/ovarc" },
            ],
        },
    ],
    /** Client work, newest first */
    freelance: [
        {
            slug: "talabatk",
            title: "Talabatk",
            subtitle: "Software Engineer",
            logoUrl: "/work/talabatk.webp",
            start: "Feb 2026",
            end: "Present",
            type: "Contract, part-time",
            location: "Remote",
            summary:
                "Food-delivery platform in Palestine: about 100k authenticated requests a day, 80k+ orders to date, 6 cities.",
            highlights: [
                "Own the Express and Sequelize API on MySQL 8 (241 endpoints) and the React admin dashboard as the sole engineer, plus the DigitalOcean infrastructure, staging, migrations and database operations.",
                "Moved OTP generation from the mobile app to the server (hashed single-use codes with expiry, WhatsApp and SMS channels) behind a config-switch cutover, then added proxy-aware rate limits after an SMS flood.",
                "Rolled out authorization across 193 endpoints after a defacement incident: shipped in shadow mode, then enforced wave by wave once logs showed no legitimate traffic would be rejected.",
                "Added rotating refresh tokens with reuse detection and cut the hot-path session lookup from 163 ms to 41 ms per request, verified by a test that asserts the MySQL query plan.",
                "Built driver and vendor wallets with row locking, idempotency keys and one reconcile path after a double-spend; replaced three free-delivery mechanisms with one offers engine and redemption log.",
                "Started the test suite from zero (680+ cases with a real-MySQL integration harness) and rewrote logging into structured events shipped to OpenSearch with retention policies and dashboards.",
            ],
            technologies: [
                "JavaScript",
                "Node.js",
                "Express",
                "Sequelize",
                "MySQL",
                "Zod",
                "React.js",
                "OpenSearch",
                "DigitalOcean",
            ],
            links: [{ label: "talabatk.top", href: "https://talabatk.top" }],
        },
        {
            slug: "studygo",
            title: "StudyGo",
            subtitle: "Software Engineer",
            logoUrl: "/work/studygo.webp",
            start: "Apr 2026",
            end: "Aug 2026",
            type: "Contract, part-time",
            location: "Remote",
            summary: "Arabic-first learning marketplace for students, parents and teachers in Palestine.",
            highlights: [
                "Designed and built the platform alone in four months on Cloudflare Workers: a Hono and oRPC API (260 procedures) on D1 with Drizzle, five TanStack Start web apps, a shared roles and permissions package, and an OpenAPI spec consumed by the mobile apps.",
                "Integrated a regional card-payment gateway: checkout with HMAC verification, tokenization, recurring charges, refunds, reconciliation, wallets with full transaction history, and teacher payouts; centralized money units across five apps after a 100× undercharge.",
                "Built notifications on Durable Object WebSockets and Queues-backed Firebase push with a dead-letter queue, batching admin broadcasts to 5,000 recipients from 2,100 down to 77 subrequests to fit Workers limits.",
                "Shipped Google and Apple OAuth sign-in through Better Auth with native ID-token flows, account deletion to App Store policy, a streaming AI tutor on Workers AI with rate limits, and PII-redacted structured logging.",
            ],
            technologies: [
                "TypeScript",
                "Cloudflare Workers",
                "Hono",
                "oRPC",
                "Drizzle",
                "SQLite",
                "Better Auth",
                "TanStack",
                "Tailwind CSS",
                "shadcn/ui",
                "Firebase",
            ],
            links: [{ label: "studygo.info", href: "https://studygo.info" }],
        },
        {
            slug: "ejaza",
            title: "Ejaza",
            subtitle: "Software Engineer",
            logoUrl: "/work/ejaza.webp",
            start: "Jun 2025",
            end: "Jul 2025",
            type: "Contract, part-time",
            location: "Remote",
            summary: "Online learning platform in Egypt connecting Quran teachers with students.",
            highlights: [
                "In a team of five, set up the pnpm and Turborepo monorepo with CI and Railway deploys, the Hono server structure, Better Auth with four roles, and the teacher profile and verification flow, writing most of the server code.",
            ],
            technologies: [
                "TypeScript",
                "Node.js",
                "Hono",
                "Better Auth",
                "Drizzle",
                "PostgreSQL",
                "Turborepo",
                "GitHub Actions",
                "Railway",
            ],
            links: [],
        },
        {
            slug: "naslook",
            title: "Naslook",
            subtitle: "Software Engineer",
            logoUrl: "/work/naslook.webp",
            start: "Oct 2024",
            end: "Dec 2024",
            type: "Contract",
            location: "Remote",
            summary: "Marketplace for services, products and offers in Saudi Arabia.",
            highlights: [
                "Built the backend on Cloudflare Workers (Hono, D1, Drizzle, R2): 50 OpenAPI-documented endpoints, session auth with scrypt and OTP reset, a wallet with an atomically written transaction history, and a typed React and Mantine admin generated from the spec.",
            ],
            technologies: [
                "TypeScript",
                "Cloudflare Workers",
                "Hono",
                "Drizzle",
                "SQLite",
                "OpenAPI",
                "React.js",
                "TanStack",
                "Mantine",
            ],
            links: [],
        },
        {
            slug: "al-barq",
            title: "Al Barq",
            subtitle: "Software Engineer",
            logoUrl: "/work/albarq.webp",
            start: "Oct 2023",
            end: "Sep 2024",
            type: "Contract",
            location: "Remote",
            summary: "Courier and shipping platform for a logistics company in Iraq, with branches and drivers.",
            highlights: [
                "Replaced a legacy PHP system with a new TypeScript, Express, Prisma and PostgreSQL backend (160+ routes, Redis, Swagger, Docker) for a React web client and an Expo mobile app, with JWT auth and roles.",
            ],
            technologies: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "Swagger", "Docker"],
            links: [{ label: "Code on GitHub", href: "https://github.com/alikehel/delivery-company-api" }],
        },
    ],
    /** Same set and order as the resume */
    projects: [
        {
            slug: "alikehel-dev",
            title: "alikehel.dev",
            logoUrl: "/projects/alikehel-dev/logo.svg",
            start: "2024",
            end: "Present",
            summary:
                "This site: TanStack Start on Cloudflare Workers, prerendered with no client JavaScript, Lighthouse 100.",
            highlights: [
                "TanStack Start with file-based routes, prerendered at build time: every page is static HTML with its CSS inlined, and no JavaScript bundle ships to the browser.",
                "Served from Cloudflare Workers and deployed by Workers Builds on every push to main.",
                "A space theme done entirely in CSS: star layers tied to the scroll position, shooting stars, and view transitions between pages.",
                "Blog and uses pages written in MDX with build-time syntax highlighting, plus an RSS feed, a sitemap, Open Graph tags and JSON-LD.",
                "Lighthouse 100 in all four categories on mobile and desktop, with a total blocking time of 0 ms.",
            ],
            technologies: [
                "TypeScript",
                "React.js",
                "TanStack Start",
                "Tailwind CSS",
                "MDX",
                "Vite+",
                "Cloudflare Workers",
            ],
            links: [{ label: "Code on GitHub", href: "https://github.com/alikehel/alikehel.dev" }],
        },
        {
            slug: "active-courses",
            title: "Active Courses",
            logoUrl: "/projects/activecourses/logo.webp",
            start: "2023",
            end: "Present",
            summary: "The website of an Egyptian tech community on Discord; maintainer since 2023.",
            highlights: [
                "The website of Active Courses, an Egyptian tech community on Discord: a guide to the community, course and resource lists, roadmaps and onboarding docs, 70+ pages in all.",
                "Built with Docusaurus and MDX, with Algolia search and Giscus comments.",
                "Maintainer since August 2023: I review and merge the changes of the other five contributors.",
                "Moved the hosting from Netlify to Cloudflare Pages in 2026.",
            ],
            technologies: ["TypeScript", "React.js", "Docusaurus", "MDX", "Algolia", "Cloudflare Pages"],
            links: [
                { label: "activecourses.pages.dev", href: "https://activecourses.pages.dev" },
                { label: "Code on GitHub", href: "https://github.com/alikehel/activecourses" },
            ],
        },
        {
            slug: "cloud-education",
            title: "Cloud Education",
            subtitle: "Graduation project",
            logoUrl: "/projects/cloudeducation/logo.webp",
            start: "Jun 2023",
            summary: "Graduation project: a Node.js and PostgreSQL education platform API with AI-graded exams.",
            highlights: [
                "My graduation project at Benha University, in a team of four: an online education platform meant to replace offline school and university systems. I built the backend API.",
                "Multi-tenant: each university or school gets its own instance with its own admins, teachers and students.",
                "Courses with exams, chat, leaderboards and profile pages; exam durations are enforced, leaderboard points update on submission, and students are notified when exams are graded.",
                "AI features: essay answers graded against model answers, course reviews and comments screened for toxic language, and course content summarized.",
                "Node.js, Express and TypeScript on PostgreSQL with Prisma; JWT auth, Zod validation, S3 uploads and Swagger docs.",
            ],
            technologies: [
                "TypeScript",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Prisma",
                "Zod",
                "AWS S3",
                "Swagger",
                "OpenAI API",
            ],
            links: [
                {
                    label: "Code on GitHub",
                    href: "https://github.com/alikehel/bfcai-graduation-project-cloud-education-api",
                },
                {
                    label: "Demo on YouTube",
                    href: "https://youtube.com/playlist?list=PLzrcxuCFsyhCcLVWrTsY1RooZffVfrVHj",
                },
            ],
        },
        {
            slug: "disworse",
            title: "Disworse",
            logoUrl: "/projects/disworse/logo.webp",
            start: "2024",
            summary: "The frontend of a Discord clone, in a TypeScript monorepo with end-to-end type safety.",
            highlights: [
                "The web client of a Discord clone built in the open by the Active Courses community, with seven contributors. I wrote most of the frontend.",
                "A TypeScript monorepo (pnpm and Turborepo) with the types shared between the NestJS API and the React client, so a change on one side fails the build on the other.",
                "React with TanStack Router, Query and Form, Tailwind CSS, Biome and conventional commits.",
            ],
            technologies: [
                "TypeScript",
                "React.js",
                "TanStack Router",
                "TanStack Query",
                "TanStack Form",
                "Tailwind CSS",
                "Turborepo",
            ],
            links: [{ label: "Code on GitHub", href: "https://github.com/activecourses/disworse" }],
        },
    ],
    education: [
        {
            slug: "benha-university",
            title: "Benha University",
            subtitle: "Bachelor of Computer Science",
            logoUrl: "/edu/bfcai.webp",
            start: "Oct 2019",
            end: "Jun 2023",
            location: "Benha, Egypt",
            summary: "Faculty of Computers and Artificial Intelligence.",
            highlights: [
                "GPA 3.5/4.0 with honors.",
                "Web Committee Vice Head, IEEE Benha University Student Branch (2021–2022).",
                "Graduation project: Cloud Education, an education platform API with AI-graded exams.",
            ],
            technologies: [],
            links: [
                { label: "Cloud Education, the graduation project", href: "/projects/cloud-education" },
                { label: "fci.bu.edu.eg", href: "https://fci.bu.edu.eg/" },
            ],
        },
        {
            slug: "stem-high-school",
            title: "STEM High School for Boys",
            subtitle: "High school",
            logoUrl: "/edu/stem.webp",
            start: "2016",
            end: "2018",
            location: "6th of October, Egypt",
            summary: "Egypt's public high school for science, technology, engineering and mathematics.",
            highlights: [],
            technologies: [],
            links: [{ label: "stemegypt.net", href: "https://www.stemegypt.net/" }],
        },
        {
            slug: "udacity",
            title: "Udacity",
            subtitle: "Web Development Nanodegrees",
            logoUrl: "/edu/udacity.svg",
            start: "Feb 2022",
            end: "Nov 2022",
            location: "Online",
            summary: "Professional and Advanced Web Development Nanodegree programs.",
            highlights: [
                "Professional Web Development Nanodegree, February 2022.",
                "Advanced Web Development Nanodegree, November 2022.",
            ],
            technologies: [],
            links: [
                {
                    label: "Professional certificate",
                    href: "https://www.udacity.com/certificate/e/f9bfc0d0-6c91-11ec-b2b0-a7ab96e0a364",
                },
                {
                    label: "Advanced certificate",
                    href: "https://www.udacity.com/certificate/e/0ae80556-1364-11ed-bf90-dbde5b798c73",
                },
            ],
        },
    ],
} satisfies {
    work: Entry[];
    freelance: Entry[];
    projects: Entry[];
    education: Entry[];
    [key: string]: unknown;
};

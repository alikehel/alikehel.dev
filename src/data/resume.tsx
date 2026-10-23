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
    /** Bullet points for the entry's page; the resume keeps fewer */
    highlights: string[];
    technologies: string[];
    links: EntryLink[];
}

export const resume = {
    name: "Ali Kehel",
    title: "Software Engineer",
    url: "https://alikehel.dev/",
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
                "Led the platform modernization: the move off end-of-life Node 16 to Node 24 and Express 5, an incremental migration from JavaScript to TypeScript (1,000+ TypeScript files, 86% of source files) with a restructure into core and feature modules, and Zod as the standard for validation and generated OpenAPI docs.",
                "Built the payments stack on Stripe: transaction, log and invoice data model; webhooks for disputes, expired sessions and delayed settlement; ACH bank-account verification by micro-deposits with reminder jobs; Checkout payments for the public salary calculator's subscription plans.",
                "Built the company-incorporation backend: application, ownership and capital steps, document review, dynamic government fees, a naming-compliance engine with Arabic and English normalization plus AI-assisted warnings (Gemini), and full Arabic localization.",
                "Implemented payroll rules: Egyptian income-tax and social-insurance updates, contractor taxes, refunds when an employee is terminated after payroll is submitted, recurring bonuses and deductions, auto-generated payroll cycles and a retrying exchange-rate job.",
                "Grew the test suite from almost nothing to 220 Vitest unit and integration files, writing about 73% of it, and built the end-to-end payroll journey in Playwright under a faked clock in Docker.",
                "Built the employee portal backend (registration, dashboard, leaves, payslips, benefits, HR requests with generated PDFs), admin impersonation with correct actor attribution, and presigned AWS S3 uploads with size and type limits.",
                "Shipped frontend features in the React 19 app (assets module, offboarding flow, auto-reload on deploys, accessibility fixes) and the marketing sites on Next.js 16.",
                "Authored 52% of backend commits since January 2025; delivered 160+ stories in 36 two-week sprints.",
                "Moved the access token out of the response body into an HTTP-only cookie beside the refresh token, rotated both on every refresh, made revocation per session so a user can stay signed in on several devices, and added rate limiting across the API.",
                "HR features beyond payroll: the benefits module, onboarding through Ovarc with contract templates, CSV bulk employee import, expenses, a recurring-events calendar, purchase orders and a HubSpot sync.",
                "Pooled SMTP connections after the mail provider started throttling bulk sends.",
                "Engineering practice: ESLint, Prettier and Husky across the repo, unit and integration suites split with coverage reported on every pull request, and ovarc.io moved onto Cloudflare Workers through OpenNext with locale routing.",
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
                "Food-delivery platform in Palestine: about 100k authenticated requests a day, 100k+ orders to date, six cities.",
            highlights: [
                "As the sole backend engineer, own the Express and Sequelize API on MySQL 8 (240+ endpoints), the React admin dashboard, the DigitalOcean infrastructure, staging, migrations and database operations.",
                "Moved OTP generation from the mobile app to the server (hashed single-use codes with expiry, WhatsApp and SMS channels) behind a config-switch cutover, then added proxy-aware rate limits.",
                "Audited all 193 endpoints for authorization, locked down the most exposed routes first, and shipped guards for the rest in shadow mode, logging what each would reject so they can be enforced in waves.",
                "Added rotating refresh tokens with reuse detection and rewrote the session lookup that runs on every signed-in request, cutting database time per request from 163 ms to 41 ms; a test checks its query plan.",
                "Built driver and vendor wallets with row locking, idempotency keys and one reconcile path; replaced three free-delivery mechanisms with one offers engine and redemption log.",
                "Started the test suite from zero (680+ cases with a real-MySQL integration harness) and rewrote logging into structured events shipped to OpenSearch with retention policies and dashboards.",
                "Collapsed 338 per-category count subqueries on the restaurant menu endpoint into one grouped query, with its vendor filter passed as a bound parameter.",
                "Set up a staging environment cloned from production, and deploy-on-push releases that run migrations first.",
                "Product work across the apps: AI extraction of restaurant menus from photos, notification campaigns, driver shifts, account statements, and rebuilt admin dashboards.",
                "Work tracked in about 165 GitHub issues on the API and dashboard, and released through staging-to-main pull requests.",
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
                "Designed and built the backend and web apps alone in four months on Cloudflare Workers: a Hono and oRPC API (260 procedures) on D1 with Drizzle, five TanStack Start web apps, a shared roles and permissions package, and an OpenAPI spec for another developer's mobile apps.",
                "Integrated a regional card-payment gateway: checkout with HMAC verification, tokenization, recurring charges, refunds, reconciliation, wallets with full transaction history, and teacher payouts.",
                "Built notifications on Durable Object WebSockets and Queues-backed Firebase push with a dead-letter queue; batching cut a 700-recipient admin broadcast from 2,100 subrequests to 77 to fit Workers limits.",
                "Shipped Google and Apple OAuth sign-in through Better Auth with native ID-token flows, account deletion to App Store policy, a streaming AI tutor on Workers AI with rate limits, and PII-redacted structured logging.",
                "Data on D1 through Drizzle (43 tables, 51 migrations), presigned R2 uploads, KV, cron triggers and six Workers deployed by Workers Builds; the RPC calls, the REST API and the Scalar docs all come from one oRPC router.",
                "Right-to-left first: Tailwind CSS v4 and shadcn/ui primitives hardened for Arabic across the five TanStack Start apps, with Arabic translations of Better Auth's error messages.",
                "Tracked down two platform-level surprises. Apple sign-in failed because Workers freeze Date.now at module start, so the signed client secret carried an issue time of zero. A D1 table rebuild stopped halfway in production because PRAGMA foreign_keys only applies per connection, so D1 refused to drop a table that child rows still pointed to.",
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
                "In a team of five, added Turborepo, CI and Railway deploys to the pnpm monorepo, and set up the Hono server, Better Auth with four roles, and teacher profiles and verification, writing most of the server code.",
                "Five packages (server, admin, teacher, shared, shared-ui) with a GitHub Actions matrix that lints and type-checks each one on every pull request and runs the server tests, plus Dependabot and a Husky pre-commit hook that formats staged files.",
                "Hono server on Node with a typed handler factory and shared middleware, Zod request schemas, one TypeScript response type for every route, and an OpenAPI spec with Scalar docs generated from the routes.",
                "Better Auth with a shared permissions package: resource-and-action statements for the four roles, enforced by a typed auth middleware on the server.",
                "A Vitest harness that runs the API against PGlite, an in-memory Postgres, with the Drizzle migrations applied before each test.",
                "Teacher onboarding: profile completion that promotes an account to the teacher role, and the verification flow for approved teachers.",
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
                "Built the backend on Cloudflare Workers (Hono, D1, Drizzle, R2): 49 OpenAPI-documented endpoints, session auth with scrypt and OTP reset, a wallet with an atomically written transaction history, and a typed React and Mantine admin dashboard generated from the spec.",
                "Hono on Cloudflare Workers with D1 through Drizzle (12 tables, 28 migrations): every route is defined with Zod schemas that also produce the OpenAPI spec and Scalar docs, with structured request logs through hono-pino.",
                "Session auth with opaque tokens that expire after 30 days and renew when under 15 days remain, scrypt password hashing, and a password reset with a six-digit OTP that expires after five minutes.",
                "Wallet deposits, transfers and withdrawals, each written together with its transaction record in one atomic D1 batch, and a KYC upload of the ID card and a selfie to R2 that marks the account as pending verification.",
                "A React and Mantine admin dashboard on TanStack Router, Query and Form, with its API client, types and query hooks generated from the OpenAPI spec; an Arabic and English landing page on Docusaurus.",
                "Wrangler environments for dev, stage and prod, each with its own R2 bucket, and a GitHub Actions pipeline that lints, type-checks and deploys on every push to main.",
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
                "Replaced a legacy PHP system with a new TypeScript, Express, Prisma and PostgreSQL backend (100+ routes, Swagger, Docker) for a React web client and a mobile app, with JWT auth and roles.",
                "Modeled the business in 36 Prisma models: companies with branches, warehouses and locations, clients and stores, 11 employee roles from company manager to delivery agent, and orders with timelines, receipts and products.",
                "An order lifecycle with 12 statuses, from registration through the receiving and delivery agents to delivery, postponement, return or replacement, plus rule-based automatic status updates per branch and governorate on an hourly cron job.",
                "Reports per company, client, branch, warehouse, delivery agent and governorate, with PDFs rendered through Puppeteer and Handlebars templates, plus order receipts with barcodes and QR codes.",
                "Firebase push notifications for order status changes and for messages to everyone on an order, image uploads to DigitalOcean Spaces through the S3 API, and Swagger docs generated from the routes.",
                "Shipped on Railway from a two-stage Dockerfile that installs headless Chrome and an Arabic font for the PDFs, with Biome for linting and formatting.",
            ],
            technologies: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Firebase", "Swagger", "Docker"],
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
                "This site: TanStack Start on Cloudflare Workers, prerendered with no JavaScript bundle, Lighthouse 100.",
            highlights: [
                "TanStack Start with file-based routes, prerendered at build time: every page is static HTML with its CSS inlined, and no JavaScript bundle ships to the browser.",
                "Served from Cloudflare Workers and deployed by Workers Builds on every push to main.",
                "A space theme done entirely in CSS: star layers tied to the scroll position, shooting stars, and view transitions between pages.",
                "Blog and uses pages written in MDX with build-time syntax highlighting, plus an RSS feed, a sitemap, Open Graph tags and JSON-LD.",
                "Lighthouse 100 in all four categories on mobile and desktop, with a total blocking time of 0 ms.",
                "Every job, client, school and project has its own page, generated from one data file, with breadcrumb structured data and view transitions between the cards and the pages.",
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

            logoUrl: "/projects/cloudeducation/logo.webp",
            start: "Jun 2023",
            summary: "Graduation project: a Node.js and PostgreSQL education platform API with AI-graded exams.",
            highlights: [
                "My graduation project at Benha University, in a team of four: an online education platform meant to replace offline school and university systems. I built the backend API.",
                "Multi-tenant: each university or school gets its own instance with its own admins, teachers and students.",
                "Courses with exams, leaderboards and profile pages; exam durations are enforced, leaderboard points update on submission, and students are notified when exams are graded.",
                "AI features in the API: essay answers graded against model answers with GPT-3.5 through the OpenAI API, and calls to separate AI services on Azure that screen reviews, comments and exam answers for toxic language, rate reviews by sentiment and summarize course content.",
                "Node.js, Express and TypeScript on PostgreSQL with Prisma; JWT auth, Zod validation, S3 uploads and Swagger docs.",
                "Deployed the API on Railway, and a teammate built the React frontend against it. A demo playlist is on YouTube.",
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
            summary: "The frontend of a Discord clone, in a TypeScript monorepo with a NestJS GraphQL API.",
            highlights: [
                "The web client of a Discord clone built in the open by the Active Courses community, with seven contributors. I wrote most of the frontend.",
                "A TypeScript monorepo (pnpm and Turborepo): the NestJS API generates its GraphQL schema, and the React client types its queries against that schema with gql.tada.",
                "React with Tailwind CSS and TanStack Router, Query and Form.",
                "Docker Compose for the local Postgres, Biome for linting and formatting, and Husky with commitlint to enforce conventional commits.",
            ],
            technologies: [
                "TypeScript",
                "React.js",
                "GraphQL",
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
                "Coursework: data structures and algorithms, object-oriented programming, software engineering, operating systems, databases, networking and web development.",
            ],
            technologies: [
                "Data Structures",
                "Algorithms",
                "Object-Oriented Programming",
                "Software Engineering",
                "Operating Systems",
                "Databases",
                "Networking",
                "Web Development",
            ],
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
            summary: "Egypt's first STEM high school: a selective public boarding school in 6th of October City.",
            highlights: [
                "Opened in September 2011 with USAID support and a curriculum co-designed with the 21st Century Partnership for STEM Education in Philadelphia. Through a national exam, it admits about 150 students a year out of thousands of applicants.",
                "An integrated, project-based curriculum: physics, chemistry, biology, geology, mathematics and mechanics at honors level, each semester built around a theme, with learning outcomes mapped to the Next Generation Science Standards.",
                "A capstone project every semester, in teams, following the engineering design process on one of Egypt's grand challenges (energy, water, housing, agriculture, industry, communication); five completed projects are required for the diploma.",
                "Each capstone runs on written journals scored every few weeks, a prototype built in the school's Fab Lab, and a closing exhibition where a panel of university professors in science and engineering grades the work.",
                "Alongside the sciences: Arabic, English and a second language (German or French); social studies, civics and religion; one activity chosen from art, library or music; and mandatory sport.",
            ],
            technologies: [
                "Physics",
                "Chemistry",
                "Mathematics",
                "Research",
                "Engineering Design",
                "Presentation",
                "Teamwork",
            ],
            links: [
                { label: "stemegypt.net", href: "https://www.stemegypt.net/" },
                { label: "The academic program", href: "https://www.stemegypt.net/academics" },
            ],
        },
        {
            slug: "udacity",
            title: "Udacity",
            subtitle: "Web Development Nanodegrees",
            logoUrl: "/edu/udacity.svg",
            start: "Feb 2022",
            end: "Nov 2022",
            location: "Online",
            summary: "Professional Front-End and Advanced Full-Stack Web Development Nanodegree programs.",
            highlights: [
                "Professional Front-End Web Development Nanodegree, February 2022, through the egFWD initiative of Egypt's Ministry of Communications and Information Technology: HTML, CSS and JavaScript fundamentals, with a landing page and a weather journal app on Node and Express as projects.",
                "Advanced Full-Stack Web Development Nanodegree, November 2022, also through egFWD: Node.js and Express APIs in TypeScript with PostgreSQL and tests, with an image-processing API, a storefront backend and the Udagram deployment to AWS as projects.",
            ],
            technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS"],
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

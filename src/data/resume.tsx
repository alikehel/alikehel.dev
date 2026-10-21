import { Icons } from "@/components/icons";

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
                { name: "React.JS", logoUrl: "/skills/reactjs.svg" },
                { name: "Next.JS", logoUrl: "/skills/nextjs.svg" },
                { name: "TanStack", logoUrl: "/skills/tanstack.svg" },
                { name: "Tailwind CSS", logoUrl: "/skills/tailwindcss.svg" },
                { name: "shadcn/ui", logoUrl: "/skills/shadcnui.svg" },
            ],
        },
        {
            group: "Backend",
            items: [
                { name: "Node.JS", logoUrl: "/skills/nodejs.svg" },
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
    education: [
        {
            University: "Benha University",
            Faculty: "Faculty of Computer and Artificial Intelligence",
            href: "https://fci.bu.edu.eg/",
            start: "2019",
            end: "2023",
            gpa: "3.50",
            location: "Benha, Egypt",
            logoUrl: "/edu/bfcai.webp",
        },
        {
            University: "STEM School",
            Faculty: "High School for Boys",
            href: "https://www.stemegypt.net/",
            start: "2016",
            end: "2018",
            gpa: "",
            location: "6th of October, Egypt",
            logoUrl: "/edu/stem.webp",
        },
    ],
    work: [
        {
            company: "Ovarc",
            href: "https://www.linkedin.com/company/ovarc",
            location: "Cairo, Egypt",
            title: "Software Engineer",
            logoUrl: "/work/ovarc.webp",
            start: "Jan 2025",
            end: "Present",
        },
    ],
    /** Client work, newest first */
    freelance: [
        {
            client: "Talabatk",
            href: "https://talabatk.top",
            description:
                "Food-delivery platform in Palestine. I own its API and admin dashboard as the sole engineer, and built its landing page.",
            logoUrl: "/work/talabatk.webp",
            start: "Feb 2026",
            end: "Present",
        },
        {
            client: "StudyGo",
            href: "https://studygo.info",
            description:
                "Arabic-first learning marketplace for students, parents and teachers in Palestine, which I built alone on Cloudflare Workers.",
            logoUrl: "/work/studygo.webp",
            start: "Apr 2026",
            end: "Aug 2026",
        },
        {
            client: "Ejaza",
            href: "",
            description:
                "Online learning platform in Egypt connecting Quran teachers with students. In a team of five, I set up the monorepo, CI and deploys, the server structure and auth, and the teacher verification flow.",
            logoUrl: "/work/ejaza.webp",
            start: "Jun 2025",
            end: "Jul 2025",
        },
        {
            client: "Naslook",
            href: "",
            description:
                "Marketplace for services, products and offers in Saudi Arabia. I built its API, admin dashboard and landing page.",
            logoUrl: "/work/naslook.webp",
            start: "Oct 2024",
            end: "Dec 2024",
        },
        {
            client: "Al Barq",
            href: "",
            description:
                "Courier and shipping platform for a logistics company in Iraq. I replaced its legacy PHP system with a new TypeScript backend for the web client and mobile app.",
            logoUrl: "/work/albarq.webp",
            start: "Oct 2023",
            end: "Sep 2024",
        },
    ],
    projects: [
        {
            title: "Cloud Education (Graduation Project)",
            href: "https://github.com/alikehel/bfcai-graduation-project-cloud-education-api",
            date: "2023",
            description: "Graduation project: a Node.js and PostgreSQL education platform API with AI-graded exams.",
            technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL"],
            logoUrl: "/projects/cloudeducation/logo.webp",
        },
        {
            title: "alikehel.dev",
            href: "https://github.com/alikehel/alikehel.dev",
            date: "2026",
            description:
                "This site: TanStack Start on Cloudflare Workers, prerendered with no client JavaScript, Lighthouse 100.",
            technologies: ["TypeScript", "React.js", "TanStack Start", "Tailwind CSS", "Cloudflare Workers"],
            logoUrl: "/projects/alikehel-dev/logo.svg",
        },
        {
            title: "Active Courses",
            href: "https://github.com/alikehel/activecourses",
            date: "2023",
            description: "The website of an Egyptian tech community on Discord; maintainer since 2023.",
            technologies: ["TypeScript", "MDX", "React.js", "Docusaurus"],
            logoUrl: "/projects/activecourses/logo.webp",
        },
    ],
} as const;

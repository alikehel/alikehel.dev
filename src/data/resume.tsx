import { Icons } from "@/components/icons";

export const resume = {
    name: "Ali Kehel",
    initials: "AK",
    title: "Software Engineer",
    url: "https://alikehel.dev/",
    location: "Egypt",
    locationLink: "https://www.google.com/maps/place",
    /** Plain-text summary used for the meta description */
    summary:
        "Ali Kehel is a Software Engineer from Egypt who builds web applications with TypeScript, React, and Node.js.",
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
    skills: [
        {
            name: "JavaScript",
            logoUrl: "/skills/javascript.svg",
        },
        {
            name: "TypeScript",
            logoUrl: "/skills/typescript.svg",
        },
        {
            name: "Node.JS",
            logoUrl: "/skills/nodejs.svg",
        },
        {
            name: "React.JS",
            logoUrl: "/skills/reactjs.svg",
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
            company: "OVARC",
            href: "https://www.linkedin.com/company/ovarc",
            location: "Maadi, Cairo, Egypt",
            title: "Software Engineer",
            logoUrl: "/work/ovarc.webp",
            start: "Jan 2025",
            end: "Present",
        },
        {
            company: "Naslook",
            href: "",
            location: "Remotely",
            title: "Software Engineer (Freelance)",
            logoUrl: "/work/naslook.webp",
            start: "Oct 2024",
            end: "Dec 2024",
        },
        {
            company: "Al Barq",
            href: "",
            location: "Remotely",
            title: "Software Engineer (Freelance)",
            logoUrl: "/work/albarq.webp",
            start: "Oct 2023",
            end: "Sep 2024",
        },
    ],
    projects: [
        {
            title: "Disworse",
            href: "https://github.com/activecourses/disworse",
            date: "2024",
            description: "The frontend of a Discord clone, in a TypeScript monorepo with end-to-end type safety.",
            technologies: [
                "TypeScript",
                "React.js",
                "Tanstack Query",
                "Tanstack Router",
                "Tanstack Form",
                "Tailwind CSS",
            ],
            logoUrl: "/projects/disworse/logo.webp",
        },
        {
            title: "Active Courses",
            href: "https://github.com/alikehel/activecourses",
            date: "2023",
            description: "The website for Active Courses, the biggest Egyptian tech community on Discord.",
            technologies: ["TypeScript", "MDX", "React.js", "Docusaurus"],
            logoUrl: "/projects/activecourses/logo.webp",
        },
        {
            title: "Cloud Education (Graduation Project)",
            href: "https://github.com/alikehel/bfcai-graduation-project-cloud-education-api",
            date: "2023",
            description: "A complete education system in the cloud, built to replace the traditional offline school.",
            technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL"],
            logoUrl: "/projects/cloudeducation/logo.webp",
        },
    ],
} as const;

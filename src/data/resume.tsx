import Image from "next/image";

import { Icons } from "@/components/icons";

export const resume = {
    name: "Ali Kehel",
    initials: "AK",
    title: "Software Engineer",
    url: "https://www.alikehel.dev/",
    location: "Egypt",
    locationLink: "https://www.google.com/maps/place",
    description: [
        "I'm a Software Engineer. I build web applications with TypeScript. I also love watching ",
        <Image
            key={"killua"}
            className="mr-0.5 inline-block max-h-[1.3rem] max-w-[1.3rem] rounded-full border-2 dark:border-[#30588C] bg-white"
            src={"/other/hxh.jpg"}
            alt={"Killua Zoldyck from Hunter x Hunter"}
            width={140}
            height={140}
            priority
        />,
        <span key={"anime"} className="dark:text-[#30588C]">
            anime
        </span>,
        " and playing ",
        <Image
            key={"solis"}
            className="mr-0.5 inline-block max-h-[1.3rem] max-w-[1.3rem] rounded-full border-2 dark:border-[#30588C] bg-white"
            src={"/other/r6s.jpg"}
            alt={"Solis from Rainbow Six Siege"}
            width={140}
            height={140}
            priority
        />,
        <span key={"anime"} className="dark:text-[#30588C]">
            games
        </span>,
        " in my free time.",
    ],
    avatarUrl: "/me.jpg",
    skills: [
        {
            name: "JavaScript",
            description: "",
            logoUrl: "/skills/javascript.svg",
        },
        {
            name: "TypeScript",
            description: "",
            logoUrl: "/skills/typescript.svg",
        },
        {
            name: "Node.JS",
            description: ".",
            logoUrl: "/skills/nodejs.svg",
        },
        {
            name: "React.JS",
            description: "",
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
                navbar: true,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/alikehel/",
                icon: Icons.linkedin,
                navbar: true,
            },
            {
                name: "Email",
                url: "mailto: ali.kehel.27.2@gmail.com",
                icon: Icons.email,
                navbar: true,
            },
            {
                name: "Resume",
                url: "https://bucket.alikehel.dev/Ali_Kehel_Resume_Without_Number.pdf",
                icon: Icons.fileText,
                navbar: true,
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
            logoUrl: "/edu/bfcai.png",
        },
        {
            University: "STEM School",
            Faculty: "High School for Boys",
            href: "https://www.stemegypt.net/",
            start: "2016",
            end: "2018",
            gpa: "",
            location: "6th of October, Egypt",
            logoUrl: "/edu/stem.png",
        },
    ],
    work: [
        {
            company: "OVARC",
            href: "https://www.linkedin.com/company/ovarc",
            badges: [],
            location: "Maadi, Cairo, Egypt",
            title: "Software Engineer",
            logoUrl: "/work/ovarc.jpg",
            start: "Jan 2025",
            end: "Present",
            description: "",
        },
        {
            company: "Naslook",
            href: "",
            badges: [],
            location: "Remotely",
            title: "Software Engineer (Freelance)",
            logoUrl: "/work/naslook.png",
            start: "Oct 2024",
            end: "Dec 2024",
            description: "",
        },
        {
            company: "Al Barq",
            href: "",
            badges: [],
            location: "Remotely",
            title: "Software Engineer (Freelance)",
            logoUrl: "/work/albarq.png",
            start: "Oct 2023",
            end: "Sep 2024",
            description: "",
        },
    ],
    projects: [
        {
            title: "Disworse",
            href: "https://github.com/activecourses/disworse",
            date: "2024",
            active: false,
            description: "Discord clone frontend with monorepo architecture for typescript fullstack typesafety.",
            technologies: [
                "TypeScript",
                "React.js",
                "Tanstack Query",
                "Tanstack Router",
                "Tanstack Form",
                "Tailwind CSS",
            ],
            links: [
                {
                    type: "Github",
                    href: "https://github.com/activecourses/disworse",
                    icon: <Icons.github className="size-4" />,
                },
            ],
            logoUrl: "/projects/disworse/logo.png",
            images: [],
            video: "",
        },
        {
            title: "Active Courses",
            href: "https://github.com/alikehel/activecourses",
            date: "2023",
            active: false,
            description: "The website for Active Courses discord server (Biggest egyption tech community on discord).",
            technologies: ["TypeScript", "MDX", "React.js", "Docusaurus"],
            links: [
                {
                    type: "Github",
                    href: "https://github.com/alikehel/activecourses",
                    icon: <Icons.github className="size-4" />,
                },
            ],
            logoUrl: "/projects/activecourses/logo.jpg",
            images: [],
            video: "",
        },
        {
            title: "Cloud Education (Graduation Project)",
            href: "https://github.com/alikehel/bfcai-graduation-project-cloud-education-api",
            date: "2023",
            active: false,
            description:
                "A Complete Education System on the cloud that aims to be a replacement for the traditional offline school.",
            technologies: ["TypeScript", "Node.js", "Express.js", "PostgreSQL"],
            links: [
                {
                    type: "Github",
                    href: "https://github.com/alikehel/bfcai-graduation-project-cloud-education-api",
                    icon: <Icons.github className="size-4" />,
                },
            ],
            logoUrl: "/projects/cloudeducation/logo.png",
            images: [],
            video: "",
        },
    ],
} as const;

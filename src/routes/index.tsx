import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Card } from "@/components/general/card";
import SparklesText from "@/components/ui/sparkles-text";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { resume } from "@/data/resume";
import { formatDate, posts } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
    head: () => pageHead({ path: "/", title: `${resume.name} | ${resume.title}`, description: resume.summary }),
    component: Home,
});

const socialUrl = (name: string) => resume.contact.social.find((item) => item.name === name)?.url;
const githubUrl = socialUrl("GitHub");
const linkedinUrl = socialUrl("LinkedIn");
const emailUrl = socialUrl("Email");

function Home() {
    return (
        // `relative z-10` keeps the content above Jinx's monkey, which sits in the corner behind it
        <main className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col gap-16 px-6 pt-16 pb-32 md:pt-36 md:pb-44">
            {/* Hero */}
            <section className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-col gap-3 md:max-w-[75%]">
                    <h1 className="sr-only">
                        {resume.name}, {resume.title}
                    </h1>
                    <div aria-hidden="true">
                        <SparklesText sparklesCount={5} seed={1} className="text-4xl font-bold">
                            <TypewriterEffect
                                className="m-[-3px] text-left text-4xl font-bold"
                                words={[
                                    { text: "Hi," },
                                    { text: "I'm" },
                                    ...resume.name.split(" ").map((text) => ({ text, className: "text-[#4177BD]" })),
                                ]}
                            />
                        </SparklesText>
                    </div>
                    <p className="text-2xl">{resume.description}</p>
                </div>
                {/* shrink-0 keeps the photo's size: without it, the text next to it squeezed it to a sliver on tablets */}
                <div className="relative h-[170px] w-[223px] shrink-0">
                    <img
                        className="h-full w-full animate-morph border-2 object-cover"
                        src={resume.avatarUrl}
                        alt={resume.name + "'s Photo"}
                        width={223}
                        height={170}
                        fetchPriority="high"
                    />
                </div>
            </section>
            {/* Skills */}
            <section className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="flex flex-row flex-wrap gap-6">
                    {resume.skills.map((skill) => (
                        <span key={skill.name} className="flex flex-row items-center gap-1 rounded-xl text-white">
                            <img
                                src={skill.logoUrl}
                                alt=""
                                width={32}
                                height={32}
                                loading="lazy"
                                decoding="async"
                                className="mr-1 h-8 w-8 rounded-xl"
                            />
                            {skill.name}
                        </span>
                    ))}
                </div>
            </section>
            {/* Work Experience */}
            <section className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="flex flex-col gap-2">
                    {resume.work.map((job) => (
                        <Card
                            key={job.title + job.company}
                            logoUrl={job.logoUrl}
                            title={job.title}
                            description={job.company}
                            href={job.href}
                            date={`${job.start} - ${job.end}`}
                            current={job.end === "Present"}
                        />
                    ))}
                </div>
            </section>
            {/* Education */}
            <section className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">Education</h2>
                <div className="flex flex-col gap-2">
                    {resume.education.map((edu) => (
                        <Card
                            key={edu.University}
                            logoUrl={edu.logoUrl}
                            title={edu.University}
                            description={edu.Faculty}
                            href={edu.href}
                            date={`${edu.start} - ${edu.end}`}
                        />
                    ))}
                </div>
            </section>
            {/* Projects */}
            <section className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">Projects</h2>
                <div className="flex flex-col gap-2">
                    {resume.projects.map((project) => (
                        <Card
                            key={project.title}
                            logoUrl={project.logoUrl}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            date={project.date}
                        />
                    ))}
                </div>
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link group inline-flex w-fit items-center gap-1.5 text-[#4177BD]"
                >
                    More on GitHub
                    <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                </a>
            </section>
            {/* Writing */}
            {posts.length > 0 && (
                <section className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold">Writing</h2>
                    <div className="flex flex-col gap-2">
                        {posts.slice(0, 3).map((post) => (
                            <Card
                                key={post.slug}
                                title={post.title}
                                description={post.description}
                                href={`/blog/${post.slug}`}
                                date={formatDate(post.date)}
                            />
                        ))}
                    </div>
                    <a href="/blog" className="link group inline-flex w-fit items-center gap-1.5 text-[#4177BD]">
                        All posts
                        <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        />
                    </a>
                </section>
            )}
            {/* Contact */}
            <section className="flex flex-col gap-8 text-center">
                <SparklesText sparklesCount={5} seed={2} className="text-6xl font-bold">
                    <h2 className="self-center text-6xl font-bold">Say hi</h2>
                </SparklesText>
                <p className="text-2xl">
                    Have a project in mind, a role to fill, or just want to talk about anime? Message me on{" "}
                    <a className="link text-[#4177BD]" href={linkedinUrl}>
                        LinkedIn
                    </a>{" "}
                    or send me an{" "}
                    <a className="link text-[#4177BD]" href={emailUrl}>
                        email
                    </a>
                    . I&apos;m always open to new opportunities and collaborations.
                </p>
            </section>
        </main>
    );
}

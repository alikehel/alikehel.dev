import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Card } from "@/components/general/card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import SparklesText from "@/components/ui/sparkles-text";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { resume } from "@/data/resume";

export default function Home() {
    return (
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-16 px-6 py-16 md:pb-44 md:pt-36">
            {/* Hero */}
            <section className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-col gap-3">
                    <SparklesText sparklesCount={5} className="text-4xl font-bold">
                        <TypewriterEffect
                            className="m-[-3px] text-left text-4xl font-bold"
                            words={[
                                { text: "Hi,", className: "font-bold text-4xl" },
                                { text: "I'm", className: "font-bold text-4xl" },
                                ...resume.name.split(" ").map((v) => {
                                    return { text: v, className: "dark:text-red-900 font-bold text-4xl" };
                                }),
                            ]}
                        />
                    </SparklesText>
                    <p className="text-2xl">{resume.description}</p>
                </div>
                <div className="relative w-[223px] h-[170px]">
                    <Image
                        className="animate-morph border-2 border-opacity-50"
                        src={resume.avatarUrl}
                        alt={resume.name + "'s Photo"}
                        // width={140}
                        // height={140}
                        priority
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>
            {/* Skills */}
            <section className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="flex flex-row flex-wrap gap-6">
                    {resume.skills.map((skill) => (
                        <span
                            key={skill.name}
                            className="flex cursor-pointer flex-row items-center gap-1 rounded-xl text-white"
                        >
                            <Image
                                src={skill.logoUrl}
                                alt={skill.name}
                                width={180}
                                height={37}
                                className="border-5 mr-1 h-8 w-8 rounded-xl border-stone-500"
                            />
                            {skill.name}
                        </span>
                    ))}
                </div>
            </section>
            {/* Work Experience */}
            <section className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">Work Experience</h2>
                <div className="flex flex-col gap-2">
                    {resume.work.map((job) => (
                        <Card
                            key={job.title + job.company}
                            logoUrl={job.logoUrl}
                            title={job.title}
                            description={job.company}
                            href={job.href}
                            date={`${job.start} - ${job.end}`}
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
                        <FollowerPointerCard
                            key={project.title}
                            title={
                                <div className="flex flex-row gap-4">
                                    {project.video ? (
                                        <Image
                                            unoptimized
                                            src={project.video}
                                            alt={project.title}
                                            width={180}
                                            height={37}
                                            className="border-5 h-96 rounded-xl border-stone-500"
                                        />
                                    ) : project.images ? (
                                        project.images.map((image) => (
                                            <Image
                                                key={image}
                                                src={image}
                                                alt={project.title}
                                                width={180}
                                                height={37}
                                                className="border-5 h-96 rounded-xl border-stone-500"
                                            />
                                        ))
                                    ) : null}
                                </div>
                            }
                        >
                            <Card
                                logoUrl={project.logoUrl}
                                title={project.title}
                                description={project.description}
                                href={project.href}
                                date={project.date}
                                links={project.links.map((link) => ({ ...link, icon: React.cloneElement(link.icon) }))}
                            />
                        </FollowerPointerCard>
                    ))}
                </div>
            </section>
            {/* Contact */}
            <section className="flex flex-col gap-8 text-center">
                <SparklesText sparklesCount={5}>
                    <h2 className="self-center text-6xl font-bold">Contact</h2>
                </SparklesText>
                <p className="text-2xl">
                    Feel free to contact me at{" "}
                    <Link className="underline dark:text-red-900" href={`${resume.contact.social[1].url}`}>
                        LinkedIn
                    </Link>
                    . I&apos;m always open to new opportunities and collaborations.
                </p>
            </section>
        </main>
    );
}

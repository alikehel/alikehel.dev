import { resume } from "@/data/resume";

type Skill = (typeof resume.skills)[number]["items"][number];

// The skills, one row per group with a small label in front (above the row on phones)
export function Skills() {
    return (
        <div className="flex flex-col gap-5">
            {resume.skills.map((group) => (
                <div key={group.group} className="flex flex-col gap-2.5 sm:flex-row sm:gap-6">
                    <h3 className="shrink-0 text-xs font-semibold tracking-widest text-neutral-400 uppercase sm:w-28 sm:pt-1.5">
                        {group.group}
                    </h3>
                    <ul className="flex flex-wrap gap-x-5 gap-y-3">
                        {group.items.map((skill) => (
                            <SkillItem key={skill.name} skill={skill} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

function SkillItem({ skill }: { skill: Skill }) {
    return (
        <li className="flex items-center gap-2">
            <img
                src={skill.logoUrl}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
                className="h-7 w-7 rounded-lg"
            />
            {skill.name}
        </li>
    );
}

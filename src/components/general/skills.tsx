import { resume } from "@/data/resume";

type Skill = (typeof resume.skills)[number]["items"][number];

// The skills, one row per group with a small label in front (above the row on phones).
// Sized so each group fits on one line on desktop.
export function Skills() {
    return (
        <div className="flex flex-col gap-5">
            {resume.skills.map((group) => (
                <div key={group.group} className="flex flex-col gap-2.5 sm:flex-row sm:gap-5">
                    <h3 className="shrink-0 text-xs font-semibold tracking-widest text-neutral-400 uppercase sm:w-22 sm:pt-1">
                        {group.group}
                    </h3>
                    <ul className="flex flex-wrap gap-x-3 gap-y-3">
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
        <li className="flex items-center gap-1.5 text-sm">
            <img
                src={skill.logoUrl}
                alt=""
                width={24}
                height={24}
                loading="lazy"
                decoding="async"
                className="h-6 w-6 rounded-md"
            />
            {skill.name}
        </li>
    );
}

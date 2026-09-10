import { cn } from "@/lib/utils";

interface Word {
    text: string;
    className?: string;
}

export function TypewriterEffect({ words, className }: { words: Word[]; className?: string }) {
    // Index of each word's first character, used to stagger the per-character animation
    const starts: number[] = [];
    let total = 0;
    for (const word of words) {
        starts.push(total);
        total += word.text.length;
    }

    return (
        <div className={className}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block">
                    {word.text.split("").map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className={cn("typewriter-char", word.className)}
                            style={{ animationDelay: `${(starts[wordIndex] + charIndex) * 0.1}s` }}
                        >
                            {char}
                        </span>
                    ))}
                    &nbsp;
                </span>
            ))}
        </div>
    );
}

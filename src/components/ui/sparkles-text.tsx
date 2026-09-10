import type { CSSProperties, ReactNode } from "react";

interface SparklesTextProps {
    children?: ReactNode;
    className?: string;
    sparklesCount?: number;
    /** Seed for the sparkle layout, so each instance looks different but renders the same every time */
    seed?: number;
    colors?: {
        first: string;
        second: string;
    };
}

const defaultColors = { first: "#A63F8A", second: "#732959" };

// mulberry32
function createRandom(seed: number) {
    let state = seed;
    return () => {
        state = (state + 0x6d2b79f5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function createSparkles(count: number, seed: number, colors: SparklesTextProps["colors"] & object) {
    const random = createRandom(seed);
    const percent = () => `${(random() * 100).toFixed(1)}%`;

    return Array.from({ length: count }, () => ({
        style: {
            "--sparkle-color": random() > 0.5 ? colors.first : colors.second,
            "--x1": percent(),
            "--y1": percent(),
            "--x2": percent(),
            "--y2": percent(),
            "--x3": percent(),
            "--y3": percent(),
            "--hop": `${(3 + random()) * 3}s`,
        } as CSSProperties,
        iconStyle: {
            "--scale": (0.3 + random()).toFixed(2),
            animationDelay: `${(random() * 2).toFixed(2)}s`,
        } as CSSProperties,
    }));
}

export default function SparklesText({
    children,
    className,
    sparklesCount = 10,
    seed = 1,
    colors = defaultColors,
}: SparklesTextProps) {
    const sparkles = createSparkles(sparklesCount, seed, colors);

    return (
        <div className={className}>
            <div className="relative inline-block">
                {sparkles.map((sparkle, index) => (
                    <span key={index} aria-hidden="true" className="sparkle" style={sparkle.style}>
                        <span style={sparkle.iconStyle} />
                    </span>
                ))}
                {children}
            </div>
        </div>
    );
}

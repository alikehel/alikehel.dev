import type { Metadata } from "next";
import Image from "next/image";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/components/general/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { resume } from "@/data/resume";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: resume.name + " – " + resume.title,
    description: resume.name + "'s personal website",
    openGraph: {
        images: [{ url: "/banner.jpg" }],
    },
    icons: ["/favicon.ico"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                    <Navbar />
                    <div className="bg-animation -z-10 w-3/12 overflow-hidden opacity-70">
                        <div id="stars-1"></div>
                        <div id="stars2-1"></div>
                        <div id="stars3-1"></div>
                        <div id="stars4-1"></div>
                    </div>
                    <div className="bg-animation left-1/4 -z-10 w-3/12 overflow-hidden opacity-70">
                        <div id="stars-2"></div>
                        <div id="stars2-2"></div>
                        <div id="stars3-2"></div>
                        <div id="stars4-2"></div>
                    </div>
                    <div className="bg-animation left-2/4 -z-10 w-3/12 overflow-hidden opacity-70">
                        <div id="stars-3"></div>
                        <div id="stars2-3"></div>
                        <div id="stars3-3"></div>
                        <div id="stars4-3"></div>
                    </div>
                    <div className="bg-animation left-3/4 -z-10 w-3/12 overflow-hidden opacity-70">
                        <div id="stars-4"></div>
                        <div id="stars2-4"></div>
                        <div id="stars3-4"></div>
                        <div id="stars4-4"></div>
                    </div>
                    <Image
                        src="/jinx-monkey.png"
                        alt="Jinx Monkey"
                        width={100}
                        height={100}
                        className="relative bottom-5 left-5 -z-50 opacity-80 md:fixed md:left-auto md:right-5"
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}

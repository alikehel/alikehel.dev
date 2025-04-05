import type { Metadata } from "next";
import Image from "next/image";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/components/general/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { resume } from "@/data/resume";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: resume.name,
    description: resume.name + "'s personal website",
    openGraph: {
        images: [{ url: "/banner.jpg" }],
    },
    icons: ["/favicon.svg"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    {children}
                    <Analytics />
                    <SpeedInsights />
                    <Navbar />
                    <div className="bg-animation -z-10 overflow-hidden">
                        <div id="stars"></div>
                        <div id="stars2"></div>
                        <div id="stars3"></div>
                        <div id="stars4"></div>
                    </div>
                    <div className="bg-animation -z-10 overflow-hidden rotate-180">
                        <div id="stars"></div>
                        <div id="stars2"></div>
                        <div id="stars3"></div>
                        <div id="stars4"></div>
                    </div>
                    <Image src="/jinx-monkey.png" alt="Jinx Monkey" width={150} height={150} className="fixed bottom-5 right-5 -z-50" />
                </ThemeProvider>
            </body>
        </html>
    );
}

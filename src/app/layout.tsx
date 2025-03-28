import type { Metadata } from "next";

import { Navbar } from "@/components/general/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/styles/globals.css";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
    title: resume.name,
    description: resume.name + "'s personal website",
    openGraph: {
        images: [{ url: "/me.jpg" }],
    },
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
                    <Navbar />
                    <div className="bg-animation -z-10 overflow-hidden">
                        <div id="stars"></div>
                        <div id="stars2"></div>
                        <div id="stars3"></div>
                        <div id="stars4"></div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

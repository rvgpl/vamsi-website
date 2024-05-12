import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/site.config";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const OpenSansFont = Open_Sans({ weight: ['400', '700'] , subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s  | ${siteConfig.siteTitle}`,
    default: siteConfig.siteTitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OpenSansFont.className}>
        <ThemeProvider attribute="class">
          <main className="mx-auto min-h-screen max-w-screen-md">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

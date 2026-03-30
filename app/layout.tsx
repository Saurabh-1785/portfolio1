import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurabh Chauhan",
  description:
    "Explore the portfolio of Saurabh Chauhan — featuring web apps, coding projects, and a passion for learning new technologies.",
  keywords: "Saurabh Chauhan, portfolio, web developer",
  authors: [{ name: "Saurabh Chauhan" }],
  icons: { icon: "/favicon.png" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t||'dark')}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-page text-foreground font-sans leading-relaxed">
        <Header />
        <main className="mt-8 md:mt-20 min-h-[calc(100vh-80px)] pb-10">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

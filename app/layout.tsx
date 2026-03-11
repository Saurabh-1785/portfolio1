import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurabh Chauhan",
  description:
    "Explore the portfolio of Saurabh Chauhan — featuring web apps, coding projects, and a passion for learning new technologies.",
  keywords: "Saurabh Chauhan, portfolio, web developer",
  authors: [{ name: "Saurabh Chauhan" }],
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}

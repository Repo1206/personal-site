/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import "../globals.css";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio Site",
  description: "Generated by Next + sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //get all of our pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-green-600 via-teal-500 to-sky-600 bg-clip-text text-transparent text-lg font-bold"
          >
            My Projects
          </Link>
          <div className="flex items-center gap-5 text-sm text-cyan-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}

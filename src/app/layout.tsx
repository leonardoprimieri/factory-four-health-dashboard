import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Factory Four Api Dashboard",
  description:
    "A dashboard for monitoring the Factory Four API endpoints health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-center text-white p-12 bg-gray-900">
          <h1 className="text-4xl font-bold text-center">
            Factory Four Api Dashboard 🚀
          </h1>
          <p className="mt-3">
            This is a dashboard for monitoring the Factory Four API endpoints
            health
          </p>
        </header>
        {children}
      </body>
    </html>
  );
}

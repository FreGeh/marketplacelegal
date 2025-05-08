import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import MainNav from "@/components/navigation/MainNav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legal-AI Marketplace",
  description: "Discover, compare and deploy AI tools for legal workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body className="min-h-screen flex flex-col bg-background">
          {/* Header */}
          <header className="container mx-auto px-5">
            <MainNav />
          </header>

          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Footer (optional) */}
          <footer className="border-t py-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Frederick Gehm
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
// app/layout.tsx
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import MainNav from "@/components/navigation/MainNav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://marketplacelegal.vercel.app"),
  title: "Legal-AI Marketplace",
  description: "Discover, compare and deploy AI tools for legal workflows.",
  openGraph: {
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body className="bg-background flex min-h-screen flex-col">
          <header className="container mx-auto px-5">
            <MainNav />
          </header>
          <main className="flex-1">{children}</main>
          <footer className="text-muted-foreground border-t py-8 text-center text-sm">
            © {new Date().getFullYear()} Frederick Gehm
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}

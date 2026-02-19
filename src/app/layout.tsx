import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav, Sidebar } from "@/components/Navigation";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrescribeUs",
  description: "Mobile-first clinic management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-50`}>
          <header className="fixed top-0 right-0 p-4 z-50">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </header>
          <SignedOut>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">PrescribeUs</h1>
                <p className="text-gray-600">Clinic Management System</p>
                <SignInButton mode="modal">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                    Sign In to Continue
                  </button>
                </SignInButton>
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 pb-20 md:pb-0 md:ml-64">
                <div className="max-w-4xl mx-auto p-4">
                  {children}
                </div>
              </main>
            </div>
            <BottomNav />
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}

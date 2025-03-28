import "@/app/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import { ToastSonner } from "@/components/ui/sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaDash",
  description: "Generated by AppStoneLab",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body className="bg-gray-400 font-plus-jakarta text-sm/[22px] font-normal text-gray antialiased flex h-screen overflow-hidden">
        <ThemeProvider>
          {/* Sidebar NexaDash */}
          <Sidebar />

          <div className="flex flex-col flex-1 w-full">
            {/* Header NexaDash */}
            <Header />

            {/* Main content */}
            <main className="p-6 flex-1 overflow-y-auto">{children}</main>

            {/* Notifications */}
            <Toaster />
            <ToastSonner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

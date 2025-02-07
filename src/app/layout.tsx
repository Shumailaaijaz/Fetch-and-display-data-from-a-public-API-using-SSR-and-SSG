import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientRootLayout from "@/components/ClientRootLayout"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my professional portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ClientRootLayout>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        </ClientRootLayout>
        
      </body>
    </html>
  )
}


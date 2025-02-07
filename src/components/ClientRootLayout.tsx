"use client"

import type React from "react"
import { AuthProvider } from "@/app/context/AuthContext"
import ClientHeader from "@/components/ClientHeader"

interface ClientRootLayoutProps {
  children: React.ReactNode
}

const ClientRootLayout: React.FC<ClientRootLayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ClientHeader />
      {children}
    </AuthProvider>
  )
}

export default ClientRootLayout


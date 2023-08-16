import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
      {children}
    </div>
  )
}

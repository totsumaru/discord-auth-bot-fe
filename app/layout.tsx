import React from "react";
import "./globals.css"

export const metadata = {
  title: 'Auth bot',
  description: 'Discordの複雑な権限を、ダッシュボードで一括で管理できるサービスです。まずはbotを導入してスタートしてください。',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="h-full bg-white">
    <body className="h-full">
    {children}
    </body>
    </html>
  )
}

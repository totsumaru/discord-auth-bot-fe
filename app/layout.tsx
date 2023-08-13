import React from "react";
import "./globals.css"
import {Noto_Sans_JP} from 'next/font/google';

export const metadata = {
  title: 'Auth bot',
  description: 'Discordの複雑な権限を、ダッシュボードで一括で管理できるサービスです。まずはbotを導入してスタートしてください。',
}

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="h-full bg-white">
    <body className={`h-full ${noto.className}`}>
    {children}
    </body>
    </html>
  )
}

import React from "react";
import LoginButton from "@/components/button/LoginButton";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import "../globals.css"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({cookies})
  const {data: {user}} = await supabase.auth.getUser()

  return (
    <>
      <LoginButton userId={user?.id || ""}/>
      {children}
    </>
  )
}

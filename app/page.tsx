import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import {cookies} from 'next/headers'
import LoginButton from "@/components/button/LoginButton";

export default async function Index() {
  const supabase = createServerComponentClient({cookies})
  const {data: {user}} = await supabase.auth.getUser()

  return (
    <LoginButton userId={user?.id || ""}/>
  )
}

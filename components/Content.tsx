"use client"

import {useState} from "react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

type Props = {
  userId: string
}

export default function Content({userId}: Props) {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(userId);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      setUser(session?.user.id || "")
    } else if (event == 'SIGNED_OUT') {
      setUser("")
    }
  })

  return (
    <>
    </>
  )
}
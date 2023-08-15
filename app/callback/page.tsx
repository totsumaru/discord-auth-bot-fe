"use client"

import {useRouter} from "next/navigation";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import SimpleHeader from "@/components/nav/SimpleHeader";
import Spinner from "@/components/loading/Spinner";

export default function Index() {
  const supabase = createClientComponentClient()
  const router = useRouter()

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      router.push("/dashboard")
    }
  });

  return (
    <>
      <SimpleHeader/>
      <Spinner/>
      <div className="flex flex-col items-center">
        <p className="mt-10 mb-5 text-center">Loading...</p>
      </div>
    </>
  )
}
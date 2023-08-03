"use client"

import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {useEffect, useState} from "react";
import axios from 'axios';

export default function ReqButton() {
  const supabase = createClientComponentClient()
  const [token, setToken] = useState<string | undefined>()

  useEffect(() => {
    const init = async () => {
      const {data, error} = await supabase.auth.getSession()
      if (error) {
        console.error("session error")
      }

      setToken(data.session?.access_token)
    }
    init()
  }, [])

  const handler = async () => {
    const res = await axios.get('http://localhost:8080/api/login', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(res.data)
  }

  return (
    <>
      <button
        type="button"
        className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        onClick={handler}
      >
        バックエンドにリクエストを送る
      </button>
    </>
  )
}
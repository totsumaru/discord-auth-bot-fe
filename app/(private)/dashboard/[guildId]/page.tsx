"use client"

import NavigationBar from "@/components/nav/NavigationBar";
import React, {useEffect, useState} from "react";
import useUserStore from "@/store/user";
import axios from "axios";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {role} from "@/app/(private)/dashboard/[guildId]/backend_res";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import RolesTable from "@/components/table/RolesTable";

const navigation = [
  {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
  {name: 'Team', href: '#', icon: UsersIcon, current: false},
  {name: 'Projects', href: '#', icon: FolderIcon, current: false},
  {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
  {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
  {name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
]
const teams = [
  {id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false},
  {id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false},
  {id: 3, name: 'Workcation', href: '#', initial: 'W', current: false},
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Index({
  params: {guildId}
}: {
  params: { guildId: string }
}) {
  const supabase = createClientComponentClient()
  const store = useUserStore()
  const [roles, setRoles] = useState<role[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    store.initialize()
  }, [])

  useEffect(() => {
    // backendからサーバー全体のロールの権限を取得します
    supabase.auth.getSession().then(({data: {session}}) => {
      const url = `${process.env.NEXT_PUBLIC_BE_URL!}/api/server?server_id=${guildId}`
      axios.get(url, {
        headers: {
          "Authorization": `Bearer ${session?.access_token}`
        }
      }).then((res) => {
        setRoles(res.data.roles)
      }).catch((e) => {
        console.log(e)
      })
    })
  }, [store.loginUserId])

  return (
    <>
      <div className="min-h-screen bg-gradient_1 bg-cover bg-center">
        <NavigationBar tabVisible={true}/>
        <RolesTable roles={roles}/>
      </div>
    </>
  )
}
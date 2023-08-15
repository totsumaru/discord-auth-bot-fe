"use client"

import React from "react";
import {Cog6ToothIcon} from "@heroicons/react/24/solid";

export default function DashboardSettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-400 my-2 pt-2 pb-4 px-2 rounded-md sm:max-w-xl">
      <p className="text-xs mb-2 text-white">
        <Cog6ToothIcon className="h-4 w-4 inline mr-0.5 pb-0.5"/>
        表示
      </p>
      {children}
    </div>
  )
}

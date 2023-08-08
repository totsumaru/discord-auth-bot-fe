"use client"

import React from "react";

export default function DashboardSettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-400 my-2 pt-2 pb-4 px-2 rounded-md sm:max-w-xl">
      <p className="text-xs mb-2 text-white">表示設定</p>
      {children}
    </div>
  )
}

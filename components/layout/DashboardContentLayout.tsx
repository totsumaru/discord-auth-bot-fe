import React from "react";

export default function DashboardContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-4 mt-6 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

"use client"

import { UserButton } from "@clerk/nextjs"

type DashboardHeaderProps = {
  name: string
}

export function DashboardHeader({ name }: DashboardHeaderProps) {
  return (
    <div className="space-y-3 text-center">
      <div className="flex items-center justify-center gap-2">
        <UserButton />
        <p className="text-sm text-muted-foreground">{name}</p>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight">
        welcome to calc pilot
      </h1>
      <p className="max-w-xl mx-auto text-sm text-muted-foreground">
        Your first-year calculus cockpit. Choose how you want to practice today,
        manage your Clerk account identity, and keep your explanations sharp, {name}.
      </p>
    </div>
  )
}



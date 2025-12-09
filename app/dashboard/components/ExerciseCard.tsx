import Link from "next/link"
import type { ComponentType, SVGProps } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ExerciseCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  href: string
  cta?: string
}

export function ExerciseCard({
  icon: Icon,
  title,
  description,
  href,
  cta = "Start",
}: ExerciseCardProps) {
  return (
    <Card>
      <CardHeader className="items-center space-y-2">
        <Icon className="size-6 mx-auto" />
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pb-4 flex justify-center">
        <Button size="sm" variant="outline" asChild>
          <Link href={href}>
            {cta}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export type { ExerciseCardProps }



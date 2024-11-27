import { TriangleAlert } from "lucide-react"
import { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface PostAtentionProps {
  children?: ReactNode
  type: "warning" | "danger" | "default"
}

export function PostAtention({
  children,
  type = "default",
  ...props
}: PostAtentionProps) {
  return (
    <div
      className={cn("flex w-full gap-3 rounded border bg-muted/70 p-1", {
        "border-red-500 bg-red-100": type === "danger",
        "border-yellow-500 bg-yellow-100": type === "warning",
      })}
      {...props}
    >
      <TriangleAlert className="" />
      <div className="flex w-full flex-col items-start justify-start">
        <span className="block">Atenção</span>
        <span className="block text-sm">{children}</span>
      </div>
    </div>
  )
}

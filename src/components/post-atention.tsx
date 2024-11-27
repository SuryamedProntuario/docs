import { CircleAlert, CircleX, TriangleAlert } from "lucide-react"
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
      className={cn("flex w-full gap-3 rounded border bg-muted/50 p-4", {
        "border-red-300 bg-red-100": type === "danger",
        "border-yellow-300 bg-yellow-100": type === "warning",
      })}
      {...props}
    >
      {type === "default" && <CircleAlert className="" />}
      {type === "warning" && <TriangleAlert className="text-yellow-500" />}
      {type === "danger" && <CircleX className="text-red-500" />}

      <div className="flex w-full flex-col items-start justify-start">
        <span
          className={cn("mb-2 text-sm font-semibold", {
            "text-red-500": type === "danger",
            "text-yellow-500": type === "warning",
          })}
          {...props}
        >
          Atenção
        </span>
        <span
          className={cn("text-sm font-medium", {
            "text-red-500": type === "danger",
            "text-yellow-500": type === "warning",
          })}
          {...props}
        >
          {children}
        </span>
      </div>
    </div>
  )
}

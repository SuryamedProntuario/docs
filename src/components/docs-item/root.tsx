import { ReactNode } from "react"

interface DocsItemRootProps {
  children: ReactNode
}

export function DocsItemRoot({ children }: DocsItemRootProps) {
  return <li className="flex flex-col">{children}</li>
}

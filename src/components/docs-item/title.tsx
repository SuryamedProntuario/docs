import { ReactNode } from "react"

interface DocsItemTitleProps {
  children: ReactNode
}

export function DocsItemTitle({ children }: DocsItemTitleProps) {
  return <h3 className="mb-1 font-medium">{children}</h3>
}

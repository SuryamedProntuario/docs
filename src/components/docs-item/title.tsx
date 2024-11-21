import { ReactNode } from "react"

interface DocsItemTitleProps  {
  children: ReactNode 
}

export function DocsItemTitle ({children}: DocsItemTitleProps) {
  return (
    <h3 className="font-medium mb-1 ">{children}</h3>
  )
}
import { ReactNode } from "react"

interface DocsItemListProps {
  children: ReactNode
}

export function DocsItemList({ children }: DocsItemListProps) {
  return <ul className="flex flex-col gap-3 border-l pl-2">{children}</ul>
}

import Link from "next/link";
import { ReactNode } from "react";

interface DocsItemListProps {
  children: ReactNode
}

export function DocsItemList ({children}: DocsItemListProps) {
  return (
    <ul className="pl-2 border-l flex flex-col gap-3">
      {children}
  </ul>
  )
}
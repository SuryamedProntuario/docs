import Link from "next/link"

interface DocsItemLinkProps {
  title: string
  link: string
}

export function DocsItemLink({ title, link }: DocsItemLinkProps) {
  return (
    <li className="flex">
      <Link
        className="w-full py-1 text-sm text-muted-foreground transition-all hover:text-foreground"
        href={link}
      >
        {title}
      </Link>
    </li>
  )
}

import Link from "next/link";

interface DocsItemLinkProps {
  title: string
  link: string
}

export  function DocsItemLink ({title, link}:DocsItemLinkProps) {
  return (
    <li className="flex"> 
    <Link className="text-sm text-muted-foreground hover:text-foreground transition-all py-1 w-full" href={link}>
      {title}
    </Link>
  </li>
  )
}
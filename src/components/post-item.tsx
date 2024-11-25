import { format } from "date-fns"
import { Calendar } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export interface PostItemInterface {
  slug: string
  title: string
  description?: string
  date: string
}

export function PostItem({
  date,
  slug,
  title,
  description,
}: PostItemInterface) {
  return (
    <article className="flex flex-col gap-2 rounded-lg border-b px-3 py-3 transition-colors hover:bg-muted/80">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        <Link href={slug}>{title}</Link>
      </h2>
      <div className="max-w-none text-slate-800 dark:text-slate-300">
        {description}
      </div>
      <div className="flex w-full flex-col items-start justify-start">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-1 text-sm font-medium text-slate-800 dark:text-slate-200">
            <Calendar className="size-4" />
            <time dateTime={date}>{format(date, "dd/MM/yyyy")}</time>
          </dd>
        </dl>
        <Button className="mt-4 p-0" asChild variant={"link"}>
          <Link href={slug}>Leia mais</Link>
        </Button>
      </div>
    </article>
  )
}

import { format } from "date-fns"
import { Link as LinkLucide } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MDXContent } from "@/components/mdx-components"
import { Button } from "@/components/ui/button"
import { posts } from "#site/content"

export const metadata: Metadata = {
  title: "Suryamed",
}

async function getPostFromParams(params: any) {
  // Verifica se params ou params.slug é undefined
  if (!params?.slug || params.slug.length === 0) {
    return null
  }

  const slug = params.slug.join("/")
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

export async function generateStaticParams() {
  return posts
    .filter((post) => post.slugAsParams)
    .map((post) => ({ slug: post.slugAsParams.split("/") }))
}

export default async function PostPage({ params }: any) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <>
      <div className="flex w-full max-w-2xl flex-col gap-24 px-8">
        <div className="flex w-full flex-col items-start justify-start">
          <h1 className="text-4xl font-bold tracking-tighter text-primary">
            {post.title}
          </h1>
          {post.description ? (
            <p className="text-sm font-semibold italic text-primary/70">
              {post.description}
            </p>
          ) : null}
          <span className="mt-4 text-xs font-bold text-primary">
            Atualizado em:{" "}
            <time dateTime={post.date}>{format(post.date, "dd/MM/yyyy")}</time>
          </span>
          <Button variant={"link"} className="gap-2 p-0">
            <Link href="/docs">Voltar para o inicio</Link>
            <LinkLucide className="size-4" />
          </Button>
          <div className="my-4 h-0.5 w-full rounded-full bg-muted" />
          <div className="prose w-full space-y-4 text-foreground prose-headings:text-foreground prose-p:text-foreground prose-a:underline prose-blockquote:text-foreground prose-strong:font-bold prose-strong:text-foreground">
            <MDXContent code={post.body} />
          </div>
        </div>
      </div>
    </>
  )
}

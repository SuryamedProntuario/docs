import { format } from "date-fns"
import { Link as LinkLucide } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { MDXContent } from "@/components/mdx-components"
import { Button } from "@/components/ui/button"
import { posts } from "#site/content"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export const metadata: Metadata = {
  title: "Suryamed",
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params.slug.join("/")
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <>
      <div className="flex w-full max-w-4xl flex-col gap-24 px-8">
        <div className="flex w-full flex-col items-start justify-start">
          <h1 className="text-4xl font-bold tracking-tighter">{post.title}</h1>
          {post.description ? (
            <p className="italic">{post.description}</p>
          ) : null}
          <span className="mt-4 text-sm font-bold">
            Atualizado em:{" "}
            <time dateTime={post.date}>{format(post.date, "dd/MM/yyyy")}</time>
          </span>
          <Button variant={"link"} className="gap-2 p-0">
            <Link href="/docs">Voltar para o inicio</Link>
            <LinkLucide className="size-4" />
          </Button>
          <div className="my-4 h-0.5 w-full rounded-full bg-muted" />
          <div className="prose prose-headings:text-foreground prose-p:text-foreground prose-a:underline prose-blockquote:text-foreground prose-strong:font-bold prose-strong:text-foreground w-full text-foreground">
            <MDXContent code={post.body} />
          </div>
        </div>
      </div>
    </>
  )
}

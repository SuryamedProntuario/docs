import { Metadata } from "next"

import { PostItem } from "@/components/post-item"
import { sortPosts } from "@/lib/utils"
import { posts } from "#site/content"

export const metadata: Metadata = {
  title: "Blog | Desenvolvedor Fullstack",
}

export default async function Docs() {
  const sortedPosts = sortPosts(
    posts.filter(
      (post) =>
        post.published &&
        post.slug !== "docs/politica-de-privacidade" &&
        post.slug !== "docs/termos-e-condicoes",
    ),
  )
  const displayPosts = sortedPosts

  return (
    <div className="flex w-full max-w-4xl flex-col gap-24 lg:px-8">
      <div className="flex w-full flex-col items-start justify-start">
        <h1 className="text-2xl font-bold tracking-tighter text-primary lg:text-5xl">
          Começando com SuryaMED
        </h1>
        <div className="w-full">
          <span className="text-base font-semibold tracking-tighter text-primary lg:ml-4 lg:text-xl">
            Seu prontuário online integrado com Inteligência Artificial.
          </span>
          <hr className="mb-8 mt-4" />

          <h2 className="mb-5 text-xl font-bold">
            Percorra sem perder tempo por todo conteúdo.
          </h2>

          {displayPosts?.length > 0 ? (
            <ul className="flex w-full flex-col gap-6">
              {displayPosts.map((post) => {
                const { title, slug, date, description } = post

                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      title={title}
                      date={date}
                      description={description}
                    />
                  </li>
                )
              })}
            </ul>
          ) : (
            <span>Não encontramos nenhum post ainda...</span>
          )}
        </div>
      </div>
    </div>
  )
}

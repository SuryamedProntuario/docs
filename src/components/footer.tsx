import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8">
      <div className="flex w-full flex-col items-center justify-between gap-7 lg:flex-row">
        <Link href="/">
          <Image
            width={36}
            height={36}
            alt=""
            src="/static/logotipo_suryamed_pequeno.png"
          />
        </Link>
        <nav className="flex w-full max-w-[300px] justify-between gap-2">
          <div>
            <h3 className="text-xs font-semibold uppercase text-muted-foreground">
              Geral
            </h3>
            <ul>
              <li>
                <Link
                  className="text-xs font-normal"
                  href="/docs/politica-de-privacidade"
                >
                  Documentação
                </Link>
              </li>
              <li>
                <Link
                  className="text-xs font-normal"
                  href="/docs/politica-de-privacidade"
                >
                  Nosso site
                </Link>
              </li>
              <li>
                <a
                  className="text-xs font-normal"
                  href="https://app.suryamed.com.br"
                >
                  Acessar prontuário médico
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-muted-foreground">
              Legal
            </h3>
            <ul>
              <li>
                <Link
                  className="text-xs font-normal"
                  href="/docs/politica-de-privacidade"
                >
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link
                  className="text-xs font-normal"
                  href="/docs/politica-de-privacidade"
                >
                  Termos de serviço
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
        <span className="text-xs font-semibold text-muted-foreground">
          © 2024 SuryaMED
        </span>

        <div className="flex w-full max-w-[200px] justify-between">
          <a href={siteConfig.links.instagram} target="_blank">
            <Instagram className="size-5 text-muted-foreground" />
          </a>
          <a href={siteConfig.links.twitter} target="_blank">
            <Twitter className="size-5 text-muted-foreground" />
          </a>
          <a href={siteConfig.links.youtube} target="_blank">
            <Youtube className="size-5 text-muted-foreground" />
          </a>
          <a href={siteConfig.links.linkedin} target="_blank">
            <Linkedin className="size-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  )
}

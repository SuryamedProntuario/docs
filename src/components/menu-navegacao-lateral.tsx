import Link from "next/link"

import { DocsItem } from "./docs-item"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"

export function MenuNavegacaoLateral() {
  return (
    <div className="sticky top-[100px] w-[284px] shrink bg-background">
      <div className="mb-6 flex flex-col gap-2 px-2">
        <div className="flex w-full flex-col gap-2">
          <Button asChild variant={"default"} className="w-full">
            <a href="https://app.suryamed.com.br" target="_blank">
              Atenda já!
            </a>
          </Button>
          <Button asChild variant={"secondary"} className="w-full">
            <Link href="/docs">Inicio</Link>
          </Button>
        </div>
      </div>

      <ScrollArea
        type="always"
        className="h-[calc(100vh-260px)] overflow-y-auto"
      >
        <ul className="relative flex flex-col gap-6 px-2">
          <DocsItem.Root>
            <DocsItem.Title>Paciente</DocsItem.Title>
            <DocsItem.List>
              <DocsItem.Link title="Novo paciente" link="/docs/novo-paciente" />
              <DocsItem.Link
                title="Editar paciente"
                link="/docs/editar-paciente"
              />
              <DocsItem.Link
                title="Excluir paciente"
                link="/docs/excluir-paciente"
              />
              <DocsItem.Link
                title="Consultas do paciente"
                link="/docs/consultas-do-paciente"
              />
            </DocsItem.List>
          </DocsItem.Root>

          <DocsItem.Root>
            <DocsItem.Title>Clínica</DocsItem.Title>
            <DocsItem.List>
              <DocsItem.Link title="Nova clínica" link="/docs/nova-clinica" />
              <DocsItem.Link
                title="Editar clínica"
                link="/docs/editar-clinica"
              />
            </DocsItem.List>
          </DocsItem.Root>

          <DocsItem.Root>
            <DocsItem.Title>Consulta</DocsItem.Title>
            <DocsItem.List>
              <DocsItem.Link title="Nova consulta" link="/docs/nova-consulta" />
              <DocsItem.Link
                title="Editar consulta"
                link="/docs/editar-consulta"
              />
              <DocsItem.Link
                title="Geração de documentos médicos com IA"
                link="/docs/gerar-documentos"
              />
              <DocsItem.Link
                title="Categorizar consultas"
                link="/docs/categoria-consultas"
              />
            </DocsItem.List>
          </DocsItem.Root>
        </ul>
      </ScrollArea>
    </div>
  )
}

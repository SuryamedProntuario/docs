import Link from "next/link"
import { DocsItem } from "./docs-item"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"

export function MenuNavegacaoLateral () {
  return (
    <div className="w-[284px] sticky top-[100px]    shrink">
      <div className="flex flex-col gap-2 mb-6 px-2">
          <div className="w-full flex flex-col gap-2">
          <Button asChild variant={"default"} className="w-full">
            <a href="https://app.suryamed.com.br" target="_blank">
              Atenda já!
            </a>
          </Button>
          <Button asChild variant={"secondary"} className="w-full">
            <Link href="/docs">
              Inicio
            </Link>
          </Button>
          </div>
      </div>
     
      <ScrollArea className="h-[calc(100vh-260px)]  overflow-y-auto">
      <ul className="flex  flex-col gap-6 px-2 relative">
        <DocsItem.Root>
            <DocsItem.Title>Paciente</DocsItem.Title>
            <DocsItem.List>
              <DocsItem.Link title="Novo paciente" link="/docs/novo-paciente"/>
              <DocsItem.Link title="Editar paciente" link="/docs/editar-paciente"/>
              <DocsItem.Link title="Excluir paciente" link="/docs/excluir-paciente"/>
              <DocsItem.Link title="Consultas do paciente" link="/docs/consultas-do-paciente"/>
            </DocsItem.List>
        
        </DocsItem.Root>

        <DocsItem.Root>
        <DocsItem.Title>Clínica</DocsItem.Title>
          <DocsItem.List>
            <DocsItem.Link title="Nova clínica" link="/docs/nova-clinica"/>
            <DocsItem.Link title="Editar clínica" link="/docs/editar-clinica"/>
            <DocsItem.Link title="Excluir clínica" link="/docs/excluir-clinica"/>
            <DocsItem.Link title="Consultas por clínica" link="/docs/consultas-por-clinica"/>
          </DocsItem.List>
        </DocsItem.Root>

        <DocsItem.Root>
        <DocsItem.Title>Consulta</DocsItem.Title>
          <DocsItem.List>
            <DocsItem.Link title="Nova consulta" link="/docs/hello-world"/>
            <DocsItem.Link title="Editar consulta" link="/docs/editar-consulta"/>
            <DocsItem.Link title="Excluir consulta" link="/docs/excluir-consulta"/>
            <DocsItem.Link title="Procurar por consultas" link="/docs/procurar-por-consultas"/>
          </DocsItem.List>
        </DocsItem.Root>
    
      </ul>
        </ScrollArea>
    </div>
  )
}
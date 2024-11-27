import { PopoverContent } from "@radix-ui/react-popover"
import { Menu } from "lucide-react"

import { MenuNavegacaoLateral } from "@/components/menu-navegacao-lateral"
import { Popover, PopoverTrigger } from "@/components/ui/popover"

export default function LayoutDocs({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative mx-auto flex max-w-screen-xl flex-col items-start px-4 py-10 lg:flex-row">
      <div className="flex w-full border-b py-4 lg:hidden">
        <Popover>
          <PopoverTrigger className="flex w-full items-center justify-center gap-1 bg-muted/70 py-2 font-semibold">
            Menu
            <Menu />
          </PopoverTrigger>
          <PopoverContent className="flex w-full min-w-[100vw] justify-center rounded-md border bg-background p-2">
            <MenuNavegacaoLateral />
          </PopoverContent>
        </Popover>
      </div>

      <div className="hidden lg:flex">
        <MenuNavegacaoLateral />
      </div>
      <div className="w-full">{children}</div>
    </div>
  )
}

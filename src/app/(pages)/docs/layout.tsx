import { MenuNavegacaoLateral } from "@/components/menu-navegacao-lateral";

export default function LayoutDocs ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto relative items-start  flex max-w-screen-xl px-4 py-10">
      <MenuNavegacaoLateral />
      <div className="w-full ">
        {children}
      </div>
    </div>
  )
}
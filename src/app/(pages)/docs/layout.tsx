import { Header } from "@/components/header";
import { MenuNavegacaoLateral } from "@/components/menu-navegacao-lateral";
import { ThemeProvider } from "@/components/theme-provider";

export default function LayoutDocs ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    > 
    <Header />
    <div className="mx-auto relative items-start  flex max-w-screen-xl px-4 py-10">
      <MenuNavegacaoLateral />
      <div className="w-full ">
        {children}
      </div>
    </div>
    </ThemeProvider>
  )
}
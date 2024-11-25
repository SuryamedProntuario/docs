import Link from "next/link"

import { ModeToggle } from "./toggle-theme"
import { Button } from "./ui/button"

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between gap-2 border-b bg-background px-4 py-1">
        <Link href="/" className="text-xl font-bold antialiased">
          SuryaMED
        </Link>

        <div className="flex items-center gap-2">
          <Button asChild>
            <a href="https://app.suryamed.com.br">Atenda já!</a>
          </Button>
          <ModeToggle />
        </div>
      </header>
    </>
  )
}

import Link from "next/link";

import { ModeToggle } from "./toggle-theme";
import { Button } from "./ui/button";

export function Header () {
  return (
    <>
      <header className="flex sticky top-0 bg-background  z-10 justify-between gap-2 items-center  py-1 px-4 border-b ">
          <Link href="/" className="font-bold antialiased text-xl">
            SuryaMED
          </Link >
      
          <div className="flex items-center gap-2">
              <Button asChild>
                <a href="https://app.suryamed.com.br">
                  Atenda já!
                </a>
              </Button>
              <ModeToggle />
        </div>
      </header>
    </>
  )
}
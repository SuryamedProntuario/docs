"use client"

import { motion } from "motion/react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="relative z-10 flex min-h-[calc(100dvh-50px)] flex-col items-center justify-center overflow-hidden px-4">
        <motion.img
          initial={{
            translateY: 100,
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{
            translateY: 0,
            opacity: 0.4,
            transition: {
              duration: 1, // Duração da animação
            },
          }}
          src="/images/lp-hero-wpp.svg"
          className="absolute z-0 w-full !brightness-0 dark:!brightness-100"
          alt=""
        />

        <motion.h1
          initial={{
            translateY: -50,
            opacity: 0,
            filter: "blur(10px)", // Inicia com o blur
          }}
          viewport={{ once: true }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            filter: "blur(0px)", // Remove o blur
            transition: {
              delay: 0.8,
              duration: 1, // Duração da animação
            },
          }}
          className="mb-20 bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-center text-2xl font-extrabold tracking-tight text-transparent lg:text-6xl"
        >
          SuryaMED Prontuário médico de ponta
        </motion.h1>
        <motion.p
          initial={{
            translateY: 50,
            opacity: 0,
            filter: "blur(10px)", // Inicia com o blur
          }}
          viewport={{ once: true }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            filter: "blur(0px)", // Remove o blur
            transition: {
              delay: 1.6,
              duration: 0.8, // Duração da animação
            },
          }}
          className="mb-8 max-w-2xl text-center text-base font-normal text-muted-foreground lg:text-lg"
        >
          Aprimore seus atendimentos com{" "}
          <span className="font-bold text-primary">
            transcrição de consultas{" "}
          </span>
          com{" "}
          <span className="font-bold text-primary">
            Inteligência Artificial
          </span>{" "}
          e gerenciamento de dados de pacientes.
        </motion.p>
        <div className="z-10 flex items-center gap-2">
          <Button asChild>
            <Link href="/docs">Comece por aqui</Link>
          </Button>
          <Button asChild variant={"outline"} className="backdrop-blur-md">
            <a href="https://app.suryamed.com.br/auth/login">
              Comece a atender
            </a>
          </Button>
        </div>
      </div>
    </>
  )
}

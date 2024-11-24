"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="relative z-10 flex min-h-[calc(100dvh-100px)] flex-col items-center justify-center overflow-hidden">
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
          src="/static/lp-hero-wpp.svg"
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
          className="mb-20 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent"
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
          className="mb-8 max-w-2xl text-center text-lg font-normal text-muted-foreground"
        >
          Aprimore seus atendimentos com{" "}
          <span className="font-bold text-foreground">
            transcrição de consultas{" "}
          </span>
          com{" "}
          <span className="font-bold text-foreground">
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
      <section className="mx-auto flex w-full max-w-[1920px] flex-col items-center px-4 py-10">
        <h2 className="mb-3 text-3xl font-semibold">Mais procurados</h2>

        <article className="grid w-full grid-cols-3 gap-4">
          <Link
            href=""
            className="rounded-lg border bg-muted/50 p-4 transition-all hover:shadow-inner"
          >
            <h3 className="text-xl font-semibold">Como criar um paciente?</h3>
            <p className="text-sm text-muted-foreground">
              Um caminho rápido e pratico para criar o paciente da sua clinica
            </p>
          </Link>
          <Link
            href=""
            className="rounded-lg border bg-muted/50 p-4 transition-all hover:shadow-inner"
          >
            <h3 className="text-xl font-semibold">Criar uma clínica?</h3>
            <p className="text-sm text-muted-foreground">Crie sua clinica</p>
          </Link>
          <Link
            href=""
            className="rounded-lg border bg-muted/50 p-4 transition-all hover:shadow-inner"
          >
            <h3 className="text-xl font-semibold">
              Como iniciar uma consulta?
            </h3>
            <p className="text-sm text-muted-foreground">
              Um caminho rápido e pratico para criar o paciente da sua clinica
            </p>
          </Link>
          <Link
            href=""
            className="rounded-lg border bg-muted/50 p-4 transition-all hover:shadow-inner"
          >
            <h3 className="text-xl font-semibold">Como criar um paciente?</h3>
            <p className="text-sm text-muted-foreground">
              Um caminho rápido e pratico para criar o paciente da sua clinica
            </p>
          </Link>
          <Link
            href=""
            className="rounded-lg border bg-muted/50 p-4 transition-all hover:shadow-inner"
          >
            <h3 className="text-xl font-semibold">Como criar um paciente?</h3>
            <p className="text-sm text-muted-foreground">
              Um caminho rápido e pratico para criar o paciente da sua clinica
            </p>
          </Link>
          <Link
            href=""
            className="rounded-lg border bg-muted/50 p-4 transition-all hover:shadow-inner"
          >
            <h3 className="text-xl font-semibold">Como criar um paciente?</h3>
            <p className="text-sm text-muted-foreground">
              Um caminho rápido e pratico para criar o paciente da sua clinica
            </p>
          </Link>
        </article>
      </section>
    </>
  );
}

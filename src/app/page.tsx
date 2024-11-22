'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import bannerHero from "../../public/static/lp-hero-wpp.svg"


import { motion } from 'motion/react'
import { Header } from "@/components/header";

export default function Home() {
  return (
   <>
     <Header />
     <div className="relative overflow-hidden min-h-[calc(100dvh-100px)] flex flex-col z-10 justify-center items-center">
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
          className="w-full z-0 absolute !brightness-0 dark:!brightness-100" alt=""/>

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
          className="text-6xl text-center mb-20 tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">
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
        className="text-lg text-muted-foreground font-normal max-w-2xl text-center mb-8">Aprimore seus atendimentos com <span className="text-foreground font-bold">transcrição de consultas </span> 
com <span className="text-foreground font-bold">Inteligência Artificial</span > e gerenciamento de dados de pacientes.
      </motion.p>
      <div className="flex gap-2 z-10 items-center">
        <Button asChild>
          <Link href="/docs">
            Comece por aqui
          </Link>
        </Button>
        <Button asChild variant={"outline"} className="backdrop-blur-md">
          <a href="https://app.suryamed.com.br/auth/login">
          Comece a atender
          </a>
        </Button>
      </div>

     
    </div>
    <section className="w-full py-10 flex-col flex items-center max-w-[1920px] mx-auto px-4">
      <h2 className="font-semibold text-3xl mb-3">Mais procurados</h2>

      <article className=" w-full grid grid-cols-3 gap-4">
        <Link href="" className="border p-4 rounded-lg bg-muted/50 hover:shadow-inner transition-all">
          <h3 className="font-semibold text-xl">Como criar um paciente?</h3>
          <p className="text-sm text-muted-foreground">Um caminho rápido e pratico para criar o paciente da sua clinica</p>
        </Link >
        <Link href="" className="border p-4 rounded-lg bg-muted/50 hover:shadow-inner transition-all">
          <h3 className="font-semibold text-xl">Criar uma clínica?</h3>
          <p className="text-sm text-muted-foreground">Crie sua clinica</p>
        </Link >
        <Link href="" className="border p-4 rounded-lg bg-muted/50 hover:shadow-inner transition-all">
          <h3 className="font-semibold text-xl">Como iniciar uma consulta?</h3>
          <p className="text-sm text-muted-foreground">Um caminho rápido e pratico para criar o paciente da sua clinica</p>
        </Link >
        <Link href="" className="border p-4 rounded-lg bg-muted/50 hover:shadow-inner transition-all">
          <h3 className="font-semibold text-xl">Como criar um paciente?</h3>
          <p className="text-sm text-muted-foreground">Um caminho rápido e pratico para criar o paciente da sua clinica</p>
        </Link >
        <Link href="" className="border p-4 rounded-lg bg-muted/50 hover:shadow-inner transition-all">
          <h3 className="font-semibold text-xl">Como criar um paciente?</h3>
          <p className="text-sm text-muted-foreground">Um caminho rápido e pratico para criar o paciente da sua clinica</p>
        </Link >
        <Link href="" className="border p-4 rounded-lg bg-muted/50 hover:shadow-inner transition-all">
          <h3 className="font-semibold text-xl">Como criar um paciente?</h3>
          <p className="text-sm text-muted-foreground">Um caminho rápido e pratico para criar o paciente da sua clinica</p>
        </Link >
      </article>
    </section>
   </>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
   <>
     <div className="min-h-[calc(100dvh-100px)] flex flex-col z-10 justify-center items-center   bg-heroBanner bg-contain bg-no-repeat bg-center">
      <h1 className="text-6xl text-center mb-20 tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">SuryaMED Prontuário médico de ponta</h1>
      <p className="text-lg text-muted-foreground font-normal max-w-2xl text-center mb-8">Aprimore seus atendimentos com <span className="text-foreground font-bold">transcrição de consultas </span> 
com <span className="text-foreground font-bold">Inteligência Artificial</span > e gerenciamento de dados de pacientes.</p>
      <div className="flex gap-2 items-center">
      <Button asChild>
        <Link href="/docs">
          Documentação
        </Link>
      </Button>
      <Button asChild variant={"outline"}>
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

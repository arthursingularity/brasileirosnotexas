"use client"

import NavBar from "./components/ui/NavBar"
import { ArrowRight, Users, TrendingUp, Briefcase, Star } from "lucide-react";

export default function Home() {
  const painPoints = [
    {
      icon: "question.svg",
      text: "Tem visto ou condições para imigrar para o Texas, mas não sabe por onde começar?",
    },
    {
      icon: "finance.svg",
      text: "Tem capital para investir no estado que mais cresce nos Estados Unidos, mas não sabe como transformar isso em oportunidades reais?",
    },
    {
      icon: "warning.svg",
      text: "Já pesquisou sobre o Texas, mas as informações são confusas, contraditórias e te deixam inseguro?",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Crescimento Populacional",
      description: "Recebe milhares de novos moradores todos os meses — pessoas deixando lugares caros para construir um futuro mais próspero.",
      source: "Houston Chronicle",
    },
    {
      icon: TrendingUp,
      title: "Economia Gigante",
      description: "A economia texana é maior que muitos países, e continua atraindo empresas e investimentos de todo o mundo.",
      source: "Wikipedia",
    },
    {
      icon: Briefcase,
      title: "Mercado Aquecido",
      description: "A criação de empregos supera a média nacional. Setores como tecnologia, saúde e construção seguem em expansão.",
      source: "Houston Chronicle",
    },
  ];

  return (

    <div className="text-white">
      <NavBar />
      <section className="relative py-38 px-6 mt-[65px] flex items-center justify-center bg-heroBg overflow-hidden pt-16">
        <div className="mt-16">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">

              {/* Title */}
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in animation-delay-200">
                Recomece sua vida no <span className="text-gold">Texas</span> sabendo onde e como
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-[1.3] animate-fade-in animation-delay-400">
                Descubra o roteiro completo para imigrar ou investir no Texas com quem já fez isso antes e já ajudou dezenas de brasileiros
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <div className="flex items-center bg-gold rounded-[15px] px-10 h-[55px] space-x-2 buttonHover">
                  <button className="font-semibold buttonHover text-black">
                    Quero entrar na mentoria
                  </button>
                  <img src="/imagens/arrow.svg" className="" />
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 flex flex-wrap justify-center space-x-5 text-sm text-muted-foreground animate-fade-in-slow">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>Comunidade exclusiva</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>Suporte personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <div
        className="relative border-y border-gold text-center font-bold w-full py-8 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/imagens/texasBanner.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        <div className="relative font-extrabold leading-[1.15]">
          <p className="text-[25px]">A MAIOR COMUNIDADE DE</p>
          <p className="text-[28px]">BRASILEIROS NO TEXAS</p>
        </div>
      </div>

      <section className="py-24 bg-background relative ">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
              Esta mentoria é para você que já…
            </h2>

            {/* Pain points */}
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="group flex p-6 space-x-6 items-center bg-cardBg rounded-3xl border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex-shrink-0 w-[50px] h-[50px] rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <img src={`/imagens/${point.icon}`} className="w-[30px]" />
                  </div>
                  <p className="text-[17px] text-foreground/90 leading-[1.4]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Empathy statement */}
            <div className="mt-12 text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-[1.3]">
                <span className="text-foreground font-medium">Você não está sozinho:</span>{" "}
                eu fiz esta mesma jornada há anos atrás e descobri o que ninguém conta sobre imigrar para o estado americano mais conservador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal-light relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                O Texas não é apenas um destino,
                <br />
                <span className="text-gradient-gold">é um estado que cresce de verdade</span>
              </h2>
            </div>

            {/* Mind Map Style Layout */}
            <div className="relative">
              {/* Central element */}
              <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full items-center justify-center border border-primary/30">
                <Star className="w-10 h-10 text-primary fill-primary/30" />
              </div>

              {/* Connection lines (decorative) */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
                <div className="absolute top-0 left-1/2 w-px h-[calc(50%-48px)] bg-gradient-to-b from-transparent to-primary/30" />
                <div className="absolute bottom-0 left-1/2 w-px h-[calc(50%-48px)] bg-gradient-to-t from-transparent to-primary/30" />
                <div className="absolute top-1/2 left-0 h-px w-[calc(50%-48px)] bg-gradient-to-r from-transparent to-primary/30" />
                <div className="absolute top-1/2 right-0 h-px w-[calc(50%-48px)] bg-gradient-to-l from-transparent to-primary/30" />
              </div>

              {/* Benefits cards */}
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group p-8 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <span className="text-xs text-primary/70">
                      Fonte: {benefit.source}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Isso significa que, se você fizer as escolhas certas e tiver um plano bem estruturado,{" "}
                <span className="text-foreground font-medium">suas chances de sucesso aumentam exponencialmente.</span>
              </p>

              <button variant="hero" size="xl" className="group">
                Quero fazer minha aplicação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
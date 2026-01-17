"use client"

import NavBar from "./components/ui/NavBar"
import { HelpCircle, TrendingUp, AlertTriangle } from "lucide-react";

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
      icon: "business.svg",
      text: "Já pesquisou sobre o Texas, mas as informações são confusas, contraditórias e te deixam inseguro?",
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
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in animation-delay-400">
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
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
              Esta mentoria é para você que já…
            </h2>

            {/* Pain points */}
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="group flex p-6 space-x-4 items-center bg-cardBg rounded-3xl border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex-shrink-0 w-[50px] h-[50px] rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <img src={`/imagens/${point.icon}`} className="w-[30px]" />
                  </div>
                  <p className="text-[17px] text-foreground/90 leading-relaxed">
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
    </div>
  )
}
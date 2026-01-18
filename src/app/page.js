"use client"

import NavBar from "./components/ui/NavBar"
import { ArrowRight, Users, TrendingUp, Briefcase, Star, Check, Instagram, MessageCircle, Clock } from "lucide-react";

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
      description: "Recebe milhares de novos moradores todos os meses.",
    },
    {
      icon: TrendingUp,
      title: "Economia Gigante",
      description: "A economia texana é maior que muitos países, e continua atraindo empresas e investimentos de todo o mundo.",
    },
    {
      icon: Briefcase,
      title: "Mercado de trabalho Aquecido",
      description: "A criação de empregos supera a média nacional. Setores como tecnologia, saúde e construção seguem em expansão.",
    },
  ];

  const offerings = [
    "Estratégias claras para iniciar sua vida aqui no Texas",
    "Caminhos inteligentes para usar seu capital a seu favor",
    "Conexão com especialistas em cada área de imigração e internacionalização de patrimônio",
    "Acompanhamento pessoal da sua jornada (em encontros pontuais!)",
    "Apoio de profissionais em decisões imobiliárias e investimentos",
    "Networking com outros brasileiros que estão no mesmo caminho",
    "Acesso à uma comunidade exclusiva",
  ];

  return (
    <div className="text-white">
      <NavBar />
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden ">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/imagens/texas-skyline.jpg"
            alt="Texas skyline at sunset"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/95 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Title */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 animate-fade-in animation-delay-200">
              Recomece sua vida no
              <span className="text-gold"> Texas </span>
              sabendo onde e como
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in animation-delay-400">
              Descubra o roteiro completo para imigrar ou investir no Texas com quem já fez isso antes e já ajudou dezenas de brasileiros
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfhvx0_1TvtPPCiCJL8PIYUkwHDvbhAcpoA22lFxmckm_jrTg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold buttonHover rounded-[15px] h-[55px] w-[320px] flex items-center justify-center space-x-2"
              >
                <span className="font-medium buttonHover text-[17px] text-black">
                  Quero entrar na mentoria
                </span>
                <img src="/imagens/arrow.svg" alt="Seta" />
              </a>
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

        <div className="absolute inset-0 bg-black/80" />
        <div className="relative font-extrabold leading-[1.15]">
          <p className="text-[25px]">A MAIOR COMUNIDADE DE</p>
          <p className="text-[28px]">BRASILEIROS NO TEXAS</p>
        </div>
      </div>

      <section className="py-16 bg-background relative ">
        <div className="container px-6 mx-auto">
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
                  className="group flex p-6 space-x-6 items-center bg-cardBg/70 rounded-3xl border border-border/50 hover:border-gold/30 hover:shadow-glow"
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

      <section id="beneficios" className="py-16 bg-charcoal-light/70 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                O Texas não é apenas um destino, é um estado que
                <span className="text-gold font-bold"> cresce de verdade</span>
              </h2>
            </div>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src="imagens/texas-landscape.jpg"
                  alt="Texas landscape"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-gold font-medium">Terra de oportunidades</p>
                  <p className="text-foreground font-medium text-lg">Paisagens incríveis e prosperidade</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src="/imagens/texas-capitol.jpg"
                  alt="Texas Capitol"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-gold font-medium">Estado conservador</p>
                  <p className="text-foreground font-medium text-lg">Valores e liberdade</p>
                </div>
              </div>
            </div>

            {/* Mind Map Style Layout */}
            <div className="relative">

              {/* Benefits cards */}
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group p-7 bg-cardBg2/70 rounded-3xl border border-border/50 hover:border-gold/40 transition-all duration-300 hover:shadow-glow"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                      <benefit.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {benefit.description}
                    </p>
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

              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfhvx0_1TvtPPCiCJL8PIYUkwHDvbhAcpoA22lFxmckm_jrTg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold buttonHover rounded-[15px] h-[55px] w-[320px] flex items-center justify-center space-x-2"
                >
                  <span className="font-medium buttonHover text-[17px] text-black">
                    Quero entrar na mentoria
                  </span>
                  <img src="/imagens/arrow.svg" alt="Seta" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wesley py-24 bg-background relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image side */}
              <div className="relative order-2 lg:order-1">
                <div className="relative max-w-md mx-auto">
                  {/* Background decoration */}
                  <div className="absolute -inset-0.5 bg-gold rounded-3xl" />

                  {/* Main image */}
                  <div className="relative rounded-[23px] overflow-hidden border border-border/50 shadow-card">
                    <img
                      src="/imagens/mentor-wesley.png"
                      alt="Wesley - Mentor e Fundador"
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                    {/* Name overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-display text-2xl font-bold text-foreground">Wesley</p>
                      <p className="text-gold text-sm font-medium">Mentor & Fundador</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="order-2 lg:order-2">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                  Wesley não fala de teoria, ele fala de <span className="text-gold">EXPERIÊNCIA.</span>
                </h2>

                {/* Bullet points */}
                <div className="space-y-5 mb-10">
                  <div className="space-y-5">
                    <div className="flex bg-cardBg/40 items-center space-x-4 border border-border/70 rounded-3xl py-4 px-5">
                      <p className="text-[25px]">✈️</p>
                      <p className="text-lg text-foreground/85 leading-[1.4]">
                        Imigrante que passou pelo processo real e entendeu os erros e acertos em sua jornada.
                      </p>
                    </div>
                    <div className="flex bg-cardBg/40 items-center space-x-4 border border-border/70 rounded-3xl py-4 px-5">
                      <p className="text-[25px]">🇧🇷</p>
                      <p className="text-lg text-foreground/85 leading-[1.4]">
                        Mentor que ajuda brasileiros a terem conexões reais e networking estratégico no estado mais conservador dos EUA.
                      </p>
                    </div>
                    <div className="flex bg-cardBg/40 items-center space-x-4 border border-border/70 rounded-3xl py-4 px-5">
                      <p className="text-[25px]">🇺🇸</p>
                      <p className="text-lg text-foreground/85 leading-[1.4]">
                        Histórias e informações reais sobre o dia a dia no Texas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhvx0_1TvtPPCiCJL8PIYUkwHDvbhAcpoA22lFxmckm_jrTg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold buttonHover rounded-[15px] h-[55px] w-[320px] flex items-center justify-center space-x-2"
                  >
                    <span className="font-medium buttonHover text-[17px] text-black">
                      Quero entrar na mentoria
                    </span>
                    <img src="/imagens/arrow.svg" alt="Seta" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mentoria" className="py-16 bg-charcoal-light/70 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[200px] hidden md:block" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                O que você vai receber{" "}
                <span className="text-gradient-gold">na mentoria</span>
              </h2>
            </div>

            {/* Content with image */}
            <div className="grid lg:grid-cols-5 gap-8 mb-12">
              {/* Offerings list */}
              <div className="lg:col-span-3 space-y-4">
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 bg-cardBg2 rounded-xl border border-border/70 hover:border-gold/30"
                  >
                    <div className="flex items-center justify-center">
                      <Check className="w-6 text-gold" />
                    </div>
                    <p className="text-foreground/90">{offering}</p>
                  </div>
                ))}
              </div>

              {/* Image column */}
              <div className="lg:col-span-2 relative">
                <div className="sticky top-24">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="/imagens/texas-home.jpg"
                      alt="Texas home - American dream"
                      className="w-full h-80 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-gold text-sm font-medium mb-1">Sua nova vida</p>
                      <p className="font-display text-xl font-medium text-foreground">
                        O <span className="font-bold">SONHO AMERICANO</span> ao seu alcance!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/imagens/usa-flag.png"
            alt="Texas skyline"
            className="w-full h-full object-cover transform-gpu"
          />
          <div className="absolute inset-0 bg-background/93" />
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gold/3 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O Texas está crescendo. A demanda
              <span className="text-gold"> ESTÁ ALTA.</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              As vagas, os investimentos e as oportunidades não esperam — elas são tomadas por quem age agora.
            </p>

            {/* CTA Box */}
            <div className="relative p-6 space-y-6 rounded-4xl border border-gold/30 shadow-glow mb-8 backdrop-blur-lg">
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfhvx0_1TvtPPCiCJL8PIYUkwHDvbhAcpoA22lFxmckm_jrTg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold buttonHover rounded-[15px] h-[55px] w-full flex items-center justify-center space-x-2"
                >
                  <span className="font-medium buttonHover text-[17px] text-black">
                    Quero entrar na mentoria
                  </span>
                  <img src="/imagens/arrow.svg" alt="Seta" />
                </a>
              </div>

              {/* Urgency indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4 text-gold" />
                  <span>Vagas limitadas</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>Acompanhamento pessoal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-background border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <img src="/imagens/icon.png" className="w-[30px]" />
                <div className="block font-bold leading-[1] text-white">
                  <p className="text-[14px]">BRASILEIROS</p>
                  <p className="text-[18px]">NO TEXAS</p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2024 Comunidade Brasileiros no Texas.
            </p>
            <p className="text-sm text-muted-foreground">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
"use client"

import { useEffect } from "react";
import TextComponent from "./components/ui/TextComponent";

export default function Home() {
  useEffect(() => {
    const cta = document.querySelector(".cta-premium");
    const gradient = document.querySelector(".animated-gradient");

    if (!cta && !gradient) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? scrollY / maxScroll : 0;

      if (cta) {
        if (scrollRatio > 0.4) {
          cta.classList.add("cta-attention");
        } else {
          cta.classList.remove("cta-attention");
        }
      }

      if (gradient) {
        gradient.style.backgroundPosition = `${scrollY * 0.04}% 50%`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col w-full text-white">

      {/* =====================
          DOBRA 1 – HERO
      ====================== */}
      <section className="relative pt-[160px] pb-[200px] flex items-center justify-center px-6 overflow-hidden animated-gradient">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Recomece sua vida no <span className="text-[#BF092F]">TEXAS</span> sabendo como e onde
          </h1>

          <TextComponent
            type="Lead"
            content="Descubra o roteiro completo para imigrar ou investir no Texas com quem já fez isso antes e já ajudou dezenas de brasileiros"
            className="text-zinc-200 max-w-3xl mx-auto"
          />

          <div className="pt-2">
            <button className="cta-premium px-14 py-5 bg-accent cursor-pointer text-black font-bold rounded-2xl shadow-xl hover:scale-100 transition-all">
              Quero fazer minha aplicação
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-b from-transparent to-black" />
      </section>
      {/* =====================
          DOBRA 2 – DOR
      ====================== */}
      <section
        className="relative py-28 px-6 bg-cover bg-center bg-black"
        style={{ backgroundImage: "url('/imagens/banner4.png')" }}
      >
        <div className="pointer-events-none absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-0 bg-black/92 backdrop-blur-[1px]" />
        <div className="relative max-w-4xl mx-auto space-y-10">
          <TextComponent
            type="sectionTitle"
            content="Esta mentoria é para você que já…"
            className="text-center text-white"
          />

          <div className="space-y-6">
            <div className="bg-[#141414] border border-[#262626] p-6 rounded-xl">
              <TextComponent type="body" content="Tem visto ou condições para imigrar para o Texas, mas NÃO sabe por onde começar?" />
            </div>
            <div className="bg-[#141414] border border-[#262626] p-6 rounded-xl">
              <TextComponent type="body" content="Tem capital para investir no estado que mais cresce nos Estados Unidos, mas não sabe como transformar isso em oportunidades reais?" />
            </div>
            <div className="bg-[#141414] border border-[#262626] p-6 rounded-xl">
              <TextComponent type="body" content="Já pesquisou sobre o Texas, mas as informações são confusas, contraditórias e te deixam inseguro?" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-6 py-20">
          <TextComponent
            type="h3"
            content="Você não está sozinho: eu fiz esta mesma jornada há anos atrás e descobri o que ninguém conta sobre imigrar para o estado americano mais conservador."
            className=""
          />
          <div className="pt-10 text-center">
            <button className="cta-premium btn-animated cursor-pointer px-14 py-5 bg-[#D4AF37] text-black font-bold rounded-2xl shadow-xl hover:scale-105">
              Quero fazer minha aplicação
            </button>
          </div>
        </div>

      </section>

      {/* =====================
          DOBRA 3 – BENEFÍCIOS
      ====================== */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto space-y-12">
          <TextComponent
            type="h2"
            content="O Texas não é apenas um destino, é um estado que cresce de verdade"
            className="text-center text-white"
          />
          <div className="bg-surfaceDark border border-[#D4AF37]/20 rounded-3xl p-8">
            <div className="text-center space-y-6">
              <TextComponent
                type="body"
                content="Recebe milhares de novos moradores todos os meses — pessoas deixando lugares caros para construir um futuro mais próspero."
                className="text-zinc-300"
              />
              <hr className="border-border" />
              <TextComponent
                type="body"
                content="A economia texana é gigante, maior que muitos países, e continua atraindo empresas e investimentos."
                className="text-zinc-300"
              />
              <hr className="border-border" />
              <TextComponent
                type="body"
                content="A criação de empregos supera a média nacional e setores como tecnologia, saúde e construção seguem aquecidos."
                className="text-zinc-300"
              />
            </div>
          </div>

          <TextComponent
            type="body"
            content="Isso significa que, se você fizer as escolhas certas e tiver um plano bem estruturado, suas chances de sucesso aumentam exponencialmente."
            className="text-center max-w-4xl mx-auto text-zinc-200"
          />

          <div className="pt-2 text-center">
            <button className="cta-premium btn-animated cursor-pointer px-14 py-5 bg-[#D4AF37] text-black font-bold rounded-2xl shadow-xl hover:scale-105">
              Quero fazer minha aplicação
            </button>
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 4 – AUTORIDADE
      ====================== */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative border-3 border-accent max-w-[500px] h-[450px] md:h-[600px] overflow-hidden flex items-center justify-center rounded-3xl">
            <img
              src="/imagens/fotoPrincipal.png"
              className="object-cover rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <p className="font-bold text-[32px] lg:text-[40px] leading-[1.2] tracking-[-0.02em] text-white">Wesley não fala de teoria, ele fala de <span className="text-accent">EXPERIÊNCIA.</span></p>
            <TextComponent type="body" content="Imigrante que passou pelo processo real e entendeu os erros e acertos em sua jornada." className="text-zinc-300" />
            <TextComponent type="body" content="Mentor que ajuda brasileiros a terem conexões reais e networking estratégico no estado mais conservador dos EUA." className="text-zinc-300" />
            <TextComponent type="body" content="Histórias e informações reais sobre o dia a dia no Texas." className="text-zinc-300" />

            <button className="mt-4 px-8 py-4 font-medium cursor-pointer border border-[#D4AF37] text-[#D4AF37] rounded-xl hover:bg-[#D4AF37] hover:text-black transition">
              Quero conversar com o Wesley
            </button>
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 5 – ENTREGA
      ====================== */}
      <section className="relative py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <TextComponent
              type="sectionTitle"
              content="O que você vai receber na mentoria"
              className="text-center text-white"
            />
            <TextComponent
              type="body"
              content="Ao entrar na minha mentoria exclusiva você terá acesso a:"
              className="text-center text-zinc-300 text-lg"
            />
          </div>

          <div className="space-y-4">
            {[
              "Estratégias claras para iniciar sua vida aqui no Texas.",
              "Caminhos inteligentes para usar seu capital a seu favor.",
              "Conexão com especialistas em cada área de imigração e internacionalização de patrimônio.",
              "Acompanhamento pessoal da sua jornada (em encontros pontuais!).",
              "Apoio de profissionais em decisões imobiliárias e investimentos.",
              "Networking com outros brasileiros que estão no mesmo caminho.",
              "Acesso à uma comunidade exclusiva.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-zinc-800 p-5 rounded-xl border border-zinc-700/50"
              >
                <img src="/imagens/check.svg" className="w-[40px] h-[40px] shrink-0 mt-1" />
                <TextComponent type="body" content={text} className="text-zinc-300" />
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[90px] bg-gradient-to-b from-transparent to-black" />
      </section>
      {/* =====================
          DOBRA 6 – URGÊNCIA
      ====================== */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#5E1212] pt-[90px] pb-[150px] via-black to-[#0F2A44]">
        <div className="pointer-events-none absolute top-0 left-0 w-full h-[90px] bg-gradient-to-b from-black to-transparent" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <TextComponent
            type="sectionTitle"
            content="O Texas está crescendo. A demanda está alta."
          />

          <TextComponent
            type="body"
            content="As vagas, os investimentos e as oportunidades não esperam, elas são tomadas por quem age agora."
          />

          <button className="cta-premium btn-animated cursor-pointer px-14 py-5 bg-[#D4AF37] text-black font-bold rounded-2xl shadow-xl hover:scale-105">
            Quero entrar na mentoria
          </button>

          <TextComponent
            type="lead"
            content="Vagas limitadas para mentoria com acompanhamento pessoal e suporte exclusivo."
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[90px] bg-gradient-to-b from-transparent to-black" />
      </section>
    </main>
  );
}
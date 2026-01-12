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
  
      /* 🎯 CTA reage ao scroll */
      if (cta) {
        if (scrollRatio > 0.4) {
          cta.classList.add("cta-attention");
        } else {
          cta.classList.remove("cta-attention");
        }
      }
  
      /* 🎨 Gradiente reage ao scroll */
      if (gradient) {
        gradient.style.backgroundPosition = `${scrollY * 0.04}% 50%`;
      }
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
  
    // Executa uma vez ao carregar (caso a página já abra scrollada)
    handleScroll();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  return (
    <main className="flex flex-col w-full bg-zinc-950 text-white">

      {/* =====================
          DOBRA 1 – HERO
      ====================== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden animated-gradient">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-5xl text-center space-y-6">
          <TextComponent
            type="h1"
            content="Recomece sua vida no Texas sabendo onde e como"
            className="text-white"
          />

          <TextComponent
            type="Lead"
            content="Descubra o roteiro completo para imigrar ou investir no Texas com quem já fez isso antes e já ajudou dezenas de brasileiros"
            className="text-zinc-200 max-w-3xl mx-auto"
          />

          <div className="pt-6">
            <button className="cta-premium btn-animated cta-hero px-12 py-4 bg-gradient-to-r from-green-500 via-yellow-400 to-blue-700 text-black font-bold rounded-xl shadow-xl">
              Quero fazer minha aplicação
            </button>
          </div>
        </div>
      </section>


      {/* =====================
          DOBRA 2 – DOR
      ====================== */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto space-y-10">
          <TextComponent
            type="h2"
            content="Esta mentoria é para você que já…"
            className="text-center text-white"
          />

          <div className="space-y-6">
            <TextComponent type="body" content="• Tem visto ou condições para imigrar para o Texas, mas NÃO sabe por onde começar?" className="text-zinc-300" />
            <TextComponent type="body" content="• Tem capital para investir no estado que mais cresce nos Estados Unidos, mas não sabe como transformar isso em oportunidades reais?" className="text-zinc-300" />
            <TextComponent type="body" content="• Já pesquisou sobre o Texas, mas as informações são confusas, contraditórias e te deixam inseguro?" className="text-zinc-300" />
          </div>

          <TextComponent
            type="body"
            content="Você não está sozinho: eu fiz esta mesma jornada há anos atrás e descobri o que ninguém conta sobre imigrar para o estado americano mais conservador."
            className="pt-8 text-zinc-200"
          />
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

          <div className="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-10 space-y-6">
            <div className="text-center space-y-4">
              <TextComponent
                type="body"
                content="Recebe milhares de novos moradores todos os meses — pessoas deixando lugares caros para construir um futuro mais próspero."
                className="text-zinc-300"
              />
              <TextComponent
                type="body"
                content="A economia texana é gigante, maior que muitos países, e continua atraindo empresas e investimentos."
                className="text-zinc-300"
              />
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

          <div className="pt-6 text-center">
            <button className="cta-premium btn-animated px-12 py-4 bg-gradient-to-r from-green-500 via-yellow-400 to-blue-700 text-black font-bold rounded-xl shadow-xl">
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

          <div className="w-full h-[420px] rounded-2xl bg-gradient-to-br from-blue-900 via-zinc-800 to-green-900 flex items-center justify-center text-zinc-300">
            Foto profissional do Wesley
          </div>

          <div className="space-y-6">
            <TextComponent type="h3" content="Wesley não fala de teoria, ele fala de EXPERIÊNCIA." className="text-white" />
            <TextComponent type="body" content="• Imigrante que passou pelo processo real e entendeu os erros e acertos em sua jornada" className="text-zinc-300" />
            <TextComponent type="body" content="• Mentor que ajuda brasileiros a terem conexões reais e networking estratégico no estado mais conservador dos EUA." className="text-zinc-300" />
            <TextComponent type="body" content="• Histórias e informações reais sobre o dia a dia no Texas" className="text-zinc-300" />

            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-700 to-red-600 text-white font-bold rounded-xl hover:opacity-90 transition">
              Quero conversar com o Wesley
            </button>
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 5 – ENTREGA
      ====================== */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <TextComponent
            type="h2"
            content="O que você vai receber na mentoria"
            className="text-center text-white"
          />

          <TextComponent
            type="body"
            content="Ao entrar na minha mentoria exclusiva você terá acesso a:"
            className="text-center text-zinc-300 text-lg"
          />

          <div className="space-y-4">
            {[
              "Estratégias claras para iniciar sua vida aqui no Texas;",
              "Caminhos inteligentes para usar seu capital a seu favor;",
              "Conexão com especialistas em cada área de imigração e internacionalização de patrimônio;",
              "Acompanhamento pessoal da sua jornada (em encontros pontuais!);",
              "Apoio de profissionais em decisões imobiliárias e investimentos;",
              "Networking com outros brasileiros que estão no mesmo caminho;",
              "Acesso à uma comunidade exclusiva;"
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-zinc-800 p-5 rounded-xl border border-zinc-700/50"
              >
                <span className="text-green-500 text-xl font-bold">✔</span>
                <TextComponent type="body" content={text} className="text-zinc-300" />
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl text-center">
            <TextComponent
              type="h2"
              content="Tudo isso com quem já trilhou o caminho e sabe os atalhos!"
              className="text-black font-bold text-white"
            />
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 6 – PROVA SOCIAL
      ====================== */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto space-y-12">
          <TextComponent
            type="h2"
            content="Depoimentos e Resultados"
            className="text-center text-white"
          />

          <div className="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-10 text-center">
            <TextComponent
              type="body"
              content="depoimentos"
              className="text-zinc-400 italic"
            />
          </div>

          <div className="pt-6 text-center">
            <button className="cta-premium btn-animated px-12 py-4 bg-gradient-to-r from-green-500 via-yellow-400 to-blue-700 text-black font-bold rounded-xl shadow-xl">
              Quero ter sucesso no Texas
            </button>
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 7 – URGÊNCIA
      ====================== */}
      <section className="py-24 px-6 text-white animated-gradient-slow">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <TextComponent
            type="h2"
            content="O Texas está crescendo. A demanda está alta."
            className="text-white"
          />

          <TextComponent
            type="Lead"
            content="As vagas, os investimentos e as oportunidades não esperam, elas são tomadas por quem age agora."
            className="text-zinc-200"
          />

          <button className="btn-animated cta-urgent px-12 py-4 bg-green-500 text-black font-bold rounded-xl shadow-lg">
            Quero fazer minha aplicação
          </button>

          <TextComponent
            type="body"
            content="Vagas limitadas para mentoria com acompanhamento pessoal e suporte exclusivo."
            className="text-zinc-300 pt-4"
          />
        </div>
      </section>
    </main>
  );
}
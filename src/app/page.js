import TextComponent from "./components/ui/TextComponent";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-zinc-950 text-white">

      {/* =====================
          DOBRA 1 – HERO
      ====================== */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-6">
        <div className="max-w-5xl text-center space-y-6">
          <TextComponent
            type="h1"
            content="Recomece sua vida no Texas sabendo onde e como"
            className="text-white"
          />

          <TextComponent
            type="Lead"
            content="Descubra o roteiro completo para imigrar ou investir no Texas com quem já fez isso antes e já ajudou dezenas de brasileiros"
            className="text-zinc-300 max-w-3xl mx-auto"
          />

          <div className="pt-6">
            <button className="px-10 py-4 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition">
              Quero fazer minha aplicação
            </button>
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 2 – DOR / CONSCIÊNCIA
      ====================== */}
      <section className="py-24 px-6 bg-zinc-950">
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
            type="Lead"
            content="Você não está sozinho: eu fiz esta mesma jornada há anos atrás e descobri o que ninguém conta sobre imigrar para o estado americano mais conservador."
            className="pt-6 text-zinc-200"
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

          <div className="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-10 text-center">
            <TextComponent
              type="body"
              content="(Mapa mental visual mostrando crescimento, economia, empregos e migração)"
              className="text-zinc-400"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Recebe milhares de novos moradores todos os meses, pessoas deixando lugares caros para construir um futuro mais próspero.",
              "A economia texana é gigante, maior que muitos países, e continua atraindo empresas e investimentos.",
              "A criação de empregos supera a média nacional e setores como tecnologia, saúde e construção seguem aquecidos."
            ].map((text, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-xl border border-zinc-700/50">
                <TextComponent type="body" content={text} className="text-zinc-300" />
              </div>
            ))}
          </div>

          <TextComponent
            type="Lead"
            content="Se você fizer as escolhas certas e tiver um plano bem estruturado, suas chances de sucesso aumentam exponencialmente."
            className="text-center max-w-4xl mx-auto text-zinc-200"
          />

          <div className="text-center pt-4">
            <button className="px-10 py-4 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition">
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
          <div className="w-full h-[420px] bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400">
            Foto profissional do Wesley
          </div>

          <div className="space-y-6">
            <TextComponent type="h3" content="Wesley não fala de teoria, ele fala de EXPERIÊNCIA." className="text-white" />
            <TextComponent type="body" content="• Imigrante que passou pelo processo real e entendeu os erros e acertos." className="text-zinc-300" />
            <TextComponent type="body" content="• Mentor com networking estratégico no Texas." className="text-zinc-300" />
            <TextComponent type="body" content="• Conteúdo real sobre o dia a dia no Texas." className="text-zinc-300" />

            <button className="mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition">
              Quero conversar com o Wesley
            </button>
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 5 – ENTREGA
      ====================== */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto space-y-10">
          <TextComponent type="h2" content="O que você vai receber na mentoria" className="text-center text-white" />

          <div className="bg-zinc-800 p-10 rounded-2xl border border-zinc-700/50 space-y-4">
            {[
              "Estratégias claras para iniciar sua vida no Texas",
              "Caminhos inteligentes para usar seu capital",
              "Conexão com especialistas",
              "Acompanhamento pessoal",
              "Apoio em decisões imobiliárias",
              "Networking qualificado",
              "Comunidade exclusiva"
            ].map((item, i) => (
              <TextComponent key={i} type="body" content={`✔ ${item}`} className="text-zinc-300" />
            ))}
          </div>

          <TextComponent
            type="Lead"
            content="Tudo isso com quem já trilhou o caminho e sabe os atalhos!"
            className="text-center text-zinc-200"
          />
        </div>
      </section>

      {/* =====================
          DOBRA 6 – PROVA SOCIAL
      ====================== */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <TextComponent type="h2" content="Resultados reais de quem já está no caminho certo" className="text-white" />
          <TextComponent type="body" content="Depoimentos e parcerias estratégicas da mentoria." className="text-zinc-400" />

          <button className="px-10 py-4 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition">
            Quero ter sucesso no Texas
          </button>
        </div>
      </section>

      {/* =====================
          DOBRA 7 – URGÊNCIA
      ====================== */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <TextComponent type="h2" content="O Texas está crescendo. As oportunidades não esperam." className="text-white" />
          <TextComponent type="Lead" content="Quem age agora ocupa as melhores posições." className="text-zinc-300" />

          <button className="px-12 py-4 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition">
            Quero fazer minha aplicação
          </button>

          <TextComponent
            type="body"
            content="Vagas limitadas para mentoria com acompanhamento pessoal."
            className="text-zinc-400 pt-4"
          />
        </div>
      </section>

    </main>
  );
}
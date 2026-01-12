import TextComponent from "./components/ui/TextComponent";

export default function Home() {
  return (
    <main className="flex flex-col w-full">

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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <TextComponent
            type="h2"
            content="Esta mentoria é para você que já…"
            className="text-center"
          />

          <div className="space-y-6">
            <TextComponent
              type="body"
              content="• Tem visto ou condições para imigrar para o Texas, mas NÃO sabe por onde começar?"
            />
            <TextComponent
              type="body"
              content="• Tem capital para investir no estado que mais cresce nos Estados Unidos, mas não sabe como transformar isso em oportunidades reais?"
            />
            <TextComponent
              type="body"
              content="• Já pesquisou sobre o Texas, mas as informações são confusas, contraditórias e te deixam inseguro?"
            />
          </div>

          <TextComponent
            type="Lead"
            content="Você não está sozinho: eu fiz esta mesma jornada há anos atrás e descobri o que ninguém conta sobre imigrar para o estado americano mais conservador."
            className="pt-6"
          />
        </div>
      </section>

      {/* =====================
          DOBRA 3 – BENEFÍCIOS / CONTEXTO
      ====================== */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <TextComponent
            type="h2"
            content="O Texas não é apenas um destino, é um estado que cresce de verdade"
            className="text-center"
          />

          {/* Placeholder do Mapa Mental */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-10 text-center shadow-sm">
            <TextComponent
              type="body"
              content="(Aqui entra o mapa mental visual mostrando crescimento, economia, empregos e migração)"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <TextComponent
                type="body"
                content="Recebe milhares de novos moradores todos os meses, pessoas deixando lugares caros para construir um futuro mais próspero."
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <TextComponent
                type="body"
                content="A economia texana é gigante, maior que muitos países, e continua atraindo empresas e investimentos."
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <TextComponent
                type="body"
                content="A criação de empregos supera a média nacional e setores como tecnologia, saúde e construção seguem aquecidos."
              />
            </div>
          </div>

          <TextComponent
            type="Lead"
            content="Isso significa que, se você fizer as escolhas certas e tiver um plano bem estruturado, suas chances de sucesso aumentam exponencialmente."
            className="text-center max-w-4xl mx-auto"
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Foto */}
          <div className="w-full h-[420px] bg-zinc-200 rounded-2xl flex items-center justify-center">
            <TextComponent
              type="body"
              content="Foto profissional do Wesley"
            />
          </div>

          {/* Conteúdo */}
          <div className="space-y-6">
            <TextComponent
              type="h3"
              content="Wesley não fala de teoria, ele fala de EXPERIÊNCIA."
            />

            <TextComponent
              type="body"
              content="• Imigrante que passou pelo processo real e entendeu os erros e acertos em sua jornada."
            />
            <TextComponent
              type="body"
              content="• Mentor que ajuda brasileiros a terem conexões reais e networking estratégico no estado mais conservador dos EUA."
            />
            <TextComponent
              type="body"
              content="• Histórias e informações reais sobre o dia a dia no Texas (Instagram)."
            />

            <button className="mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition">
              Quero conversar com o Wesley
            </button>
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 5 – ENTREGA
      ====================== */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <TextComponent
            type="h2"
            content="O que você vai receber na mentoria"
            className="text-center"
          />

          <div className="bg-white p-10 rounded-2xl shadow-sm space-y-4">
            <TextComponent type="body" content="✔ Estratégias claras para iniciar sua vida aqui no Texas;" />
            <TextComponent type="body" content="✔ Caminhos inteligentes para usar seu capital a seu favor;" />
            <TextComponent type="body" content="✔ Conexão com especialistas em cada área de imigração e internacionalização de patrimônio;" />
            <TextComponent type="body" content="✔ Acompanhamento pessoal da sua jornada (em encontros pontuais);" />
            <TextComponent type="body" content="✔ Apoio de profissionais em decisões imobiliárias e investimentos;" />
            <TextComponent type="body" content="✔ Networking com outros brasileiros que estão no mesmo caminho;" />
            <TextComponent type="body" content="✔ Acesso a uma comunidade exclusiva;" />
          </div>

          <TextComponent
            type="Lead"
            content="Tudo isso com quem já trilhou o caminho e sabe os atalhos!"
            className="text-center"
          />
        </div>
      </section>

      {/* =====================
          DOBRA 6 – PROVA SOCIAL
      ====================== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          <TextComponent
            type="h2"
            content="Resultados reais de quem já está no caminho certo"
          />

          <TextComponent
            type="body"
            content="depoimentos de mentorados ou apresentar o networking dos profissionais envolvidos na mentoria."
          />

          <button className="px-10 py-4 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition">
            Quero ter sucesso no Texas
          </button>
        </div>
      </section>

      {/* =====================
          DOBRA 7 – URGÊNCIA
      ====================== */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <TextComponent
            type="h2"
            content="O Texas está crescendo. As oportunidades não esperam."
            className="text-white"
          />

          <TextComponent
            type="Lead"
            content="As vagas, os investimentos e as melhores oportunidades são tomadas por quem age agora."
            className="text-zinc-300"
          />

          <button className="px-12 py-4 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition">
            Quero fazer minha aplicação
          </button>

          <TextComponent
            type="body"
            content="Vagas limitadas para mentoria com acompanhamento pessoal e suporte exclusivo."
            className="text-zinc-400 pt-4"
          />
        </div>
      </section>

    </main>
  );
}
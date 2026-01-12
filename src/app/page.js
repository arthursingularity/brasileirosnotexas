import TextComponent from "./components/ui/TextComponent";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-zinc-950 text-white">

      {/* =====================
          DOBRA 1 – HERO
      ====================== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        
        {/* Background USA + BR */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-zinc-900 to-black" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(0,156,59,0.4),rgba(255,223,0,0.4),rgba(0,40,104,0.4),rgba(191,10,48,0.4))]" />

        <div className="relative max-w-5xl text-center space-y-6">
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
            <button className="px-12 py-4 bg-gradient-to-r from-green-600 via-yellow-500 to-blue-700 text-black font-semibold rounded-xl hover:opacity-90 transition shadow-lg">
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

          <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-yellow-400 rounded-full mx-auto" />

          <TextComponent
            type="Lead"
            content="Você não está sozinho: eu fiz esta mesma jornada há anos atrás e descobri o que ninguém conta sobre imigrar para o estado americano mais conservador."
            className="pt-6 text-zinc-200 text-center"
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

          <div className="bg-zinc-800 border border-zinc-700/50 rounded-2xl p-10 text-center relative">
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-700 to-red-600 rounded-l-2xl" />
            <TextComponent
              type="body"
              content="Mapa mental visual mostrando crescimento, economia, empregos e migração"
              className="text-zinc-400"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Recebe milhares de novos moradores todos os meses.",
              "Economia maior que muitos países.",
              "Empregos acima da média nacional."
            ].map((text, index) => (
              <div
                key={index}
                className="bg-zinc-800 p-6 rounded-xl border border-zinc-700/50 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-600 via-yellow-400 to-blue-600" />
                <TextComponent type="body" content={text} className="text-zinc-300" />
              </div>
            ))}
          </div>

          <TextComponent
            type="Lead"
            content="Se você fizer as escolhas certas e tiver um plano bem estruturado, suas chances de sucesso aumentam exponencialmente."
            className="text-center max-w-4xl mx-auto text-zinc-200"
          />
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
            <TextComponent type="h3" content="Experiência real entre Brasil e Estados Unidos." className="text-white" />
            <TextComponent type="body" content="• Imigrante que viveu o processo na prática." className="text-zinc-300" />
            <TextComponent type="body" content="• Networking estratégico no Texas." className="text-zinc-300" />
            <TextComponent type="body" content="• Conteúdo real sobre a vida nos EUA." className="text-zinc-300" />

            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-700 to-red-600 text-white font-semibold rounded-xl hover:opacity-90 transition">
              Quero conversar com o Wesley
            </button>
          </div>
        </div>
      </section>

      {/* =====================
          DOBRA 7 – URGÊNCIA
      ====================== */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <TextComponent type="h2" content="Brasil e Estados Unidos conectados pela oportunidade." className="text-white" />
          <TextComponent type="Lead" content="Quem age agora constrói o futuro certo no Texas." className="text-zinc-300" />

          <button className="px-12 py-4 bg-gradient-to-r from-green-600 via-yellow-400 to-blue-700 text-black font-semibold rounded-xl hover:opacity-90 transition shadow-lg">
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
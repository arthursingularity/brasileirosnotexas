import "./globals.css"

export const metadata = {
  title: {
    default: "Comunidade Brasileiros no Texas"
  },
  description: "Realize o seu sonho de morar nos Estados Unidos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950">
        {children}
      </body>
    </html>
  );
}

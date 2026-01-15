import "./globals.css"

export const metadata = {
  title: {
    default: "Comunidade Brasileiros no Texas"
  },
  description: "Realize o seu sonho de morar nos Estados Unidos",
  openGraph: {
    title: "Comunidade Brasileiros no Texas",
    description:
      "Realize o seu sonho de morar nos Estados Unidos",
    url: "https://brasileirosnotexas.vercel.app/",
    siteName: "Comunidade Brasileiros no Texas",
    images: [
      {
        url: "https://brasileirosnotexas.vercel.app/og-image.jpg",
        width: 800,
        height: 800,
        alt: "Comunidade Brasileiros no Texas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
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

import "./globals.css";

export const metadata = {
  title: "Comunidade Brasileiros no Texas",
  description: "Realize o seu sonho de morar nos Estados Unidos",

  openGraph: {
    title: "Comunidade Brasileiros no Texas",
    description: "Realize o seu sonho de morar nos Estados Unidos",
    url: "https://comunidadebrasileirosnotexas.com/",
    siteName: "Brasileiros no Texas",
    images: [
      {
        url: "https://comunidadebrasileirosnotexas.com/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Comunidade Brasileiros no Texas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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

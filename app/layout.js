import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "Ivan Campelo | Desenvolvedor Front-end",
  description:
    "Portfólio de Ivan Campelo, estudante de Ciência da Computação e desenvolvedor Front-end.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
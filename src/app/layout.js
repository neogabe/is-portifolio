import { Footer, Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IS Portifólio",
  description: "Este projeto é um portfólio web que lista todas as integrações técnicas realizadas pelo time de Implementação Técnica. O objetivo é centralizar e documentar os projetos desenvolvidos, permitindo fácil acesso e consulta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
        <div className="wrapper">
          <Navbar />
          {children}
          <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

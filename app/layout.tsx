import type { Metadata } from "next";
import { Montserrat, Fira_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const firaSans = Fira_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "Компанія ACTU ᐈ Виробник сухих будівельних сумішей",
  description:
    "ACTU – Український бренд сухих будівельних сумішей ✔ Клейові суміші ✔ Штукатурка ✔ Суміші для влаштування підлог ☝ Інноваційні технології та тільки перевірена сировина ☎ +380 67 300 82 01",
  openGraph: {
    title: "Компанія ACTU ᐈ Виробник сухих будівельних сумішей",
    description:
      "ACTU – Український бренд сухих будівельних сумішей ✔ Клейові суміші ✔ Штукатурка ✔ Суміші для влаштування підлог",
    images: [
      "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69df88e5109844e8b8877737_95a9c66c8b0dba1ee3b19c1a40f270dc6d04c7b7.avif",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${firaSans.variable}`}>
      <body className={`${montserrat.className} min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}

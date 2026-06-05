import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeKupytyClient from "./DeKupytyClient";

export const metadata: Metadata = {
  title: "Де купити | ACTU",
  description:
    "Де купити продукцію ACTU — мережа магазинів-партнерів по всій Україні. ☎ +380 67 300 82 01",
};

export default function DeKupytyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Breadcrumb */}
        <div className="max-w-[1200px] mx-auto px-5 pt-8">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
              Головна
            </Link>
            <span className="text-[#ec6907] font-bold">/ Де купити</span>
          </div>
        </div>

        <DeKupytyClient />

      </main>
      <Footer />
    </>
  );
}

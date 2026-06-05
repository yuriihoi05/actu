import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopClient from "./ShopClient";
import { getAllProducts, getAllCategories } from "@/lib/sanity";
import type { Product, Category } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Каталог компанії ACTU",
  description:
    "Купити сухі будівельні суміші ACTU: клейові суміші, штукатурки, суміші для підлог та теплоізоляції.",
};

export default async function ShopPage() {
  const [products, categories] = await Promise.all([
    getAllProducts().catch(() => [] as Product[]),
    getAllCategories().catch(() => [] as Category[]),
  ]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm flex-wrap">
              <Link href="/" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
                Головна
              </Link>
              <span className="text-[#ec6907] font-bold">/ Каталог компанії ACTU</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Каталог компанії ACTU
            </h1>

            <ShopClient products={products} categories={categories} />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

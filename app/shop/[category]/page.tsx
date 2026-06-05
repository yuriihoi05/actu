import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopClient from "../ShopClient";
import {
  getAllProducts,
  getAllCategories,
  getCategoryBySlug,
  getAllCategorySlugs,
} from "@/lib/sanity";
import type { Product, Category } from "@/lib/sanity";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs().catch(() => []);
  return slugs.map((s) => ({ category: s.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = await getCategoryBySlug(category).catch(() => null);
  if (!cat) return { title: "Каталог | ACTU" };
  return {
    title: `${cat.title} | ACTU`,
    description: `Купити ${cat.title.toLowerCase()} від ACTU — Українського виробника сухих будівельних сумішей.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;

  const [currentCategory, products, categories] = await Promise.all([
    getCategoryBySlug(categorySlug).catch(() => null),
    getAllProducts(categorySlug).catch(() => [] as Product[]),
    getAllCategories().catch(() => [] as Category[]),
  ]);

  if (!currentCategory) notFound();

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
              <span className="text-gray-400 font-bold">/</span>
              <Link href="/shop" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
                Каталог компанії ACTU
              </Link>
              <span className="text-[#ec6907] font-bold">/ {currentCategory.title}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              {currentCategory.title}
            </h1>

            <ShopClient
              products={products}
              categories={categories}
              activeCategorySlug={categorySlug}
            />

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

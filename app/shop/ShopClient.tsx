"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor, productSlug } from "@/lib/sanity";
import type { Product, Category } from "@/lib/sanity";

interface Props {
  products: Product[];
  categories: Category[];
  activeCategorySlug?: string;
}

export default function ShopClient({ products, categories, activeCategorySlug }: Props) {
  const prices = products.map((p) => p.price).filter((p): p is number => p != null);
  const globalMin = prices.length ? Math.floor(Math.min(...prices)) : 0;
  const globalMax = prices.length ? Math.ceil(Math.max(...prices)) : 5000;

  const [minVal, setMinVal] = useState(globalMin);
  const [maxVal, setMaxVal] = useState(globalMax);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => p.price == null || (p.price >= minVal && p.price <= maxVal)
      ),
    [products, minVal, maxVal]
  );

  const minPercent = globalMax > globalMin
    ? ((minVal - globalMin) / (globalMax - globalMin)) * 100
    : 0;
  const maxPercent = globalMax > globalMin
    ? ((maxVal - globalMin) / (globalMax - globalMin)) * 100
    : 100;

  return (
    <div className="flex flex-col lg:flex-row gap-16">

      {/* Sidebar */}
      <aside className="w-full lg:w-[280px] flex-shrink-0">

        {/* Categories */}
        <p className="text-base font-bold text-gray-900 mb-4">Категорії товарів</p>
        <ul className="flex flex-col border-b border-gray-200 pb-6 mb-6">
          {categories.map((cat) => (
            <li key={cat._id}>
              <Link
                href={`/shop/${cat.slug.current}`}
                className={`flex items-center py-2 text-sm font-semibold transition-colors ${
                    activeCategorySlug === cat.slug.current
                      ? "text-[#ec6907]"
                      : "text-gray-900 hover:text-[#ec6907]"
                  }`}
              >
                <span className="whitespace-nowrap flex-1 min-w-0">{cat.title}</span>
                <span className="text-xs text-gray-400 w-6 text-right flex-shrink-0">
                  {cat.count ?? 0}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Price filter */}
        <p className="text-base font-bold text-gray-900 mb-4">Фільтр по ціні</p>

        {/* Dual range slider */}
        <div className="relative h-5 mb-5 mt-2">
          {/* Gray track */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full" />
          {/* Orange fill */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#ec6907] rounded-full"
            style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
          />
          {/* Min range input */}
          <input
            type="range"
            min={globalMin}
            max={globalMax}
            value={minVal}
            onChange={(e) => {
              const v = Math.min(Number(e.target.value), maxVal - 1);
              setMinVal(v);
            }}
            className="range-input"
          />
          {/* Max range input */}
          <input
            type="range"
            min={globalMin}
            max={globalMax}
            value={maxVal}
            onChange={(e) => {
              const v = Math.max(Number(e.target.value), minVal + 1);
              setMaxVal(v);
            }}
            className="range-input"
          />
        </div>

        {/* Price labels */}
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <span className="font-semibold">Ціна:</span>
          <span>{minVal} грн</span>
          <span>—</span>
          <span>{maxVal} грн</span>
        </div>
      </aside>

      {/* Product grid */}
      <div className="flex-1">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500 py-10">
            Немає товарів у вибраному діапазоні цін.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.map((product) => (
              <Link
                key={product._id}
                href={`/product/${productSlug(product.slug.current)}`}
                className="flex flex-col bg-white overflow-hidden group shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.14)] transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-gray-50">
                  {product.mainImage ? (
                    <Image
                      src={urlFor(product.mainImage).width(500).height(500).url()}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-300 text-sm">Без фото</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                      {product.title}
                    </p>
                    {product.description && (
                      <p className="text-sm text-gray-500 font-medium line-clamp-2">
                        {product.description}
                      </p>
                    )}
                  </div>
                  {product.price != null && (
                    <div
                      className="flex items-baseline gap-1 mt-4 justify-end"
                      style={{ fontFamily: "var(--font-fira-sans), sans-serif" }}
                    >
                      <span className="text-[2rem] font-bold text-[#ec6907] leading-[2.375rem]">
                        {product.price}
                      </span>
                      <span className="text-[2rem] font-bold text-[#ec6907] leading-[2.375rem]">
                        грн
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

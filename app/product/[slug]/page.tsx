import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductBySlug, getAllProductSlugs, urlFor } from "@/lib/sanity";
import type { ProductFull } from "@/lib/sanity";
import ProductTabs from "./ProductTabs";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs().catch(() => []);
  return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug).catch(() => null);
  if (!product) return { title: "Продукт не знайдено | ACTU" };
  return {
    title: `${product.title} | ACTU`,
    description: product.description,
  };
}

function DownloadIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 21 21" fill="none">
      <path d="M12.932 12.0076C12.6758 11.7514 12.2604 11.7514 12.0042 12.0076L11.1559 12.8559V8.86311C11.1559 8.50079 10.8622 8.20703 10.4998 8.20703C10.1375 8.20703 9.84374 8.50079 9.84374 8.86311V12.8559L8.99551 12.0076C8.73927 11.7514 8.32388 11.7514 8.06764 12.0076C7.81144 12.2639 7.81144 12.6793 8.06764 12.9355C10.1833 15.0511 10.0801 14.9761 10.2488 15.046C10.4905 15.1461 10.7736 15.094 10.9638 14.9038L12.932 12.9355C13.1883 12.6793 13.1883 12.2639 12.932 12.0076Z" fill="#EC6907" />
      <path d="M13.7804 17.7184H7.21956C6.85724 17.7184 6.56348 17.4247 6.56348 17.0623C6.56348 16.7 6.85724 16.4062 7.21956 16.4062H13.7804C14.1428 16.4062 14.4365 16.7 14.4365 17.0623C14.4365 17.4247 14.1428 17.7184 13.7804 17.7184Z" fill="#EC6907" />
      <path d="M18.3725 6.55659C18.3698 6.38056 18.2979 6.21936 18.1806 6.10205C11.9073 -0.171217 12.2537 0.153708 12.1215 0.0829334C11.9096 -0.030405 12.508 0.00535157 4.05188 0.00535157C3.26618 0.00535157 2.62695 0.644582 2.62695 1.43028V19.5751C2.62695 20.3608 3.26618 21 4.05188 21H16.948C17.7337 21 18.373 20.3608 18.373 19.5751C18.373 19.3989 18.3732 6.60932 18.3725 6.55659ZM12.4682 5.7973V2.24534L16.133 5.9101C12.3207 5.9101 12.5757 5.91137 12.5583 5.90781C12.5069 5.89727 12.4682 5.85171 12.4682 5.7973ZM17.0608 19.5751C17.0608 19.6373 17.0102 19.6878 16.948 19.6878H4.05188C3.98968 19.6878 3.93912 19.6373 3.93912 19.5751V1.43024C3.93912 1.36804 3.98968 1.31748 4.05188 1.31748H11.156V5.7973C11.156 6.583 11.7953 7.22223 12.581 7.22223H17.0608V19.5751Z" fill="#EC6907" />
    </svg>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: ProductFull | null = await getProductBySlug(slug).catch(() => null);
  if (!product) notFound();

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
              <span className="text-[#ec6907] font-bold">/</span>
              <Link href="/shop" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
                Каталог
              </Link>
              {product.categoryTitle && (
                <>
                  <span className="text-[#ec6907] font-bold">/</span>
                  <Link
                    href={`/shop?category=${product.categorySlug}`}
                    className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors"
                  >
                    {product.categoryTitle}
                  </Link>
                </>
              )}
              <span className="text-[#ec6907] font-bold">/ {product.title}</span>
            </div>

            {/* Product head: image + info */}
            <div className="flex flex-col lg:flex-row gap-10 items-start">

              {/* Left: image */}
              <div className="w-full lg:w-[560px] flex-shrink-0">
                {product.mainImage ? (
                  <Image
                    src={urlFor(product.mainImage).width(1120).height(1120).url()}
                    alt={product.title}
                    width={560}
                    height={560}
                    className="w-full h-auto object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-300">Без фото</span>
                  </div>
                )}
              </div>

              {/* Right: info */}
              <div className="flex-1 w-full">
                {/* Title */}
                <div className="mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-1">
                    {product.title}
                  </h1>
                  {product.description && (
                    <p className="text-sm text-gray-500 font-medium">{product.description}</p>
                  )}
                </div>

                {/* Price */}
                {product.price != null && (
                  <div
                    className="flex items-baseline gap-1 mb-5"
                    style={{ fontFamily: "var(--font-fira-sans), sans-serif" }}
                  >
                    <span className="text-[2rem] font-bold text-gray-900 leading-[2.375rem]">
                      {product.price}
                    </span>
                    <span className="text-[2rem] font-bold text-gray-900 leading-[2.375rem]">грн</span>
                  </div>
                )}

                {/* Weight + Warranty + Technical card */}
                <div className="flex flex-col gap-3 mb-5">
                  {product.weight != null && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Вага:</span>
                      <span className="text-sm font-semibold text-gray-900">{product.weight} кг</span>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    {product.warranty && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Гарантія:</span>
                        <span className="text-sm font-semibold text-gray-900">{product.warranty}</span>
                      </div>
                    )}
                    {product.technicalCardUrl && (
                      <a
                        href={product.technicalCardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                      >
                        <span className="text-sm font-medium text-[#ec6907]">Технічна карта</span>
                        <DownloadIcon />
                      </a>
                    )}
                  </div>
                </div>

                {/* Separator */}
                <div className="border-t border-gray-200 mb-5" />

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {feature.icon && (
                          <Image
                            src={urlFor(feature.icon).width(40).height(40).url()}
                            alt={feature.label}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain flex-shrink-0"
                          />
                        )}
                        <span className="text-xs text-gray-500 leading-snug pt-1">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-3 max-w-sm">
                  <Link
                    href="/contact"
                    className="bg-[#ec6907] text-white font-bold h-[3.375rem] flex items-center justify-center border-2 border-transparent uppercase tracking-wide hover:bg-white hover:text-[#ec6907] hover:border-[#ec6907] transition-all duration-[400ms] text-base cursor-pointer"
                  >
                    Купити
                  </Link>
                  <Link
                    href="/de-kupyty"
                    className="bg-white text-gray-900 font-bold h-[3.375rem] flex items-center justify-center border-2 border-gray-900 uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-[400ms] text-base"
                  >
                    Де купити
                  </Link>
                </div>
              </div>
            </div>

            {/* Tabs */}
            {product.tabs && (
              <ProductTabs tabs={product.tabs} />
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

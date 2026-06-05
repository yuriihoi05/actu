import Link from "next/link";
import Image from "next/image";
import { getAllProducts, urlFor, productSlug, type Product } from "@/lib/sanity";

export default async function ProductsSection() {
  const products: Product[] = await getAllProducts().catch(() => []);
  const visible = products.slice(0, 6);

  if (visible.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Каталог товарів</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((product) => (
            <Link
              key={product._id}
              href={`/product/${productSlug(product.slug.current)}`}
              className="flex flex-col bg-white overflow-hidden group shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.14)] transition-shadow"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gray-50">
                {product.mainImage ? (
                  <Image
                    src={urlFor(product.mainImage).width(400).height(400).url()}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
              </div>
              {/* Info */}
              <div className="flex flex-col flex-1 p-4">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                    {product.title}
                  </p>
                  {product.description && (
                    <p className="text-sm text-gray-500 font-medium mb-8 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                </div>
                {product.price != null && (
                  <div
                    className="flex items-baseline gap-1 mt-auto justify-end"
                    style={{ fontFamily: "var(--font-fira-sans), sans-serif" }}
                  >
                    <span className="text-[2rem] font-bold text-[#ec6907] leading-[2.375rem]">
                      {product.price}
                    </span>
                    <span className="text-[2rem] font-bold text-[#ec6907] leading-[2.375rem]">грн</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/shop"
            className="bg-[#ec6907] text-white font-bold w-full max-w-[20rem] h-[3.375rem] flex items-center justify-center border-2 border-transparent uppercase tracking-wide hover:bg-white hover:text-[#ec6907] hover:border-[#ec6907] transition-all duration-[400ms] text-lg"
          >
            Більше товарів
          </Link>
        </div>
      </div>
    </section>
  );
}

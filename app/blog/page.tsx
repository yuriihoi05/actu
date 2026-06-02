import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, urlFor, type Post } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Блог | ACTU",
  description: "Корисні статті про будівельні суміші, поради з монтажу та новини компанії ACTU.",
};

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts().catch(() => []);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <Link href="/" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
                Головна
              </Link>
              <span className="text-[#ec6907] font-bold">/ Блог</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Блог</h1>

            {posts.length === 0 ? (
              <p className="text-sm text-gray-500">Публікацій поки немає.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="flex flex-col group bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.14)] transition-shadow"
                  >
                    {/* Image */}
                    <div className="overflow-hidden aspect-[16/9] bg-gray-100">
                      {post.mainImage ? (
                        <Image
                          src={urlFor(post.mainImage).width(600).height(340).url()}
                          alt={post.title}
                          width={600}
                          height={340}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">Без зображення</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex-1">
                        {post.publishedAt && (
                          <p className="text-xs text-gray-400 mb-2">{formatDate(post.publishedAt)}</p>
                        )}
                        <p className="text-base font-semibold text-gray-900 leading-snug mb-3">
                          {post.title}
                        </p>
                        {post.excerpt && (
                          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                      <span className="mt-8 text-[1.125rem] font-bold text-[#ec6907] uppercase leading-[1.375rem]">
                        Детальніше
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

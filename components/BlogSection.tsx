import Link from "next/link";
import Image from "next/image";
import { getAllPosts, urlFor, type Post } from "@/lib/sanity";

export default async function BlogSection() {
  const posts: Post[] = await getAllPosts().catch(() => []);
  const visible = posts.slice(0, 6);

  if (visible.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Блог</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="flex flex-col group bg-white overflow-hidden hover:shadow-md transition-shadow"
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
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex-1">
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
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="bg-[#ec6907] text-white font-bold w-full max-w-[20rem] h-[3.375rem] flex items-center justify-center border-2 border-transparent uppercase tracking-wide hover:bg-white hover:text-[#ec6907] hover:border-[#ec6907] transition-all duration-[400ms] text-lg"
          >
            Більше статей
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPostSlugs, urlFor, type PostFull } from "@/lib/sanity";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs().catch(() => []);
  return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return { title: "Пост не знайдено | ACTU" };
  return {
    title: `${post.title} | ACTU`,
    description: post.excerpt,
  };
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: object; alt?: string; caption?: string } }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(900).url()}
            alt={value.alt || ""}
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-400 mt-2 text-center">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#ec6907] pl-5 py-1 my-6 text-gray-600 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline">{children}</span>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#ec6907] underline hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: PostFull | null = await getPostBySlug(slug).catch(() => null);

  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="py-12 bg-white">
          <div className="max-w-[800px] mx-auto px-5">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm flex-wrap">
              <Link href="/" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
                Головна
              </Link>
              <span className="text-[#ec6907] font-bold">/</span>
              <Link href="/blog" className="font-bold text-gray-900 hover:text-[#ec6907] transition-colors">
                Блог
              </Link>
              <span className="text-[#ec6907] font-bold">/ {post.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            {post.publishedAt && (
              <p className="text-sm text-gray-400 mb-8">{formatDate(post.publishedAt)}</p>
            )}

            {/* Main image */}
            {post.mainImage && (
              <div className="mb-10 overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).width(900).height(500).url()}
                  alt={post.title}
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-base font-semibold text-gray-600 leading-relaxed mb-8 border-l-4 border-[#ec6907] pl-5">
                {post.excerpt}
              </p>
            )}

            {/* Body */}
            {post.body && (
              <div className="prose-content">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>
            )}

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#ec6907] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Повернутись до блогу
              </Link>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

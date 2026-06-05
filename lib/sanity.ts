import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const client = createClient({
  projectId: "i4htiqb3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Strip any leading "product/" prefix so links are always /product/[clean-slug]
export function productSlug(slug: string): string {
  return slug.replace(/^product\//, "");
}

// ------------------------------------------------------------------ Posts

export async function getAllPosts() {
  return client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, mainImage, excerpt, publishedAt
    }`
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch<PostFull | null>(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, mainImage, excerpt, body, publishedAt
    }`,
    { slug }
  );
}

export async function getAllPostSlugs() {
  return client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"] { slug }`
  );
}

// ---------------------------------------------------------------- Products

export async function getAllProducts(categorySlug?: string) {
  const filter = categorySlug
    ? `*[_type == "product" && category->slug.current == $categorySlug]`
    : `*[_type == "product"]`;
  return client.fetch<Product[]>(
    `${filter} | order(_createdAt asc) {
      _id, title, slug, mainImage, description, price,
      "categorySlug": category->slug.current,
      "categoryTitle": category->title
    }`,
    categorySlug ? { categorySlug } : {}
  );
}

export async function getProductBySlug(slug: string) {
  return client.fetch<ProductFull | null>(
    `*[_type == "product" && (slug.current == $slug || slug.current == "product/" + $slug)][0] {
      _id, title, slug, description, mainImage,
      price, weight, warranty,
      "technicalCardUrl": technicalCard.asset->url,
      features[] { label, icon },
      tabs { characteristics, application, preparation, storage },
      "categorySlug": category->slug.current,
      "categoryTitle": category->title
    }`,
    { slug }
  );
}

export async function getAllProductSlugs() {
  return client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "product"] { slug }`
  );
}

// --------------------------------------------------------------- Categories

export async function getAllCategories() {
  return client.fetch<Category[]>(
    `*[_type == "category"] | order(title asc) {
      _id, title, slug,
      "count": count(*[_type == "product" && references(^._id)])
    }`
  );
}

export async function getCategoryBySlug(slug: string) {
  return client.fetch<Category | null>(
    `*[_type == "category" && slug.current == $slug][0] {
      _id, title, slug,
      "count": count(*[_type == "product" && references(^._id)])
    }`,
    { slug }
  );
}

export async function getAllCategorySlugs() {
  return client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "category"] { slug }`
  );
}

// -------------------------------------------------------------------- Types

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: SanityImageSource;
  excerpt?: string;
  publishedAt?: string;
}

export interface PostFull extends Post {
  body?: Block[];
}

export interface Block {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

export interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: SanityImageSource;
  description?: string;
  price?: number;
  categorySlug?: string;
  categoryTitle?: string;
}

export interface ProductFull extends Product {
  weight?: number;
  warranty?: string;
  technicalCardUrl?: string;
  features?: { label: string; icon?: SanityImageSource }[];
  tabs?: {
    characteristics?: Block[];
    application?: Block[];
    preparation?: Block[];
    storage?: Block[];
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  count?: number;
}

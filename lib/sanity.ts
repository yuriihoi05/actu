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

// ---- GROQ queries ----

export async function getAllPosts() {
  return client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt
    }`
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch<PostFull | null>(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      body,
      publishedAt
    }`,
    { slug }
  );
}

export async function getAllPostSlugs() {
  return client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"] { slug }`
  );
}

// ---- Types ----

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

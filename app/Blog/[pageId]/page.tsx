import { BlogCards } from "@/app/_data/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts = BlogCards.flatMap((category) => category.value);

export function generateStaticParams() {
  return posts.map((post) => ({ pageId: post.postId }));
}

export default function NotePage({ params }: { params: { pageId: string } }) {
  const post = posts.find((item) => item.postId === params.pageId);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-12 lg:py-20">
      <Link
        href="/Blog"
        className="mb-8 inline-flex text-sm text-gray-400 transition-colors hover:text-teal-300"
      >
        ← Back to Blog
      </Link>
      <img
        src={post.image}
        alt={post.title}
        className="mb-8 aspect-[16/9] w-full rounded-2xl border border-white/10 object-cover"
      />
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs text-teal-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="mb-5 text-3xl font-bold text-white sm:text-5xl">
        {post.title}
      </h1>
      <p className="max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
        {post.description}
      </p>
    </article>
  );
}

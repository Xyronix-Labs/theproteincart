"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  img: string;
  title: string;
  desc: string;
  tag: string;
  date: string;
  readTime: string;
  slug: string;
  content?: string; // full content (add in your JSON)
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch("/jsonFiles/blogs.json");
        const data: BlogPost[] = await res.json();
        const found = data.find((p) => p.slug === slug);
        setPost(found || null);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading blog...</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-red-500">Blog not found.</p>
        <button
          onClick={() => router.push("/blogs")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Blogs
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={post.img}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-xl"
            priority
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {post.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="mr-4">{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content || post.desc}
          </p>

          <div className="mt-8">
            <Link
              href="/blogs"
              className="text-blue-600 font-semibold hover:underline"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

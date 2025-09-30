"use client";

// import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type BlogPost = {
  img: string;
  title: string;
  desc: string;
  tag: string;
  date: string;
  readTime: string;
  slug: string;
};

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/jsonFiles/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-50 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-12 w-12 rounded-full bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">
            Loading articles...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-pink-100 rounded-full mb-4 sm:mb-6">
            <span className="text-blue-600 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Fitness Insights
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-5 leading-tight">
            Expert Fitness <span className="text-blue-600">Blogs</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest research, tips, and strategies to optimize your
            fitness journey and achieve your goals.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
           <article
  key={i}
  className="bg-white rounded-lg md:rounded-xl border border-gray-100 overflow-hidden 
             transition-all duration-300 hover:shadow-lg group flex flex-col
             w-[90%] sm:w-[280px] md:w-[320px] lg:w-[350px] mx-auto"
>
  {/* Image container (reduced height) */}
  <div className="relative overflow-hidden">
    <img
      src={post.img}
      alt={post.title}
      className="w-full h-32 sm:h-60 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute top-2 left-2">
      <span className="text-[10px] sm:text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded-full">
        {post.tag}
      </span>
    </div>
  </div>

  {/* Content (reduced padding & spacing) */}
  <div className="p-3 sm:p-4 flex flex-col flex-grow">
    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
      <span className="flex items-center">
        <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {post.date}
      </span>
      <span className="flex items-center">
        <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {post.readTime}
      </span>
    </div>

    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-snug">
      {post.title}
    </h3>

    <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">
      {post.desc}
    </p>

    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
      <Link
        href={`/blogs/${post.slug}`}
        className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center group/link"
      >
        Read
        <svg
          className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>

      <button
        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 p-1 rounded-full hover:bg-pink-50"
        aria-label="Save article"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </button>
    </div>
  </div>
</article>

          ))}
        </div>
      </div>
    </section>
  );
}

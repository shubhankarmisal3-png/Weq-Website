"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getPosts } from "../../lib/api";

export default function BlogClient() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts(20);

      console.log("posts", data);

      const postsList = Array.isArray(data)
        ? data
        : data && typeof data === "object" && "posts" in data && Array.isArray((data as any).posts)
        ? (data as any).posts
        : [];

      setPosts(postsList);
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.length > 0 ? (
        posts.map((post: any) => (
          <div
            key={post.id}
            className="group flex flex-col bg-[#262220] border border-[#3a3330] rounded-2xl overflow-hidden hover:border-[#e8622a] transition-all duration-300"
          >
            {/* Image */}
            <div className="h-48 bg-[#1e1b18] overflow-hidden flex items-center justify-center border-b border-[#3a3330] relative">
              {post._embedded && post._embedded["wp:featuredmedia"] ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${post._embedded["wp:featuredmedia"][0].source_url})`,
                  }}
                />
              ) : (
                <div className="text-[#e8622a] font-bold text-3xl opacity-20">WEQ</div>
              )}
            </div>

            <div className="p-6 flex-1 flex flex-col">
              {/* Date */}
              {post.date && (
                <span className="text-xs text-gray-500 mb-3 block">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              )}

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#e8622a] transition-colors leading-tight line-clamp-2">
                <Link href={`/blog/${post.slug}`}>
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>
              </h2>

              <div
                className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || "" }}
              />

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-[#e8622a] font-semibold text-sm group-hover:gap-3 transition-all mt-auto w-fit"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">No posts found.</div>
      )}
    </div>
  );
}
"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getPosts } from "../../lib/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageCache, setPageCache] = useState<Record<number, { data: any[], totalPages: number }>>({});
  const [loading, setLoading] = useState(true);

  const postsPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      // Check cache first
      if (pageCache[page]) {
        setPosts(pageCache[page].data);
        setTotalPages(pageCache[page].totalPages);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      setLoading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      const { data, totalPages: total } = await getPosts(postsPerPage, page);

      if (data) {
        setPosts(data);
        setTotalPages(total);
        // Save to cache
        setPageCache(prev => ({ ...prev, [page]: { data, totalPages: total } }));
      }
      setLoading(false);
    }

    fetchData();
  }, [page]);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1c1a19] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <h1 className="text-white mb-6">
              Insights, Trends & Tech Blogs from WEQ
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We at WEQ believe that our clients should be able to get to know about the latest trends,
              process and practices that can be helpful for their business.
            </p>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e8622a]"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post: any) => (
                  <div
                    key={post.id}
                    className="flex flex-col bg-[#262220] border border-[#3a3330] rounded-2xl overflow-hidden hover:border-[#e8622a] transition-all duration-300 group shadow-lg"
                  >
                    {/* Featured Image */}
                    <div className="relative h-60 bg-[#1e1b18] overflow-hidden">
                      {post._embedded && post._embedded["wp:featuredmedia"] ? (
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${post._embedded["wp:featuredmedia"][0].source_url})`,
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-[#e8622a] font-bold text-4xl opacity-10">
                          WEQ
                        </div>
                      )}
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#e8622a] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                          Softwares
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col">
                      <h2 className="text-white mb-4 group-hover:text-[#e8622a] transition-colors leading-tight line-clamp-2 uppercase">
                        <Link href={`/blog/${post.slug}`}>
                          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                      </h2>

                      <div
                        className="text-gray-400 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || "" }}
                      />

                      {/* Footer */}
                      <div className="pt-6 border-t border-[#3a3330] flex items-center justify-between text-xs font-medium text-gray-500">
                        <div className="flex items-center gap-2">
                          <span className="text-white">weqtechnologies</span>
                          <span className="text-gray-700">•</span>
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
                  <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="flex items-center gap-1 px-4 py-2 text-[#e8622a] font-bold hover:gap-2 transition-all disabled:opacity-30 disabled:pointer-events-none"
                  >
                    « Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    const p = i + 1;
                    // Show current page, and those around it, or first/last
                    if (p === 1 || p === totalPages || (p >= page - 1 && p <= page + 1)) {
                      return (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`w-10 h-10 rounded-lg font-bold transition-all ${
                            page === p
                              ? "bg-[#e8622a] text-white shadow-lg shadow-[#e8622a]/20"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    } else if (p === page - 2 || p === page + 2) {
                      return <span key={p} className="text-gray-600">...</span>;
                    }
                    return null;
                  })}

                  <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="flex items-center gap-1 px-4 py-2 text-[#e8622a] font-bold hover:gap-2 transition-all disabled:opacity-30 disabled:pointer-events-none"
                  >
                    Next »
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
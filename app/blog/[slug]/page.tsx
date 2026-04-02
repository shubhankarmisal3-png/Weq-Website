import { getPostBySlug, getPosts } from '../../../lib/api';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export async function generateStaticParams() {
  const posts = await getPosts(10);
  return (posts || []).map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  const hasAcfStructure = post.acf && Object.keys(post.acf).length > 0;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen bg-[#1e1b18] text-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              {post.title?.rendered}
            </h1>
            {post.date && (
               <time className="text-gray-400 text-sm">
                 {new Date(post.date).toLocaleDateString('en-US', {
                   year: 'numeric',
                   month: 'long',
                   day: 'numeric'
                 })}
               </time>
            )}
          </header>

          {hasAcfStructure ? (
            <div className="space-y-6">
              {/* Map out structured ACF content here based on exact implementation */}
              {post.acf.author && (
                 <p className="text-[#e8622a] font-semibold">{post.acf.author}</p>
              )}
              {post.acf.summary && (
                 <p className="text-gray-300 text-lg leading-relaxed">{post.acf.summary}</p>
              )}
            </div>
          ) : (
            <div 
              className="mt-8 [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-gray-300 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-6 [&>h2]:mt-10 [&>h2]:text-white [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8 [&>h3]:text-white [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-gray-300 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-gray-300 [&>blockquote]:border-l-4 [&>blockquote]:border-[#e8622a] [&>blockquote]:pl-4 [&>blockquote]:italic [&>img]:rounded-2xl [&>img]:my-8 [&>img]:w-full [&>figure]:my-8 [&>figure>img]:rounded-2xl [&>figure>img]:w-full [&>a]:text-[#e8622a] [&>a:hover]:underline"
              dangerouslySetInnerHTML={{ __html: post.content?.rendered || '' }} 
            />
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

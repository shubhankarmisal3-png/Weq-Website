import { getCustomPostBySlug, getCustomPosts } from '../../../lib/api';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getCustomPosts('case-studies', 20);
  return (posts || []).map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function CaseStudy({ params }: { params: { slug: string } }) {
  const post = await getCustomPostBySlug('case-studies', params.slug);
  
  if (!post) {
    // Optionally fallback to local data if you don't want 404 for existing hardcoded ones
    // For now we assume strict API or bust since we're converting
    notFound();
  }

  const hasAcfStructure = post.acf && Object.keys(post.acf).length > 0;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen bg-[#1e1b18] text-white">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-[#e8622a] text-sm font-semibold mb-8 inline-block hover:underline">
            &larr; Back to Case Studies
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
              {post.title?.rendered}
            </h1>
            {hasAcfStructure && post.acf.subtitle && (
               <p className="text-xl text-gray-400">{post.acf.subtitle}</p>
            )}
          </header>

          {hasAcfStructure ? (
            <div className="space-y-8">
              {post.acf.client_name && (
                 <div className="bg-[#262220] p-6 rounded-2xl border border-[#3a3330]">
                   <h3 className="text-lg font-bold text-white mb-2">Client Overview</h3>
                   <p className="text-gray-400">{post.acf.client_name}</p>
                 </div>
              )}
              {post.acf.challenge && (
                 <div>
                   <h2 className="text-2xl font-bold mb-4 text-[#e8622a]">The Challenge</h2>
                   <p className="text-gray-300 leading-relaxed">{post.acf.challenge}</p>
                 </div>
              )}
              {post.acf.solution && (
                 <div>
                   <h2 className="text-2xl font-bold mb-4 text-[#e8622a]">The Solution</h2>
                   <p className="text-gray-300 leading-relaxed">{post.acf.solution}</p>
                 </div>
              )}
              {post.acf.results && (
                 <div>
                   <h2 className="text-2xl font-bold mb-4 text-[#e8622a]">Results</h2>
                   <p className="text-gray-300 leading-relaxed">{post.acf.results}</p>
                 </div>
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

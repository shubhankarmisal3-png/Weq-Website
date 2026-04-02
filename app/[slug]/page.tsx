import { getPageBySlug, getPages } from '../../lib/api';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export async function generateStaticParams() {
  const pages = await getPages(10); // fetch some pages to prerender
  return (pages || []).map((page: any) => ({
    slug: page.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug);
  
  if (!page) {
    notFound();
  }

  // Attempt to use ACF fields for structured data, otherwise fallback
  const hasAcfStructure = page.acf && Object.keys(page.acf).length > 0;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen bg-[#1e1b18] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
            {page.title?.rendered}
          </h1>

          {hasAcfStructure ? (
            <div className="space-y-8">
              {/* Map out structured ACF content here based on setup */}
              {page.acf.hero_title && (
                <h2 className="text-3xl font-bold text-[#e8622a]">{page.acf.hero_title}</h2>
              )}
              {page.acf.description && (
                <p className="text-gray-300 text-lg leading-relaxed">{page.acf.description}</p>
              )}
            </div>
          ) : (
             <div 
              className="mt-8 [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-gray-300 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-6 [&>h2]:mt-10 [&>h2]:text-white [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8 [&>h3]:text-white [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:text-gray-300 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-gray-300 [&>blockquote]:border-l-4 [&>blockquote]:border-[#e8622a] [&>blockquote]:pl-4 [&>blockquote]:italic [&>img]:rounded-2xl [&>img]:my-8 [&>img]:w-full [&>figure]:my-8 [&>figure>img]:rounded-2xl [&>figure>img]:w-full [&>a]:text-[#e8622a] [&>a:hover]:underline"
              dangerouslySetInnerHTML={{ __html: page.content?.rendered || '' }} 
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

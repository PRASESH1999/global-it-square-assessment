import { Footer } from './footer';
import { Header } from './header';
import { MetaTags } from './meta-tags';
import { Sidebar } from './sidebar';

interface LayoutProps {
  children: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogUrl?: string;
  };
}

export function Layout({ children, meta }: LayoutProps) {
  const defaultMeta = {
    title: 'Product Showcase | Assessment',
    description:
      'Explore our wide range of .NET and Node.js products in our showcase.',
    keywords: '.NET, Node.js, products, showcase, assessment',
    ogImage: 'https://example.com/default-og-image.jpg',
    ogUrl: 'https://example.com',
  };

  const pageMeta = { ...defaultMeta, ...meta };

  return (
    <>
      <MetaTags {...pageMeta} />
      <div className="min-h-screen bg-background flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-100 p-6">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}

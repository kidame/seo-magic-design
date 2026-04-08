import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const blogJsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog | KUMO",
    description: "Articles SEO, guides pratiques et actualités pour les PME de Suisse romande.",
    url: "https://kumo-seo.ch/blog",
    publisher: {
      "@type": "ProfessionalService",
      name: "KUMO SEO",
      url: "https://kumo-seo.ch",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://kumo-seo.ch/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://kumo-seo.ch/blog",
      },
    ],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Blog SEO | Guides et actualités pour PME | KUMO"
        description="Articles SEO, guides pratiques et actualités pour les PME de Suisse romande. Analyses terrain et conseils concrets par KUMO."
        canonical="https://kumo-seo.ch/blog"
        jsonLd={blogJsonLd}
      />
      <a href="#blog-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
        Aller au contenu principal
      </a>
      <Navbar />

      <main className="pt-32 md:pt-40 pb-24 md:pb-40" id="blog-content">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">
              <span className="font-jp" aria-hidden="true">記事</span>{" "}
              Blog
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Analyses et guides{" "}
              <span className="text-gradient">SEO</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Des articles concrets pour comprendre le référencement naturel et prendre les bonnes décisions pour votre entreprise en Suisse romande.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {blogPosts.map((post, i) => (
              <div key={post.slug} role="listitem">
                <BlogCard post={post} index={i} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

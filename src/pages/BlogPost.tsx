import { lazy, Suspense, useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { blogPosts, getBlogPostBySlug, formatDate } from "@/data/blogPosts";

const articleComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  "site-invisible-google-pme-suisse": lazy(() => import("@/content/blog/SiteInvisibleGoogle")),
  "mise-a-jour-google-mars-2026-pme-suisse": lazy(() => import("@/content/blog/MiseAJourGoogle2026")),
  "creer-site-internet-pme-suisse-2026": lazy(() => import("@/content/blog/CreerSiteInternet2026")),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  const { prevPost, nextPost } = useMemo(() => {
    if (!post) return { prevPost: undefined, nextPost: undefined };
    const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
    return {
      prevPost: currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined,
      nextPost: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined,
    };
  }, [post]);

  if (!post || !slug) {
    return <Navigate to="/blog" replace />;
  }

  const ArticleContent = articleComponents[slug];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo_description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "ProfessionalService",
      name: "KUMO — Consultant SEO & Création Web",
      url: "https://kumo-seo.ch",
      logo: {
        "@type": "ImageObject",
        url: "https://kumo-seo.ch/og-image.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.canonical,
    },
    image: `https://kumo-seo.ch${post.og_image}`,
    wordCount: post.word_count,
    keywords: [post.primary_keyword, ...post.secondary_keywords].join(", "),
  };

  const faqItems = extractFaqFromSlug(slug);
  const faqJsonLd = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : undefined;

  return (
    <div className="min-h-screen">
      <SeoHead
        title={post.seo_title}
        description={post.seo_description}
        canonical={post.canonical}
        jsonLd={articleJsonLd}
        ogImage={`https://kumo-seo.ch${post.og_image}`}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Navbar />

      <main className="pt-32 md:pt-40 pb-24 md:pb-40">
        <article className="container max-w-3xl mx-auto px-4">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Retour au blog
            </Link>
          </motion.div>

          {/* Article header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-primary mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User size={14} /> {post.author}
              </span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} /> {post.reading_time}
              </span>
            </div>
            <hr className="border-border/50 mt-8" />
          </motion.header>

          {/* Article content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-muted-foreground">Chargement…</div>}>
              {ArticleContent && <ArticleContent />}
            </Suspense>
          </motion.div>

          {/* Navigation between articles */}
          <nav className="mt-16 pt-8 border-t border-border/50">
            <div className="flex justify-between gap-4">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group flex-1 glass-card rounded-xl p-5 transition-all duration-300 hover:border-primary/30"
                >
                  <span className="text-xs text-muted-foreground/60 flex items-center gap-1 mb-2">
                    <ArrowLeft size={12} /> Article précédent
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : <div className="flex-1" />}
              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group flex-1 glass-card rounded-xl p-5 text-right transition-all duration-300 hover:border-primary/30"
                >
                  <span className="text-xs text-muted-foreground/60 flex items-center justify-end gap-1 mb-2">
                    Article suivant <ArrowRight size={12} />
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              ) : <div className="flex-1" />}
            </div>
          </nav>

          {/* CTA */}
          <div className="mt-12 glass-card rounded-xl p-8 md:p-10 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary mb-3">
              Besoin d'un diagnostic ?
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Votre site mérite d'être{" "}
              <span className="text-gradient">visible</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Échangeons 15 minutes sur votre situation. C'est gratuit et sans engagement.
            </p>
            <Button variant="hero" className="rounded-full" asChild>
              <Link to="/contact">Prendre contact</Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

function extractFaqFromSlug(slug: string): { question: string; answer: string }[] {
  const faqMap: Record<string, { question: string; answer: string }[]> = {
    "site-invisible-google-pme-suisse": [
      {
        question: "Combien de temps faut-il pour apparaître sur Google après avoir corrigé ces problèmes ?",
        answer: "Les corrections techniques (indexation, vitesse) peuvent produire des effets en quelques semaines. Le travail de fond sur les mots-clés et le contenu demande généralement 3 à 6 mois pour des résultats significatifs.",
      },
      {
        question: "Mon site a été fait par un professionnel, pourquoi aurait-il ces problèmes ?",
        answer: "Créer un site web et optimiser un site pour Google sont deux métiers différents. Beaucoup de développeurs et d'agences web excellent dans le design et le développement, mais n'intègrent pas de stratégie SEO dans leur processus de création.",
      },
      {
        question: "Est-ce que payer Google Ads peut remplacer le référencement naturel ?",
        answer: "Google Ads génère du trafic immédiat, mais uniquement tant que vous payez. Le référencement naturel construit un actif durable : une fois bien positionné, votre site continue d'attirer des visiteurs sans coût additionnel.",
      },
      {
        question: "Combien coûte un audit SEO en Suisse ?",
        answer: "Chez KUMO, l'audit SEO complet est proposé à 1 200 CHF forfaitaire. Il comprend l'analyse technique, l'étude concurrentielle, un rapport interactif et une restitution en visioconférence avec un plan d'action concret.",
      },
    ],
    "mise-a-jour-google-mars-2026-pme-suisse": [
      {
        question: "Mon site est petit (5-10 pages), est-il concerné par cette mise à jour ?",
        answer: "Les petits sites sont généralement moins exposés aux spam updates, à condition que leur contenu soit original et que leur prestataire n'ait pas utilisé de techniques douteuses.",
      },
      {
        question: "Comment savoir si mon prestataire SEO utilise des techniques risquées ?",
        answer: "Demandez-lui directement quelle est sa stratégie de netlinking et comment il produit le contenu. S'il ne peut pas vous répondre clairement, ou s'il vous promet des résultats garantis en quelques semaines, ce sont des signaux d'alerte.",
      },
      {
        question: "Google pénalise-t-il les sites qui utilisent l'IA pour rédiger ?",
        answer: "Non. Google pénalise le contenu sans valeur ajoutée, quelle que soit la manière dont il a été produit. Un texte rédigé avec l'aide de l'IA mais enrichi par une expertise métier réelle ne pose aucun problème.",
      },
      {
        question: "Cette mise à jour affecte-t-elle le référencement local ?",
        answer: "La spam update de mars 2026 cible principalement le contenu web. Le référencement local fonctionne sur des critères différents, bien qu'il soit indirectement lié à la qualité de votre site.",
      },
    ],
    "creer-site-internet-pme-suisse-2026": [
      {
        question: "Quel budget prévoir pour un site web de PME en Suisse en 2026 ?",
        answer: "Les sites sur-mesure orientés performance se situent entre 3 900 et 6 500 CHF. Les agences traditionnelles facturent généralement entre 6 000 et 15 000 CHF. Le critère de choix ne devrait pas être le prix seul, mais le retour sur investissement attendu.",
      },
      {
        question: "WordPress est-il un bon choix pour une PME suisse ?",
        answer: "WordPress représente plus de 40% des sites web dans le monde, mais sa popularité en fait une cible pour les attaques de sécurité. Pour une PME qui veut un site rapide et sécurisé, des alternatives plus légères offrent de meilleures performances.",
      },
      {
        question: "Combien de temps prend la création d'un site web professionnel ?",
        answer: "Pour un site de 5 à 8 pages avec étude stratégique préalable, comptez entre 4 et 6 semaines incluant l'étude de mots-clés, la conception, le développement et les tests.",
      },
      {
        question: "Faut-il un blog sur un site de PME ?",
        answer: "Un blog n'est pas obligatoire, mais une section de contenu stratégique est fortement recommandée. Trois articles bien écrits et bien positionnés peuvent générer plus de trafic qualifié que 50 articles génériques.",
      },
    ],
  };

  return faqMap[slug] || [];
}

export default BlogPost;

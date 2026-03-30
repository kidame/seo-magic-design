import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime: string;
    author: string;
  };
}

const SeoHead = ({ title, description, canonical, jsonLd, noIndex, ogImage = "https://kumo-seo.ch/og-image.jpg", ogType = "website", article }: SeoHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    if (noIndex) {
      setMeta("robots", "noindex, follow");
    }
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", ogType, "property");
    if (article) {
      setMeta("article:published_time", article.publishedTime, "property");
      setMeta("article:author", article.author, "property");
    }
    setMeta("og:image", ogImage, "property");
    setMeta("twitter:image", ogImage, "name");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    // JSON-LD (supports single object or array of objects)
    const scriptId = "page-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      if (Array.isArray(jsonLd)) {
        script.textContent = JSON.stringify(jsonLd);
      } else {
        script.textContent = JSON.stringify(jsonLd);
      }
    }

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [title, description, canonical, jsonLd, ogType, article]);

  return null;
};

export default SeoHead;

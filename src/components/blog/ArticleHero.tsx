import { BlogPost } from "@/data/blogPosts";

interface ArticleHeroProps {
  post: BlogPost;
}

const ArticleHero = ({ post }: ArticleHeroProps) => {
  if (!post.hero_image) return null;
  return (
    <figure className="relative aspect-[16/9] rounded-xl overflow-hidden border border-primary/10 bg-[#0a0714] mb-12 md:mb-16">
      <img
        src={post.hero_image}
        alt={post.hero_alt ?? post.cover_alt ?? ""}
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </figure>
  );
};

export default ArticleHero;

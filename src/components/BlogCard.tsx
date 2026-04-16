import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogPost, formatDate } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block h-full glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_4px_24px_hsl(265_70%_42%/0.15)]"
      >
        <span className="inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-primary-light mb-4">
          {post.category}
        </span>

        <h2 className="text-lg font-semibold leading-snug mb-3 group-hover:text-primary-light transition-colors">
          {post.title}
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <time dateTime={post.date} className="font-mono text-xs text-muted-foreground/80">
            {formatDate(post.date)} · {post.reading_time}
          </time>
          <span className="text-sm text-primary-light font-medium inline-flex items-center gap-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity" aria-hidden="true">
            Lire <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    visualizer({ filename: "dist/stats.html", gzipSize: true, brotliSize: true, template: "treemap" }),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-ogl': ['ogl'],
          'vendor-gsap': ['gsap', 'gsap/ScrollTrigger'],
          'vendor-icons': ['lucide-react'],
          'vendor-radix': ['@radix-ui/react-tooltip', '@radix-ui/react-toast', '@radix-ui/react-slot'],
          'vendor-query': ['@tanstack/react-query'],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  esbuild: {
    legalComments: "none",
  },
}));

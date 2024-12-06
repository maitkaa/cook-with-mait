import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://maitkaa.github.io",
  markdown: {
    smartypants: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "snazzy-light",
        dark: "github-dark",
      },
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
    prefetch: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      gfm: true,
    }),
  ],
});

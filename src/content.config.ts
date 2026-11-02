import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogFrontMatter = z.object({
  title: z.string(),
  date: z.iso.date(),
  heroImage: z.url(),
  categories: z.string().array().default([]),
});

export type BlogFrontMatter = z.infer<typeof blogFrontMatter>;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: blogFrontMatter,
});

export const collections = { blog };

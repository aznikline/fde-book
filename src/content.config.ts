import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 原文与译文的 collection 配置。
// 两边共用 slug，页面层据此配对逐段并排渲染。
const chaptersZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chaptersZh' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const chaptersEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chaptersEn' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

// 工作手册（单文件）
const handbook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/handbook' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { chaptersZh, chaptersEn, handbook };

import { defineCollection, z } from "astro:content";
const helpcenter = defineCollection({
  schema: z.object({
    title: z.string(),
    intro: z.string(),
  }),
});
const changelog = defineCollection({
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    pubDate: z.date(),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
const customers = defineCollection({
  schema: z.object({
    story: z.string(),
    about: z.string(),
    founded: z.string(),
    website: z.string(),
    industry: z.string(),
    headquarters: z.string(),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
const studiosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    category: z.array(z.string()),
    url: z.string().url(),
    features: z.array(z.string()),
    paid: z.boolean(),
    price: z.string(),
    order: z.number(),
  }),
});
export const collections = {
  helpcenter: helpcenter,
  changelog: changelog,
  infopages: infopages,
  customers: customers,
  posts: postsCollection,
  studios: studiosCollection,
};

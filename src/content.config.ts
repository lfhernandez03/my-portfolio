import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    demolink: z.string().url(),
    codelink: z.string().url(),
    image: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
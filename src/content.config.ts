import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    codelink: z.string().url(),
    image: z.string(),
    body: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
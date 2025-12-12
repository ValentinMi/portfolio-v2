import { defineCollection, z } from 'astro:content';

const experiencesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    period: z.string(),
    order: z.number(),
    technologies: z.array(z.string()),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    technologies: z.array(z.string()),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    order: z.number(),
  }),
});

const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    order: z.number(),
    items: z.array(z.object({
      name: z.string(),
      level: z.number(),
    })),
  }),
});

export const collections = {
  experiences: experiencesCollection,
  projects: projectsCollection,
  skills: skillsCollection,
};

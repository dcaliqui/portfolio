import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectRoutes = PROJECTS.map((project) => ({
        url: `https://me.toinfinite.dev/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: 'https://me.toinfinite.dev',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...projectRoutes,
    ];
}

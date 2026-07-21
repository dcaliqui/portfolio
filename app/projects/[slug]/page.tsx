import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return {
            title: 'Projeto não encontrado',
        };
    }

    const cleanDescription = project.description
        .replace(/<[^>]*>/g, '')
        .substring(0, 160);

    return {
        title: `${project.title} - ${project.techStack.slice(0, 3).join(', ')} | Damásio Caliqui`,
        description: cleanDescription,
        keywords: [
            project.title,
            ...project.techStack,
            'Escola 42',
            'Damásio Caliqui',
            'projeto',
        ],
        authors: [{ name: 'Damásio Caliqui' }],
        openGraph: {
            type: 'article',
            title: project.title,
            description: cleanDescription,
            url: `https://me.toinfinite.dev/projects/${project.slug}`,
            images: [
                {
                    url: `https://me.toinfinite.dev${project.thumbnail}`,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            publishedTime: new Date(project.year, 0).toISOString(),
            authors: ['Damásio Caliqui'],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: cleanDescription,
            images: [`https://me.toinfinite.dev${project.thumbnail}`],
        },
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;

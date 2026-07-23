'use client';

import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const getPlainDescription = (description: string) =>
    description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

interface ProjectCardProps {
    project: IProject;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = project.images.length ? project.images : [project.thumbnail];

    return (
        <article className="grid overflow-hidden border border-border bg-card shadow-2xl lg:grid-cols-2">
            <div className="relative min-h-[280px] sm:min-h-[420px] lg:min-h-[560px]">
                <Image
                    src={images[imageIndex]}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    aria-hidden="true"
                    className="scale-110 object-cover object-center opacity-35 blur-2xl"
                />
                <Image
                    key={images[imageIndex]}
                    src={images[imageIndex]}
                    alt={`${project.title} — imagem ${imageIndex + 1}`}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="relative z-[1] object-contain object-center"
                    priority={index === 0 && imageIndex === 0}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/3 bg-gradient-to-t from-card/80 to-transparent" />

                {images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-5 z-[3] flex justify-center gap-3">
                        {images.map((image, currentImageIndex) => (
                            <button
                                type="button"
                                key={image}
                                aria-label={`Ver imagem ${currentImageIndex + 1} de ${project.title}`}
                                aria-current={imageIndex === currentImageIndex}
                                onClick={() => setImageIndex(currentImageIndex)}
                                className={`h-2.5 rounded-full transition-all ${
                                    imageIndex === currentImageIndex
                                        ? 'w-10 bg-primary'
                                        : 'w-2.5 bg-foreground/70 hover:bg-primary'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="flex min-h-[560px] flex-col p-6 text-left sm:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4 font-mono text-sm text-primary sm:text-base">
                    <span>_{String(index + 1).padStart(2, '0')}. PROJECTO</span>
                    <span className="text-muted-foreground">{project.year}</span>
                </div>

                <h3 className="mt-9 font-anton text-4xl leading-none sm:text-5xl">
                    {project.title}
                </h3>
                <p className="mt-6 text-justify text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {getPlainDescription(project.description)}
                </p>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                    <div>
                        <p className="font-mono text-sm text-primary">MINHA FUNÇÃO</p>
                        <p className="mt-3 leading-relaxed">{project.role}</p>
                    </div>
                    <div>
                        <p className="font-mono text-sm text-primary">TECNOLOGIAS</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    className="bg-background-light px-2.5 py-1 text-sm"
                                    key={tech}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-auto inline-flex items-center justify-start gap-3 pt-10 font-mono text-base text-foreground transition-colors hover:text-primary sm:text-lg"
                    >
                        VER DEMONSTRAÇÃO <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </article>
    );
};

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.project-card', {
                y: 80,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle
                    title="Projectos em destaque"
                    className="mb-10 md:mb-14"
                    classNames={{
                        title: 'font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
                    }}
                />

                <div className="space-y-10 md:space-y-16" ref={containerRef}>
                    {PROJECTS.map((project, index) => (
                        <div className="project-card" key={project.slug}>
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;

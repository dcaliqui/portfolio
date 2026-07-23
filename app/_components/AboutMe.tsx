'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Award, Code2, Globe2, Trophy } from 'lucide-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const highlights = [
    {
        icon: Trophy,
        text: 'Fui distinguido como vencedor do Hackathon interno da Escola 42 Luanda, através do desenvolvimento de uma aplicação orientada para o controlo da malária.',
    },
    {
        icon: Globe2,
        text: 'Concebi um sistema web destinado a instituições religiosas e concluí o projecto Inception através da utilização do Docker.',
    },
    {
        icon: Award,
        text: 'Em 2025, participei no concurso da Mirantes com o grupo Codespace, alcançando o 9.º lugar e o prémio de melhor pitch.',
    },
    {
        icon: Code2,
        text: 'Sou apaixonado por tecnologia e desenvolvo soluções que unem criatividade, propósito e impacto.',
    },
];

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const elements = container.current?.querySelectorAll('.slide-up-and-fade');
            if (!elements?.length) return;

            gsap.from(elements, {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                },
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <p className="slide-up-and-fade border-b border-border pb-4 text-muted-foreground">
                    Sobre mim.
                </p>

                <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
                    <div className="slide-up-and-fade">
                        <h2 className="text-4xl leading-tight sm:text-5xl md:text-6xl">
                            O meu nome é{' '}
                            <span className="text-primary">Damásio Caliqui.</span>
                        </h2>
                        <div className="mt-10 h-px w-20 bg-primary" />
                        <p className="mt-12 max-w-xl text-justify text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Sou estudante de programação na Escola 42 Luanda, com
                            formação em Informática de Gestão pelo IMEL. Tenho
                            experiência em desenvolvimento web e de software, com
                            conhecimentos em C, C++, C#, HTML, CSS, JavaScript e
                            Next.js.
                        </p>
                    </div>

                    <div className="relative space-y-10 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-border sm:space-y-12 sm:before:left-11">
                        {highlights.map(({ icon: Icon, text }) => (
                            <div
                                className="slide-up-and-fade relative grid grid-cols-[48px_1fr] gap-6 sm:grid-cols-[88px_1fr] sm:gap-7"
                                key={text}
                            >
                                <span className="relative z-[1] flex size-12 items-center justify-center rounded-full border border-border bg-background-light text-primary shadow-[0_0_24px_hsl(var(--primary)/0.12)] sm:size-[88px]">
                                    <Icon className="size-6 sm:size-9" strokeWidth={1.7} />
                                </span>
                                <span className="absolute left-[19px] top-5 z-[2] size-2.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))] sm:left-[39px] sm:top-10" />
                                <p className="pt-2 text-base leading-relaxed text-muted-foreground sm:pt-5 sm:text-lg">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

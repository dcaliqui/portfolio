'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-thin mb-12 sm:mb-20 slide-up-and-fade leading-tight">
                    Ambiciono integrar uma equipa na qualidade de programador, com o propósito de contribuir
                    para o desenvolvimento e a manutenção de soluções digitais.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    Sobre mim.
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-8 md:gap-0">
                    <div className="md:col-span-5">
                        <p className="text-3xl sm:text-4xl md:text-5xl slide-up-and-fade leading-tight">
                            O meu nome é Damásio Caliqui.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-base sm:text-lg text-muted-foreground max-w-[450px] leading-relaxed">
                            <p className="slide-up-and-fade">
                                Sou estudante de programação na Escola 42 Luanda,
                                possuindo formação em Informática de Gestão pelo IMEL.
                                Detenho experiência em desenvolvimento web e de software,
                                dominando linguagens como C, C++, C#, HTML, CSS, JavaScript e Next.js.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Fui distinguido como vencedor do Hackathon interno da Escola 42 Luanda,
                                mediante o desenvolvimento de uma aplicação orientada para o controlo da malária. Adicionalmente,
                                concebi um sistema web destinado a instituições religiosas e concluí o projeto
                                Inception através da utilização do Docker. Em 2025, participei no concurso da Mirantes
                                com o grupo Codespace, alcançando o 9.º lugar e o prémio de melhor pitch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

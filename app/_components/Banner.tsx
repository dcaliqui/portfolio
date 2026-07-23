'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container min-h-[100svh] py-16 sm:py-20 md:py-0 flex flex-col justify-center items-start md:flex-row md:justify-between md:items-center gap-10 md:gap-0"
                ref={containerRef}
            >
                <div className="w-full max-w-[544px] flex flex-col justify-center items-start">
                    <h1 className="banner-title slide-up-and-fade leading-[0.95] text-4xl sm:text-5xl md:text-[80px] font-anton">
                        <span className="text-primary">DESENVOLVEDOR DE SOFTWARE</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                        O meu nome é{' '}
                        <span className="font-medium text-foreground">
                            Damásio Caliqui
                        </span>
                        . Sou estudante na Escola 42 Luanda e exerço a atividade de programador web e
                        de software, encontrando-me apto a desenvolver soluções impactantes e escaláveis.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}`}
                        variant="primary"
                        className="mt-6 sm:mt-9 banner-button slide-up-and-fade"
                    >
                        Contactar
                    </Button>

                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                        <span className="size-3 rounded-full bg-white"></span>
                        <span className="text-sm text-muted-foreground">
                            Disponível para novas oportunidades profissionais
                        </span>
                    </div>
                </div>

                <div className="w-full md:absolute md:top-8 md:right-24 lg:right-28 grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-col gap-4 md:gap-8 text-left md:text-right z-20">
                    {/* Profile image with decorative frame (larger, top-right) */}
                    <div className="group order-first hidden md:order-none md:mb-0 md:mr-0 md:ml-0 md:flex md:justify-end">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem]">
                            <div className="h-full w-full overflow-hidden rounded-lg bg-card shadow-2xl">
                                <Image
                                    src="/projects/images/minhafoto.jpeg"
                                    alt="Foto de Damásio Caliqui"
                                    width={480}
                                    height={480}
                                    className="h-full w-full object-cover scale-100 grayscale contrast-90 brightness-90 saturate-0 transition-[filter,transform] duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:saturate-100"
                                />
                            </div>

                            {/* Top-left L-shaped accent */}
                            <div className="absolute -top-2 -left-2 pointer-events-none">
                                <div className="w-px h-12 bg-primary shadow-[0_0_12px_hsl(var(--primary))]"></div>
                                <div className="w-12 h-px bg-primary -mt-px shadow-[0_0_12px_hsl(var(--primary))]"></div>
                            </div>

                            {/* Bottom-right L-shaped accent */}
                            <div className="absolute -bottom-2 -right-2 pointer-events-none">
                                <div className="w-px h-12 -translate-y-12 bg-primary ml-auto shadow-[0_0_12px_hsl(var(--primary))]"></div>
                                <div className="w-12 h-px -mt-12 ml-auto bg-primary shadow-[0_0_12px_hsl(var(--primary))]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4+
                        </h5>
                        <p className="text-muted-foreground">Anos de Experiência</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            20+
                        </h5>
                        <p className="text-muted-foreground">Projectos Concluídos</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1200+
                        </h5>
                        <p className="text-muted-foreground">Horas de Prática</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

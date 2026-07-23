import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
};

const StickyEmail = () => {
    return (
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-24 flex-col items-center border-r border-border bg-background/85 py-8 backdrop-blur-sm xl:flex">
            <a
                href="#banner"
                aria-label="Ir para o início"
                className="flex size-12 items-center justify-center rounded-full border border-primary text-lg font-semibold text-foreground shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-colors hover:bg-primary hover:text-primary-foreground"
            >
                D
            </a>

            <a
                href={`mailto:${GENERAL_INFO.email}`}
                aria-label={`Enviar e-mail para ${GENERAL_INFO.email}`}
                className="mt-auto text-sm tracking-[1px] text-muted-foreground transition-colors hover:text-primary"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </a>

            <div className="my-10 h-px w-12 bg-border" />

            <nav aria-label="Redes sociais" className="flex flex-col items-center gap-7">
                {SOCIAL_LINKS.map((social) => {
                    const Icon = socialIcons[social.name as keyof typeof socialIcons];
                    if (!Icon) return null;

                    return (
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={social.name}
                            className="text-muted-foreground transition-colors hover:text-primary"
                            key={social.name}
                        >
                            <Icon size={25} strokeWidth={2} />
                        </a>
                    );
                })}
            </nav>
        </aside>
    );
};

export default StickyEmail;

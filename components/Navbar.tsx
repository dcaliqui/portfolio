'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
];

const MENU_LINKS = [
    {
        name: 'Início',
        url: '/',
    },
    {
        name: 'Sobre Mim',
        url: '/#about-me',
    },
    {
        name: 'Experiência',
        url: '/#my-experience',
    },
    {
        name: 'Projetos',
        url: '/#selected-projects',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="sticky top-0 z-[4]">
                <button
                    className={cn(
                        'group size-12 absolute top-5 right-5 md:right-10 z-[2]',
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ',
                            {
                                'rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:rotate-12': !isMenuOpen,
                            },
                        )}
                    ></span>
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ',
                            {
                                '-rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:-rotate-12': !isMenuOpen,
                            },
                        )}
                    ></span>
                </button>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed inset-0 w-full h-[100dvh] transform translate-y-[-100%] transition-transform duration-700 ease-in-out z-[3] overflow-y-auto',
                    'flex flex-col justify-between py-8 px-6 sm:px-10 md:px-24',
                    'backdrop-blur-2xl bg-black/95',
                    { 'translate-y-0': isMenuOpen },
                )}
            >
                <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full relative py-6">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
                        <div className="space-y-6 lg:space-y-8">
                            <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4 opacity-70">
                                Menu
                            </p>
                            <ul className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name} className="overflow-hidden">
                                        <button
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className={cn(
                                                'group relative flex items-center gap-4 sm:gap-6 text-left w-full transition-all duration-500 transform',
                                                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
                                            )}
                                            style={{ transitionDelay: `${isMenuOpen ? idx * 100 + 300 : 0}ms` }}
                                        >
                                            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-anton text-foreground/50 group-hover:text-primary transition-colors duration-300 leading-none">
                                                {link.name}
                                            </span>
                                            <span
                                                className={cn(
                                                    'hidden md:flex size-12 lg:size-16 rounded-full items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-left',
                                                    COLORS[idx]
                                                )}
                                            >
                                                <MoveUpRight size={24} className="text-black" />
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="flex flex-col md:items-end space-y-8 md:space-y-12 mt-4 md:mt-0">
                            <div className={cn("transition-all duration-700", isMenuOpen ? "opacity-100 translate-x-0 delay-500" : "opacity-0 translate-x-8")}>
                                <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4 opacity-70 md:text-right">
                                    Redes Sociais
                                </p>
                                <ul className="flex flex-col sm:flex-row flex-wrap gap-4 md:justify-end">
                                    {SOCIAL_LINKS.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-lg sm:text-xl lg:text-2xl capitalize text-foreground/70 hover:text-white transition-colors flex items-center gap-2 group"
                                            >
                                                {link.name}
                                                <MoveUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className={cn("transition-all duration-700", isMenuOpen ? "opacity-100 translate-x-0 delay-700" : "opacity-0 translate-x-8")}>
                                <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4 opacity-70 md:text-right">Contato</p>
                                <a 
                                    href={`mailto:${GENERAL_INFO.email}`}
                                    className="text-base sm:text-lg lg:text-xl text-foreground/70 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 break-all"
                                >
                                    {GENERAL_INFO.email}
                                </a>
                                <div className="mt-3 md:text-right">
                                    <a
                                        href={`tel:${GENERAL_INFO.phone.replace(/\s+/g, '')}`}
                                        className="block text-base sm:text-lg lg:text-xl text-foreground/70 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 break-all"
                                    >
                                        {GENERAL_INFO.phone}
                                    </a>
                                    <a
                                        href={`tel:${GENERAL_INFO.phone2.replace(/\s+/g, '')}`}
                                        className="block text-base sm:text-lg lg:text-xl text-foreground/70 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 mt-1 break-all"
                                    >
                                        {GENERAL_INFO.phone2}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

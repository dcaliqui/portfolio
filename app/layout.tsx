import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Damásio Caliqui - Desenvolvedor Full Stack | Escola 42 Luanda',
    description: 'Portfolio de Damásio Caliqui - Desenvolvedor Full Stack, especialista em Next.js, React, C, Docker e Networking. Projetos da Escola 42 Luanda.',
    keywords: ['Damásio Caliqui', 'desenvolvedor', 'full stack', 'Next.js', 'React', 'C', 'Docker', 'networking', 'Escola 42', 'Luanda', 'programador', 'portfolio'],
    authors: [{ name: 'Damásio Caliqui' }],
    creator: 'Damásio Caliqui',
    metadataBase: new URL('https://me.toinfinite.dev'),
    openGraph: {
        type: 'website',
        url: 'https://me.toinfinite.dev',
        title: 'Damásio Caliqui - Desenvolvedor Full Stack',
        description: 'Explore meus projetos e experiência como desenvolvedor full stack formado pela Escola 42 Luanda.',
        siteName: 'Damásio Caliqui',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Damásio Caliqui - Desenvolvedor Full Stack',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Damásio Caliqui - Desenvolvedor Full Stack',
        description: 'Portfolio de Damásio Caliqui - Desenvolvedor Full Stack com experiência em Next.js, React e múltiplas tecnologias.',
        creator: '@damasio',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://me.toinfinite.dev',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="manifest" content="/manifest.json" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </head>
            <GoogleAnalytics gaId="G-MHLY1LNGY5" />
            <Script id="hotjar" strategy="afterInteractive">
                {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>
            <Script
                id="schema-org"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Damásio Caliqui',
                        url: 'https://me.toinfinite.dev',
                        jobTitle: 'Desenvolvedor Full Stack',
                        email: 'damasiocipriano425@gmail.com',
                        sameAs: [
                            'https://github.com',
                            'https://www.linkedin.com',
                        ],
                        image: '/og-image.png',
                        description: 'Desenvolvedor Full Stack especializado em Next.js, React, C, Docker e Networking. Formado pela Escola 42 Luanda.',
                    }),
                }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: 'Damásio Caliqui - Portfolio',
                        url: 'https://me.toinfinite.dev',
                        image: '/og-image.png',
                        description: 'Portfolio de Damásio Caliqui - Desenvolvedor Full Stack',
                    }),
                }}
            />
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    {/* <a
                        href="https://forms.gle/t73XYJgWD5cJNr6e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Frontend dev? I&apos;ll help you polish your resume —
                        completely free.
                    </a> */}
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}

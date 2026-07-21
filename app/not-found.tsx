import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Página Não Encontrada | Damásio Caliqui',
    description: 'A página que procura não foi encontrada. Volte à página inicial do portfolio de Damásio Caliqui.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center container mx-auto px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-4">Página Não Encontrada</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Desculpe, a página que procura não existe ou foi removida.
                </p>
                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:opacity-80 transition-opacity"
                >
                    Voltar à Página Inicial
                </Link>
            </div>
        </div>
    );
}

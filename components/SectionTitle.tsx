import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <span
                    aria-hidden="true"
                    className={cn(
                        'flex size-5 rotate-45 items-center justify-center border-2 border-primary',
                        classNames?.icon,
                    )}
                >
                    <span className="size-1.5 bg-primary" />
                </span>
            )}
            <h2
                className={cn(
                    'text-xl uppercase leading-none',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;

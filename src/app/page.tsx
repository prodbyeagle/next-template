'use client';

import Link from 'next/link';
import type { JSX } from 'react';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Code } from '@/components';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../../assets/icons/github';

export interface DocsLinkProps {
	href: string;
	children: string;
	className?: string;
	prefetch?: boolean;
}

/**
 * External documentation link with consistent styling.
 *
 * @param href - Destination URL.
 * @param children - Link text.
 * @param className - Optional additional CSS classes.
 * @param prefetch - Whether to prefetch the route (disabled by default).
 * @returns Styled anchor link that opens in a new tab.
 */
export function DocsLink({
							 href,
							 children,
							 className,
							 prefetch = false,
						 }: DocsLinkProps): JSX.Element {
	return (
		<Link
			href={href}
			className={cn(
				'underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-foreground',
				className
			)}
			prefetch={prefetch}
			target='_blank'
			rel='noopener noreferrer'>
			{children}
		</Link>
	);
}

export default function HomePage(): JSX.Element {
	return (
		<main className='relative flex min-h-screen flex-col items-center justify-center px-6 py-12'>
			<div className='absolute inset-0 pointer-events-none' />

			<section className='relative z-10 mx-auto max-w-4xl text-center space-y-8'>
				<header className='space-y-4'>
					<div className='inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground'>
						<Sparkles className='size-4 text-primary' />
						next.js 19+ / tailwind v4+ supported
					</div>

					<h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>
						🦅{' '}
						<span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
							eagle-template
						</span>
					</h1>

					<p className='mx-auto max-w-2xl text-xl sm:text-2xl text-muted-foreground leading-relaxed'>
						a minimal next.js + shadcn/ui template with theming &
						best practices built for modern development.
					</p>

					<p className='mx-auto max-w-2xl text-sm italic text-muted-foreground'>
						if you just created the project and see this message, your setup was successful.
						happy building!
					</p>
				</header>

				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<Button size='lg' className='group text-base px-8' asChild>
						<Link
							href='/not-found'
							aria-label='Open example not found page'
							prefetch={false}>
							visit-not-found-page
							<ArrowRight className='size-4 ml-2 transition-transform duration-200 group-hover:translate-x-1' />
						</Link>
					</Button>

					<Button
						size='lg'
						variant='outline'
						className='group text-base px-8'
						asChild>
						<Link
							href='/github'
							aria-label='View project on GitHub'
							prefetch={false}>
							<GithubIcon className='size-4 mr-2' />
							view-on-github
						</Link>
					</Button>
				</div>

				<footer className='pt-8 space-y-4'>
					<p className='text-sm text-muted-foreground'>
						ready to start building? edit{' '}
						<Code className='text-primary text-xs'>
							src/app/page.tsx
						</Code>{' '}
						and see live updates.
					</p>

					<nav className='flex flex-wrap justify-center gap-6 text-sm text-muted-foreground'>
						<DocsLink href='https://nextjs.org/docs'>next-docs</DocsLink>
						<DocsLink href='https://ui.shadcn.com/docs'>shadcn/ui-docs</DocsLink>
						<DocsLink href='https://tailwindcss.com/docs'>tailwind-v4-docs</DocsLink>
					</nav>
				</footer>
			</section>
		</main>
	);
}

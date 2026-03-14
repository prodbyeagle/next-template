'use client';

import { useEffect, useState } from 'react';

import { Button } from '@heroui/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function HomePage() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<main className='flex min-h-screen p-10'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-3xl font-bold tracking-tight'>start now.</h1>
				<p className='text-muted text-sm'>have fun building something.</p>
				<Button className='w-fit'>demo button</Button>
			</div>

			<Button
				onPress={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
				variant='ghost'
				className='absolute top-10 right-10'
				aria-label='Toggle theme'
				isIconOnly
			>
				{mounted && (resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />)}
			</Button>
		</main>
	);
}

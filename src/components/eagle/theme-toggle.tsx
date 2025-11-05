'use client';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import type { JSX } from 'react';
import { useHasMounted } from '@/lib/has-mounted';


export function ThemeToggle(): JSX.Element {
	const { setTheme } = useTheme();
	const mounted = useHasMounted();

	if (!mounted) return <></>;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Sun className='size-[1.1rem] rotate-0 scale-100 transition dark:-rotate-90 dark:scale-0' />
					<Moon className='absolute size-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					<Sun className='mr-2 size-4' />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					<Moon className='mr-2 size-4' />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					<Monitor className='mr-2 size-4' />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

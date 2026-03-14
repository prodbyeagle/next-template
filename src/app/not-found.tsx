import { Link } from '@heroui/react';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-6 select-none p-10'>
			<div className='flex flex-col items-center gap-2 text-center'>
				<span className='text-muted text-xs font-mono uppercase tracking-widest'>404</span>
				<h1 className='text-4xl font-bold tracking-tight'>page not found.</h1>
				<p className='text-muted text-sm max-w-xs'>
					the page you're looking for doesn't exist or has been moved.
				</p>
			</div>

			<Link href='/' className='gap-1.5 text-sm'>
				<Link.Icon className='size-3.5'>
					<ArrowLeft />
				</Link.Icon>
				go home
			</Link>
		</main>
	);
}

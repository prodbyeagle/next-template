import { cn } from '@/lib/utils';



import type { JSX } from 'react';





export type CodeProps = React.HTMLAttributes<HTMLElement>;

/**
 * Inline `<code>` element with consistent styling.
 *
 * @param className - Additional CSS classes to apply.
 * @param props - Standard HTML attributes for a `<code>` element.
 * @returns Styled inline code element.
 */
export function Code({ className, ...props }: CodeProps): JSX.Element {
	return (
		<code
			className={cn(
				'rounded-sm bg-muted px-1 py-0.5 font-mono text-sm',
				'text-accent-foreground/70 transition-all duration-300',
				className
			)}
			{...props}
		/>
	);
}

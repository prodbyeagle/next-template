import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist_Mono, Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
	variable: '--font-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'start now.',
	description: 'have fun.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.variable} ${geistMono.variable} antialiased font-sans`}>
				<ThemeProvider attribute={['class', 'data-theme']} defaultTheme='system' enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

import { TooltipProvider } from '@/components/ui/tooltip'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Coach Pocket',
	description: 'Coach Pocket | Treinar ficou mais fácil!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			
			<Analytics />
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ""} />
			<TooltipProvider>
				<body className={inter.className}>
					<div className="absolute top-0 -z-10 h-full w-full bg-white">
						{children}
						<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
					</div>
				</body>
			</TooltipProvider>
		</html>
	)
}

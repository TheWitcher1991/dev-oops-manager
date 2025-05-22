import { Metadata } from 'next'
import { ReactNode } from 'react'
import WithProviders from '~providers'

import './globals.scss'

export const metadata: Metadata = {
	title: 'DevOps manager',
	description: '',
	robots: 'index, follow',
	openGraph: {
		title: 'DevOps manager',
		description: '',
		type: 'website',
	},
	twitter: {
		title: 'DevOps manager',
		description: '',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body>
				<WithProviders>{children}</WithProviders>
			</body>
		</html>
	)
}

'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { PropsWithChildren } from 'react'

export default function WithProgressBar({ children }: PropsWithChildren) {
	return (
		<>
			<ProgressBar height='3px' options={{ showSpinner: false }} />
			{children}
		</>
	)
}

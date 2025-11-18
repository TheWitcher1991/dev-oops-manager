'use client'

import { Theme } from '@radix-ui/themes'
import { PropsWithChildren } from 'react'

import { useTheme } from '@oops/hooks'

export default function WithTheme({ children }: PropsWithChildren) {
	const { theme } = useTheme()

	return <Theme appearance={theme}>{children}</Theme>
}

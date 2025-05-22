'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren } from 'react'

import { IS_DEV } from '@oops/system'
import { queryClient } from '@oops/toolkit'

export default function WithReactQuery({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<>{children}</>
			{IS_DEV && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	)
}

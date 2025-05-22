'use client'

import { PropsWithChildren } from 'react'

import WithProgressBar from '~providers/with-progress-bar'
import WithReactQuery from '~providers/with-react-query'
import WithTheme from '~providers/with-theme'
import WithToaster from '~providers/with-toaster'

export const WithProviders = ({ children }: PropsWithChildren) => (
	<WithReactQuery>
		<WithTheme>
			<WithProgressBar>
				<WithToaster>{children}</WithToaster>
			</WithProgressBar>
		</WithTheme>
	</WithReactQuery>
)

import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

export default function WithToaster({ children }: PropsWithChildren) {
	return (
		<>
			{children}
			<Toaster
				position={'bottom-right'}
				reverseOrder={false}
				containerStyle={{
					fontFamily: 'var(--font-jost)',
				}}
			/>
		</>
	)
}

import type React, { JSXElementConstructor } from 'react'
import { Store } from 'effector'

declare module '*.css'
declare module '*.scss'
declare module '*.sass'

declare global {
	type ImageData =
		| import('next/dist/shared/lib/get-img-props').StaticImport
		| string

	type EStore<T> = Store<T | null>

	interface ReactElement<
		P = any,
		T extends string | JSXElementConstructor<any> =
				| string
			| JSXElementConstructor<any>,
	> {
		type: T
		props: P
		key: string | null
	}

	namespace JSX {
		interface Element extends React.ReactElement<any, any> {}
	}
}

export {}

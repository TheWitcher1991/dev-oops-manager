'use client'

import { Loader } from '@gravity-ui/uikit'
import { Flex } from '@radix-ui/themes'

export default function HomePage() {
	return (
		<Flex justify='center' align='center' height='100vh'>
			<Loader size='l' />
		</Flex>
	)
}

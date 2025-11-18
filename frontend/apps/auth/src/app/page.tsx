'use client'

import { Loader } from '@gravity-ui/uikit'
import { Flex } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import { useMount } from 'react-use'

import { links } from '@oops/links'

export default function HomePage() {
	const router = useRouter()

	useMount(() => {
		router.replace('')
	})

	return (
		<Flex justify='center' align='center' height='100vh'>
			<Loader size='l' />
		</Flex>
	)
}

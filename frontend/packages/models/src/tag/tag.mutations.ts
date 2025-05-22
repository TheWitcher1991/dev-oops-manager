import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@oops/toolkit'

import { tagConfig } from './tag.config'
import { TagRepository } from './tag.repository'
import { ICreateTag, IUpdateTag } from './tag.types'

export const useCreateTag = () => {
	return useMutation({
		mutationFn: (data: ICreateTag) => TagRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[tagConfig.tags]])
		},
	})
}

export const useUpdateTag = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateTag>) =>
			TagRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[tagConfig.tags],
				[tagConfig.tag, id],
			])
		},
	})
}

export const useDeleteTag = () => {
	return useMutation({
		mutationFn: (id: number) => TagRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[tagConfig.tags]])
		},
	})
}

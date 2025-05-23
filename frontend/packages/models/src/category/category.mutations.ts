import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@oops/toolkit'

import { categoryConfig } from './category.config'
import { CategoryRepository } from './category.repository'
import { ICreateCategory, IUpdateCategory } from './category.types'

export const useCreateCategory = () => {
	return useMutation({
		mutationFn: (data: ICreateCategory) => CategoryRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[categoryConfig.categories]])
		},
	})
}

export const useUpdateCategory = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateCategory>) =>
			CategoryRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[categoryConfig.categories],
				[categoryConfig.category, id],
			])
		},
	})
}

export const useDeleteCategory = () => {
	return useMutation({
		mutationFn: (id: number) => CategoryRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[categoryConfig.categories]])
		},
	})
}

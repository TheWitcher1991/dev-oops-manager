import { queryFx } from '../request'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { categoryConfig } from './category.config'
import { CategoryRepository } from './category.repository'
import { ICategory, UseCategories } from './category.types'

export const useCategories = (params?: Partial<UseCategories>) => {
	return useQuery({
		queryKey: [categoryConfig.categories, params],
		queryFn: () => CategoryRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useCategory = (id: number) => {
	return useQuery({
		queryKey: [categoryConfig.category, id],
		queryFn: () => CategoryRepository.getById(id),
		enabled: !!id,
	})
}

export const categoriesFx = (params?: Partial<UseCategories>) =>
	queryFx<void, ICategory[]>({
		url: categoryConfig.categories,
		params,
	})

export const categoryFx = (id: number) =>
	queryFx<void, ICategory>({
		url: `${categoryConfig.category}/${id}/`,
	})

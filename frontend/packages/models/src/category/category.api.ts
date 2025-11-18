import { http, queryFx } from '../request'

import {
	createApi,
	createReadonlyApi,
	createReadonlyApiFx,
	CrudRepository,
	ReadonlyRepository,
} from '@oops/toolkit'
import { Paginated } from '@oops/types'

import { categoryConfig } from './category.config'
import {
	CategoryID,
	ICategory,
	ICreateCategory,
	IUpdateCategory,
	UseCategories,
} from './category.types'

export const createReadonlyCategoryRepository = new ReadonlyRepository<
	Paginated<ICategory>,
	ICategory,
	UseCategories,
	CategoryID
>(http, categoryConfig.categories)

export const CategoryRepository = new CrudRepository<
	Paginated<ICategory>,
	ICategory,
	ICreateCategory,
	IUpdateCategory,
	UseCategories,
	CategoryID
>(http, categoryConfig.categories)

export const createReadonlyCategoryApi = () => {
	const api = createReadonlyApi<
		Paginated<ICategory>,
		ICategory,
		UseCategories,
		CategoryID
	>(http, {
		list: categoryConfig.categories,
		detail: categoryConfig.category,
		infinity: categoryConfig.infiniteCategories,
	})

	return {
		useCategories: api.useEntities,
		useCategory: api.useEntity,
		useInfinityCategories: api.useInfinityEntities,
		categoryRepository: api.repo,
	}
}

export const createCategoryApi = () => {
	const api = createApi<
		Paginated<ICategory>,
		ICategory,
		ICreateCategory,
		IUpdateCategory,
		UseCategories,
		CategoryID
	>(http, {
		list: categoryConfig.categories,
		detail: categoryConfig.category,
		infinity: categoryConfig.infiniteCategories,
	})

	return {
		useCategories: api.useEntities,
		useCategory: api.useEntity,
		useInfinityCategories: api.useInfinityEntities,
		useCreateCategory: api.useCreateEntity,
		useUpdateCategory: api.useUpdateEntity,
		useDeleteCategory: api.useDeleteEntity,
		categoryRepository: api.repo,
	}
}

export const createReadonlyCategoryApiFx = () => {
	const api = createReadonlyApiFx(queryFx, {
		list: categoryConfig.categories,
		detail: categoryConfig.category,
	})

	return {
		categoriesFx: api.entitiesFx,
		category: api.entityFx,
	}
}

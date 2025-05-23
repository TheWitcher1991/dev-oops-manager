import { InferOutput } from 'valibot'

import { UseModelOptions } from '@oops/types'

import {
	CategorySchema,
	CreateCategorySchema,
	UpdateCategorySchema,
} from './category.schema'

export type ICategory = InferOutput<typeof CategorySchema>

export type ICreateCategory = InferOutput<typeof CreateCategorySchema>

export type IUpdateCategory = InferOutput<typeof UpdateCategorySchema>

export interface UseCategories extends UseModelOptions {}

export interface PropsWithCategory {
	category: ICategory
}

export interface PropsWithCategoryId {
	category: number
}

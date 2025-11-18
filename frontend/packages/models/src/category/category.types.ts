import { InferOutput } from 'valibot'

import { Branded, InjectProps, UseModelOptions } from '@oops/types'

import {
	CategorySchema,
	CreateCategorySchema,
	UpdateCategorySchema,
} from './category.schema'

export type CategoryID = Branded<number, 'CategoryID'>

export type ICategory = InferOutput<typeof CategorySchema>

export type ICreateCategory = InferOutput<typeof CreateCategorySchema>

export type IUpdateCategory = InferOutput<typeof UpdateCategorySchema>

export interface UseCategories extends UseModelOptions {}

export type WithCategory = InjectProps<'category', ICategory>

export type WithCategoryId = InjectProps<'category', number>

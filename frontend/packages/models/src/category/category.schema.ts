import { object } from 'valibot'

import { BaseModelSchema, merge, vSchema } from '@oops/toolkit'

const BaseCategorySchema = object({
	title: vSchema.title,
})

export const CategorySchema = merge(BaseModelSchema, BaseCategorySchema)

export const CreateCategorySchema = BaseCategorySchema

export const UpdateCategorySchema = BaseCategorySchema

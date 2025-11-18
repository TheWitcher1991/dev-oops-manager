import { object } from 'valibot'

import { BaseModelSchema, merge, vBrand, vSchema } from '@oops/toolkit'

export const vCategoryId = vBrand(vSchema.id, 'CategoryID')

const BaseCategorySchema = object({
	title: vSchema.title,
})

export const CategorySchema = merge(
	BaseModelSchema(vCategoryId),
	BaseCategorySchema,
)

export const CreateCategorySchema = BaseCategorySchema

export const UpdateCategorySchema = BaseCategorySchema

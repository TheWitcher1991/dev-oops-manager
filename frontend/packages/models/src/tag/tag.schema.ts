import { object } from 'valibot'

import { BaseModelSchema, merge, vSchema } from '@oops/toolkit'

const BaseTagSchema = object({
	title: vSchema.title,
})

export const TagSchema = merge(BaseModelSchema, BaseTagSchema)

export const CreateTagSchema = BaseTagSchema

export const UpdateTagSchema = BaseTagSchema

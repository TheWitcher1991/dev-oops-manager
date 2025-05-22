import { enum_, object } from 'valibot'

import { BaseModelSchema, merge, vSchema } from '@oops/toolkit'

import { Role } from './user.enums'

const BaseUserSchema = object({
	firstName: vSchema.alpha,
	lastName: vSchema.alpha,
	patronymic: vSchema.alpha,
})

export const UserSchema = merge(
	BaseModelSchema,
	BaseUserSchema,
	object({
		role: enum_(Role),
	}),
)

export const CreateUserSchema = merge(
	BaseUserSchema,
	object({
		role: enum_(Role),
		password: vSchema.password,
	}),
)

export const UpdateUserSchema = merge(
	BaseUserSchema,
	object({
		password: vSchema.password,
	}),
)

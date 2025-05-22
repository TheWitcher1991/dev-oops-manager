import { UserSchema } from '../user'
import { boolean, enum_, object } from 'valibot'

import { BaseModelSchema, merge, vSchema } from '@oops/toolkit'

import { OrganizerType } from './organizer.enums'

const BaseOrganizerSchema = object({
	title: vSchema.title,
	description: vSchema.description,
	inn: vSchema.length(10, 13),
	org: vSchema.length(13, 15),
	email: vSchema.email,
	phoneNumber: vSchema.phone,
	site: vSchema.url,
	address: vSchema.nullable,
	accredited: boolean(),
	type: enum_(OrganizerType),
})

export const OrganizerSchema = merge(
	BaseModelSchema,
	BaseOrganizerSchema,
	object({
		photo: vSchema.url,
		user: UserSchema,
	}),
)

export const CreateOrganizerSchema = merge(
	BaseOrganizerSchema,
	object({
		photo: vSchema.image,
		user: vSchema.uuid,
	}),
)

export const UpdateOrganizerSchema = merge(
	BaseOrganizerSchema,
	object({
		photo: vSchema.image,
	}),
)

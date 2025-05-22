import { UserSchema } from '../user'
import { boolean, object } from 'valibot'

import { BaseModelSchema, merge, vSchema } from '@oops/toolkit'

const BaseMemberSchema = object({
	friend: boolean(),
	invite: boolean(),
	history: boolean(),
})

export const MemberSchema = merge(
	BaseModelSchema,
	BaseMemberSchema,
	object({
		photo: vSchema.url,
		user: UserSchema,
	}),
)

export const CreateMemberSchema = merge(
	BaseMemberSchema,
	object({
		photo: vSchema.image,
		user: vSchema.uuid,
	}),
)

export const UpdateMemberSchema = merge(
	BaseMemberSchema,
	object({
		photo: vSchema.image,
	}),
)

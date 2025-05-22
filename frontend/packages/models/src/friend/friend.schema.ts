import { MemberSchema } from '../member'
import { enum_, object } from 'valibot'

import { BaseModelSchema, merge, vSchema } from '@oops/toolkit'
import { RequestStatus } from '@oops/types'

const BaseFriendSchema = object({
	status: enum_(RequestStatus),
})

export const FriendSchema = merge(
	BaseModelSchema,
	BaseFriendSchema,
	object({
		member: vSchema.uuid,
		who: MemberSchema,
	}),
)

export const CreateFriendSchema = merge(
	BaseFriendSchema,
	object({
		member: vSchema.uuid,
		who: vSchema.uuid,
	}),
)

export const UpdateFriendSchema = BaseFriendSchema

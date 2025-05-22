import { MemberSchema } from '../member'
import { enum_, object } from 'valibot'

import { BaseModelSchema, merge, vSchema } from '@oops/toolkit'
import { RequestStatus } from '@oops/types'

const BaseInviteSchema = object({
	status: enum_(RequestStatus),
})

export const InviteSchema = merge(
	BaseModelSchema,
	BaseInviteSchema,
	object({
		member: vSchema.uuid,
		recipient: MemberSchema,
	}),
)

export const CreateInviteSchema = merge(
	BaseInviteSchema,
	object({
		member: vSchema.uuid,
		recipient: vSchema.uuid,
	}),
)

export const UpdateInviteSchema = BaseInviteSchema

import { InferOutput } from 'valibot'

import { UseModelOptions } from '@oops/types'

import {
	CreateMemberSchema,
	MemberSchema,
	UpdateMemberSchema,
} from './member.schema'

export type IMember = InferOutput<typeof MemberSchema>

export type ICreateMember = InferOutput<typeof CreateMemberSchema>

export type IUpdateMember = InferOutput<typeof UpdateMemberSchema>

export interface UseMembers extends UseModelOptions {}

export interface PropsWithMember {
	member: IMember
}

export interface PropsWithMemberId {
	member: number
}

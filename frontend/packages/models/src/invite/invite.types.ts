import { InferOutput } from 'valibot'

import { UseModelOptions } from '@oops/types'

import {
	CreateInviteSchema,
	InviteSchema,
	UpdateInviteSchema,
} from './invite.schema'

export type IInvite = InferOutput<typeof InviteSchema>

export type ICreateInvite = InferOutput<typeof CreateInviteSchema>

export type IUpdateInvite = InferOutput<typeof UpdateInviteSchema>

export interface UseInvites extends UseModelOptions {}

export interface PropsWithInvite {
	invite: IInvite
}

export interface PropsWithInviteId {
	invite: number
}

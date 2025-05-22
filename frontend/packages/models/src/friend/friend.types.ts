import { InferOutput } from 'valibot'

import { UseModelOptions } from '@oops/types'

import {
	CreateFriendSchema,
	FriendSchema,
	UpdateFriendSchema,
} from './friend.schema'

export type IFriend = InferOutput<typeof FriendSchema>

export type ICreateFriend = InferOutput<typeof CreateFriendSchema>

export type IUpdateFriend = InferOutput<typeof UpdateFriendSchema>

export interface UseFriends extends UseModelOptions {}

export interface PropsWithFriend {
	friend: IFriend
}

export interface PropsWithFriendId {
	friend: number
}

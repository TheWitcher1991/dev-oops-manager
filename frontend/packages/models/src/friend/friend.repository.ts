import { http } from '../request'

import { CrudRepository } from '@oops/toolkit'

import { friendConfig } from './friend.config'
import {
	ICreateFriend,
	IFriend,
	IUpdateFriend,
	UseFriends,
} from './friend.types'

export const FriendRepository = new CrudRepository<
	IFriend[],
	IFriend,
	ICreateFriend,
	IUpdateFriend,
	UseFriends
>(http.instance, friendConfig.friends)

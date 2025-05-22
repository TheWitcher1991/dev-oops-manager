import { queryFx } from '../request'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { friendConfig } from './friend.config'
import { FriendRepository } from './friend.repository'
import { IFriend, UseFriends } from './friend.types'

export const useFriends = (params?: Partial<UseFriends>) => {
	return useQuery({
		queryKey: [friendConfig.friends, params],
		queryFn: () => FriendRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useFriend = (id: number) => {
	return useQuery({
		queryKey: [friendConfig.friend, id],
		queryFn: () => FriendRepository.getById(id),
		enabled: !!id,
	})
}

export const friendsFx = (params?: Partial<UseFriends>) =>
	queryFx<void, IFriend[]>({
		url: friendConfig.friends,
		params,
	})

export const friendFx = (id: number) =>
	queryFx<void, IFriend>({
		url: `${friendConfig.friend}/${id}/`,
	})

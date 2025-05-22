import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@oops/toolkit'

import { friendConfig } from './friend.config'
import { FriendRepository } from './friend.repository'
import { ICreateFriend, IUpdateFriend } from './friend.types'

export const useCreateFriend = () => {
	return useMutation({
		mutationFn: (data: ICreateFriend) => FriendRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[friendConfig.friends]])
		},
	})
}

export const useUpdateFriend = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateFriend>) =>
			FriendRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[friendConfig.friends],
				[friendConfig.friend, id],
			])
		},
	})
}

export const useDeleteFriend = () => {
	return useMutation({
		mutationFn: (id: number) => FriendRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[friendConfig.friends]])
		},
	})
}

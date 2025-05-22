import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@oops/toolkit'

import { userConfig } from './user.config'
import { UserRepository } from './user.repository'
import { ICreateUser, IUpdateUser } from './user.types'

export const useCreateUser = () => {
	return useMutation({
		mutationFn: (data: ICreateUser) => UserRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[userConfig.users]])
		},
	})
}

export const useUpdateUser = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateUser>) =>
			UserRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[userConfig.users],
				[userConfig.user, id],
			])
		},
	})
}

export const useDeleteUser = () => {
	return useMutation({
		mutationFn: (id: number) => UserRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[userConfig.users]])
		},
	})
}

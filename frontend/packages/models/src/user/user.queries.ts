import { queryFx } from '../request'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { userConfig } from './user.config'
import { UserRepository } from './user.repository'
import { IUser, UseUsers } from './user.types'

export const useUsers = (params?: Partial<UseUsers>) => {
	return useQuery({
		queryKey: [userConfig.users, params],
		queryFn: () => UserRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useUser = (id: number) => {
	return useQuery({
		queryKey: [userConfig.user, id],
		queryFn: () => UserRepository.getById(id),
		enabled: !!id,
	})
}

export const usersFx = (params?: Partial<UseUsers>) =>
	queryFx<void, IUser[]>({
		url: userConfig.users,
		params,
	})

export const userFx = (id: number) =>
	queryFx<void, IUser>({
		url: `${userConfig.user}/${id}/`,
	})

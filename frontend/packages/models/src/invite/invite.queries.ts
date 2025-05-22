import { queryFx } from '../request'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { inviteConfig } from './invite.config'
import { InviteRepository } from './invite.repository'
import { IInvite, UseInvites } from './invite.types'

export const useInvites = (params?: Partial<UseInvites>) => {
	return useQuery({
		queryKey: [inviteConfig.invites, params],
		queryFn: () => InviteRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useInvite = (id: number) => {
	return useQuery({
		queryKey: [inviteConfig.invite, id],
		queryFn: () => InviteRepository.getById(id),
		enabled: !!id,
	})
}

export const invitesFx = (params?: Partial<UseInvites>) =>
	queryFx<void, IInvite[]>({
		url: inviteConfig.invites,
		params,
	})

export const inviteFx = (id: number) =>
	queryFx<void, IInvite>({
		url: `${inviteConfig.invite}/${id}/`,
	})

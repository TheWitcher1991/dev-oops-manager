import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@oops/toolkit'

import { inviteConfig } from './invite.config'
import { InviteRepository } from './invite.repository'
import { ICreateInvite, IUpdateInvite } from './invite.types'

export const useCreateInvite = () => {
	return useMutation({
		mutationFn: (data: ICreateInvite) => InviteRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[inviteConfig.invites]])
		},
	})
}

export const useUpdateInvite = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateInvite>) =>
			InviteRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[inviteConfig.invites],
				[inviteConfig.invite, id],
			])
		},
	})
}

export const useDeleteInvite = () => {
	return useMutation({
		mutationFn: (id: number) => InviteRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[inviteConfig.invites]])
		},
	})
}

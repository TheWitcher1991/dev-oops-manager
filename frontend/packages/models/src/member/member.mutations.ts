import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@oops/toolkit'

import { memberConfig } from './member.config'
import { MemberRepository } from './member.repository'
import { ICreateMember, IUpdateMember } from './member.types'

export const useCreateMember = () => {
	return useMutation({
		mutationFn: (data: ICreateMember) => MemberRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[memberConfig.members]])
		},
	})
}

export const useUpdateMember = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateMember>) =>
			MemberRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[memberConfig.members],
				[memberConfig.member, id],
			])
		},
	})
}

export const useDeleteMember = () => {
	return useMutation({
		mutationFn: (id: number) => MemberRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[memberConfig.members]])
		},
	})
}

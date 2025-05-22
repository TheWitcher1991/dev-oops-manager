import { queryFx } from '../request'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { memberConfig } from './member.config'
import { MemberRepository } from './member.repository'
import { IMember, UseMembers } from './member.types'

export const useMembers = (params?: Partial<UseMembers>) => {
	return useQuery({
		queryKey: [memberConfig.members, params],
		queryFn: () => MemberRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useMember = (id: number) => {
	return useQuery({
		queryKey: [memberConfig.member, id],
		queryFn: () => MemberRepository.getById(id),
		enabled: !!id,
	})
}

export const membersFx = (params?: Partial<UseMembers>) =>
	queryFx<void, IMember[]>({
		url: memberConfig.members,
		params,
	})

export const memberFx = (id: number) =>
	queryFx<void, IMember>({
		url: `${memberConfig.member}/${id}/`,
	})

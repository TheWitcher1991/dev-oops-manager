import { queryFx } from '../request'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { tagConfig } from './tag.config'
import { TagRepository } from './tag.repository'
import { ITag, UseTags } from './tag.types'

export const useTags = (params?: Partial<UseTags>) => {
	return useQuery({
		queryKey: [tagConfig.tags, params],
		queryFn: () => TagRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useTag = (id: number) => {
	return useQuery({
		queryKey: [tagConfig.tag, id],
		queryFn: () => TagRepository.getById(id),
		enabled: !!id,
	})
}

export const tagsFx = (params?: Partial<UseTags>) =>
	queryFx<void, ITag[]>({
		url: tagConfig.tags,
		params,
	})

export const tagFx = (id: number) =>
	queryFx<void, ITag>({
		url: `${tagConfig.tag}/${id}/`,
	})

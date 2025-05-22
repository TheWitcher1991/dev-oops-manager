import { queryFx } from '../request'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { organizerConfig } from './organizer.config'
import { OrganizerRepository } from './organizer.repository'
import { IOrganizer, UseOrganizers } from './organizer.types'

export const useOrganizers = (params?: Partial<UseOrganizers>) => {
	return useQuery({
		queryKey: [organizerConfig.organizers, params],
		queryFn: () => OrganizerRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useOrganizer = (id: number) => {
	return useQuery({
		queryKey: [organizerConfig.organizer, id],
		queryFn: () => OrganizerRepository.getById(id),
		enabled: !!id,
	})
}

export const organizersFx = (params?: Partial<UseOrganizers>) =>
	queryFx<void, IOrganizer[]>({
		url: organizerConfig.organizers,
		params,
	})

export const organizerFx = (id: number) =>
	queryFx<void, IOrganizer>({
		url: `${organizerConfig.organizer}/${id}/`,
	})

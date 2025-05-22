import { queryFx } from '../request'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { eventConfig } from './event.config'
import { EventRepository } from './event.repository'
import { IEvent, UseEvents } from './event.types'

export const useEvents = (params?: Partial<UseEvents>) => {
	return useQuery({
		queryKey: [eventConfig.events, params],
		queryFn: () => EventRepository.all(params),
		placeholderData: keepPreviousData,
	})
}

export const useEvent = (id: number) => {
	return useQuery({
		queryKey: [eventConfig.event, id],
		queryFn: () => EventRepository.getById(id),
		enabled: !!id,
	})
}

export const eventsFx = (params?: Partial<UseEvents>) =>
	queryFx<void, IEvent[]>({
		url: eventConfig.events,
		params,
	})

export const eventFx = (id: number) =>
	queryFx<void, IEvent>({
		url: `${eventConfig.event}/${id}/`,
	})

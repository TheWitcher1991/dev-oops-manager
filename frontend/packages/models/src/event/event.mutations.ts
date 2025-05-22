import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@oops/toolkit'

import { eventConfig } from './event.config'
import { EventRepository } from './event.repository'
import { ICreateEvent, IUpdateEvent } from './event.types'

export const useCreateEvent = () => {
	return useMutation({
		mutationFn: (data: ICreateEvent) => EventRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[eventConfig.events]])
		},
	})
}

export const useUpdateEvent = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateEvent>) =>
			EventRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[eventConfig.events],
				[eventConfig.event, id],
			])
		},
	})
}

export const useDeleteEvent = () => {
	return useMutation({
		mutationFn: (id: number) => EventRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[eventConfig.events]])
		},
	})
}

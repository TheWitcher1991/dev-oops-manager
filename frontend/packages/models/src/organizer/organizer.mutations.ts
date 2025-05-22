import { useMutation } from '@tanstack/react-query'

import { optimisticInvalidateQueries } from '@oops/toolkit'

import { organizerConfig } from './organizer.config'
import { OrganizerRepository } from './organizer.repository'
import { ICreateOrganizer, IUpdateOrganizer } from './organizer.types'

export const useCreateOrganizer = () => {
	return useMutation({
		mutationFn: (data: ICreateOrganizer) =>
			OrganizerRepository.create(data),
		onSettled: async () => {
			await optimisticInvalidateQueries([[organizerConfig.organizers]])
		},
	})
}

export const useUpdateOrganizer = (id: number) => {
	return useMutation({
		mutationFn: (data: Partial<IUpdateOrganizer>) =>
			OrganizerRepository.update(id, data),
		onSettled: async () => {
			await optimisticInvalidateQueries([
				[organizerConfig.organizers],
				[organizerConfig.organizer, id],
			])
		},
	})
}

export const useDeleteTag = () => {
	return useMutation({
		mutationFn: (id: number) => OrganizerRepository.delete(id),
		onSettled: async () => {
			await optimisticInvalidateQueries([[organizerConfig.organizers]])
		},
	})
}

import { InferOutput } from 'valibot'

import { UseModelOptions } from '@oops/types'

import {
	CreateOrganizerSchema,
	OrganizerSchema,
	UpdateOrganizerSchema,
} from './organizer.schema'

export type IOrganizer = InferOutput<typeof OrganizerSchema>

export type ICreateOrganizer = InferOutput<typeof CreateOrganizerSchema>

export type IUpdateOrganizer = InferOutput<typeof UpdateOrganizerSchema>

export interface UseOrganizers extends UseModelOptions {}

export interface PropsWithOrganizer {
	organizer: IOrganizer
}

export interface PropsWithOrganizerId {
	organizer: number
}

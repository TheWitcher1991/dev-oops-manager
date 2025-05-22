import { http } from '../request'

import { CrudRepository } from '@oops/toolkit'

import { organizerConfig } from './organizer.config'
import {
	ICreateOrganizer,
	IOrganizer,
	IUpdateOrganizer,
	UseOrganizers,
} from './organizer.types'

export const OrganizerRepository = new CrudRepository<
	IOrganizer[],
	IOrganizer,
	ICreateOrganizer,
	IUpdateOrganizer,
	UseOrganizers
>(http.instance, organizerConfig.organizers)

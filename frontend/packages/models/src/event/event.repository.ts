import { http } from '../request'

import { CrudRepository } from '@oops/toolkit'

import { eventConfig } from './event.config'
import { ICreateEvent, IEvent, IUpdateEvent, UseEvents } from './event.types'

export const EventRepository = new CrudRepository<
	IEvent[],
	IEvent,
	ICreateEvent,
	IUpdateEvent,
	UseEvents
>(http.instance, eventConfig.events)

import { InferOutput } from 'valibot'

import { UseModelOptions } from '@oops/types'

import {
	CreateEventSchema,
	EventSchema,
	UpdateEventSchema,
} from './event.schema'

export type IEvent = InferOutput<typeof EventSchema>

export type ICreateEvent = InferOutput<typeof CreateEventSchema>

export type IUpdateEvent = InferOutput<typeof UpdateEventSchema>

export interface UseEvents extends UseModelOptions {}

export interface PropsWithEvent {
	event: IEvent
}

export interface PropsWithEventId {
	event: number
}

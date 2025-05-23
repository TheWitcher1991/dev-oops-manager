import { CategorySchema } from '../category'
import { OrganizerSchema } from '../organizer'
import { TagSchema } from '../tag'
import { array, enum_, object } from 'valibot'

import { BaseModelSchema, merge, vSchema } from '@oops/toolkit'

import { Format, Spec } from './event.enums'

const BaseEventSchema = object({
	title: vSchema.title,
	description: vSchema.description,
	resources: vSchema.nullable,
	dateStart: vSchema.datetime,
	dateEnd: vSchema.datetime,
	teamMax: vSchema.indicator,
	teamMin: vSchema.indicator,
	format: enum_(Format),
	spec: enum_(Spec),
})

export const EventSchema = merge(
	BaseModelSchema,
	BaseEventSchema,
	object({
		photo: vSchema.url,
		organizer: OrganizerSchema,
		tags: array(TagSchema),
		categories: array(CategorySchema),
	}),
)

export const CreateEventSchema = merge(
	BaseEventSchema,
	object({
		photo: vSchema.image,
		organizer: vSchema.uuid,
		tags: array(vSchema.uuid),
		categories: array(vSchema.uuid),
	}),
)

export const UpdateEventSchema = merge(
	BaseEventSchema,
	object({
		photo: vSchema.image,
		tags: array(vSchema.uuid),
		categories: array(vSchema.uuid),
	}),
)

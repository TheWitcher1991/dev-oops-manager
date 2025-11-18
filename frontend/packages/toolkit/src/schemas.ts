import {
	array,
	BaseSchema,
	custom,
	email,
	instance,
	maxLength,
	maxSize,
	maxValue,
	mimeType,
	minLength,
	minValue,
	nullable,
	number,
	object,
	ObjectEntries,
	ObjectSchema,
	pipe,
	regex,
	startsWith,
	string,
	transform,
	url,
	uuid,
} from 'valibot'

import { IMAGE_FILE_TYPES } from '@oops/system'
import { Branded, MergeObjectEntries } from '@oops/types'

import { regexPatterns } from './regex'

export const buildFileShape = (
	fileUploads: string[],
	video_upload_size_md: number = 10,
) => {
	return pipe(
		instance(File, 'Пожалуйста, выберите файл'),
		mimeType(fileUploads),
		maxSize(video_upload_size_md * 1024 * 1024),
	)
}

export const vSchema = {
	id: pipe(number(), minValue(1)),
	indicator: pipe(number(), minValue(1)),
	image: buildFileShape(IMAGE_FILE_TYPES, 5),
	ids: array(pipe(number(), minValue(1))),
	uuid: pipe(string(), uuid()),
	date: pipe(
		string(),
		regex(regexPatterns.date.value, regexPatterns.date.message),
	),
	datetime: pipe(
		string(),
		custom(val => !Number.isNaN(Date.parse(val)), 'Неверный формат даты'),
	),
	nullable: nullable(string()),
	url: pipe(string(), url('Неверный URL')),
	choice: pipe(number(), minLength(1)),
	title: pipe(string(), minLength(3), maxLength(255)),
	name: pipe(string(), minLength(3), maxLength(64)),
	description: pipe(string(), minLength(3), maxLength(3000)),
	telegram: pipe(string(), minLength(2), maxLength(50), startsWith('@')),
	email: pipe(string(), minLength(2), maxLength(50), email()),
	password: pipe(string(), minLength(8), maxLength(255)),
	decimal: pipe(string(), regex(regexPatterns.decimal.value)),
	phone: pipe(
		string(),
		regex(
			regexPatterns.russianPhone.value,
			regexPatterns.russianPhone.message,
		),
	),
	alpha: pipe(string(), regex(regexPatterns.alpha.value)),
	telegramUrl: pipe(string(), regex(regexPatterns.telegramUrl.value)),

	range: (min: number, max: number) =>
		pipe(number(), minValue(min), maxValue(max)),
	length: (min: number, max: number) =>
		pipe(string(), minLength(min), maxLength(max)),
}

export const BaseModelSchema = (id: BaseSchema<number, any, any>) =>
	object({
		id,
		createdAt: vSchema.datetime,
		updatedAt: vSchema.datetime,
	})

export function vBrand<T, B extends string>(
	schema: BaseSchema<T, any, any>,
	_brand: B,
) {
	return pipe(
		schema,
		transform((val): Branded<T, B> => val as Branded<T, B>),
	)
}

export function merge<Schemas extends ObjectSchema<any, any>[]>(
	...schemas: Schemas
): ObjectSchema<MergeObjectEntries<Schemas>, never> {
	const mergedEntries = schemas.reduce((acc, schema) => {
		return { ...acc, ...schema.entries }
	}, {} as any)

	return object(mergedEntries as ObjectEntries) as ObjectSchema<
		MergeObjectEntries<Schemas>,
		never
	>
}

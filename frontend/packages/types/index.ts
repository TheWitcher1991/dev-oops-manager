import { AxiosResponse } from 'axios'
import React from 'react'
import { ObjectSchema } from 'valibot'

declare const __brand: unique symbol

export type Branded<T, UniqueKey extends string> = T & { __brand: UniqueKey }

export type EnumType<T> = T[keyof T]

export type Dictionary<T = unknown> = Record<string, T>

export type EmptyObject = Record<string, never>

export type Nullable<T> = T | null

export type InjectProps<
	Key extends string,
	Value,
	Extras extends Record<string, any> = {},
> = {
	[K in Key]: Value
} & Extras

export type Response<T> = Promise<AxiosResponse<T>>

interface ModalProps {
	open: boolean
	onClose: () => void
}

interface SelectOption {
	value: string
	content: string
}

interface ResultError {
	code: string
	message: string
	type: string
}

export type OnUploadProgress = (
	progress: number,
	uploaded: number,
	total: number,
) => void

export interface ResultResponse<RESULT> {
	result: RESULT
	error_list: Error[]
	is_error: boolean
	time_generated: string
}

export type Paginated<T> = T[]

export type PaginateQuery = {
	page: number
	pageSize: number
}

export type ValidationErrorResponse =
	| string
	| string[]
	| Dictionary<string>
	| Dictionary<string[]>

export type ModelListField<
	T,
	U extends Record<string, any>,
	M extends Record<string, any> = Record<string, any>,
> = {
	count: number
	loading: boolean
	error: boolean
	fetching?: boolean
	list: T[]
	filter: U
	checked?: number[]
}

export type ModelListState<
	T,
	U extends Record<string, any>,
	M extends Record<string, any> = Record<string, any>,
> = {
	setCount: (count: number) => void
	setError: (error: boolean) => void
	setLoading: (loading: boolean) => void
	setFetching: (fetching: boolean) => void
	setChecked: (checked: number[]) => void
	setList: (list: T[]) => void
	setFilter: (filter: U) => void
	reset: () => void
} & ModelListField<T, U, M>

export interface UseModelOptions<ORDERING extends string = string>
	extends PaginateQuery {
	query: string
	ordering: ORDERING
}

export type MergeObjectEntries<T extends ObjectSchema<any, any>[]> =
	UnionToIntersection<
		T[number] extends ObjectSchema<infer R, any> ? R : never
	>

export type UnionToIntersection<U> = (
	U extends any ? (k: U) => void : never
) extends (k: infer I) => void
	? I
	: never

export const RequestStatus = {
	Accepted: 0,
	Rejected: 1,
	Pending: 2,
} as const

export type RequestStatus = EnumType<RequestStatus>

export type Slug = string | number

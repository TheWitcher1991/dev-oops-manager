import React from 'react'
import { ObjectSchema } from 'valibot'

export type EnumType<T> = T[keyof T]

export type Dictionary<T = unknown> = Record<string, T>

export type EmptyObject = Record<string, never>

export type Nullable<T> = T | null

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
	extends PaginationPageSize {
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

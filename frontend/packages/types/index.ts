import React from 'react'

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

export interface ResultResponse<RESULT> {
	result: RESULT
	error_list: Error[]
	is_error: boolean
	time_generated: string
}

export interface ListResponse<RESULTS = [], META = Record<string, any>> {
	count: number
	pages: number
	next: Nullable<string>
	previous: Nullable<string>
	meta: META
	results: RESULTS[]
}

export type ValidationErrorResponse =
	| string
	| string[]
	| Record<string, string>
	| Record<string, string[]>

export type ModelListField<
	T,
	U extends Record<string, any>,
	M extends Record<string, any> = Record<string, any>,
> = {
	count: number
	loading: boolean
	fetching?: boolean
	list: T[]
	filter: U
	meta: M
	checked?: Collection[]
}

export type ModelListState<
	T,
	U extends Record<string, any>,
	M extends Record<string, any> = Record<string, any>,
> = {
	setCount: (count: number) => void
	setLoading: (loading: boolean) => void
	setFetching: (fetching: boolean) => void
	setChecked: (checked: Collection[]) => void
	setList: (list: T[]) => void
	setMeta: (meta: M) => void
	setFilter: (filter: U) => void
	reset: () => void
} & ModelListField<T, U, M>

export interface UseModelOptions<ORDERING extends string = string>
	extends PaginationPageSize {
	query: string
	ordering: ORDERING
}

import { prepareRequestParams } from '../fn'
import { AxiosInstance, AxiosResponse } from 'axios'

import type { Dictionary, Response } from '@oops/types'

import { BaseRepository } from './base'

export class CrudRepository<
	LIST_GET,
	GET,
	CREATE,
	UPDATE,
	OPTIONS = Dictionary<any>,
	ID extends string | number = number,
> extends BaseRepository {
	constructor(
		readonly http: AxiosInstance,
		readonly URL: string,
	) {
		super(http, URL)
	}

	async findAll(
		params?: Partial<OPTIONS>,
		signal?: AbortSignal,
	): Response<LIST_GET> {
		return await this.http.get<LIST_GET>(`${this.URL}/`, {
			params: prepareRequestParams(params),
			signal,
		})
	}

	async findById(id: ID, signal?: AbortSignal): Response<GET> {
		return await this.http.get<GET>(`${this.URL}/${id}/`, {
			signal,
		})
	}

	async create(data: CREATE, signal?: AbortSignal): Response<GET> {
		return await this.http.post<GET>(`${this.URL}/`, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			signal,
		})
	}

	async update(
		id: ID,
		data: Partial<UPDATE>,
		signal?: AbortSignal,
	): Response<GET> {
		return await this.http.patch<GET>(`${this.URL}/${id}/`, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			signal,
		})
	}

	async delete(id: ID, signal?: AbortSignal): Response<unknown> {
		return await this.http.delete(`${this.URL}/${id}/`, {
			signal,
		})
	}
}

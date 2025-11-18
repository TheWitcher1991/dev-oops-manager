import { prepareRequestParams } from '../fn'
import { AxiosInstance } from 'axios'

import type { Dictionary, Response } from '@oops/types'

import { BaseRepository } from './base'

export class ReadonlyRepository<
	LIST_GET,
	GET,
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
}

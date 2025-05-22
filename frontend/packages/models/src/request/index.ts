import { $account } from '../auth'
import type { CreateAxiosDefaults } from 'axios'

import { API_URL } from '@oops/system'
import { createRequestFx, HTTP } from '@oops/toolkit'

const config: CreateAxiosDefaults = {
	baseURL: `${API_URL}/`,
	withCredentials: true,
	xsrfCookieName: 'csrftoken',
	xsrfHeaderName: 'X-CSRFToken',
	timeoutErrorMessage: 'Превышено время ожидания ответа от сервера',
	headers: {
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
		Accept: 'application/json',
	},
}

export const http = new HTTP({
	config: config,
})

export const queryFx = createRequestFx({
	baseURL: API_URL,
	token: $account.getState().access_token,
})

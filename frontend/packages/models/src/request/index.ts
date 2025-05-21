import { API_URL } from '@oops/system'
import { HTTP } from '@oops/toolkit'

const config = {
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

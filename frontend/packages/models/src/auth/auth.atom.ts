import { Role } from '../user'
import { createEvent, createStore } from 'effector'
import { persist } from 'effector-storage'

import { IAccount } from './auth.types'

const ACCOUNT_INITIAL_STATE: IAccount = {
	access_token: '',
	role: Role.Member,
	user: '0',
	account: '0',
}

export const login = createEvent<Partial<IAccount>>()
export const logout = createEvent()

export const $account = createStore<IAccount>(ACCOUNT_INITIAL_STATE)

$account.on(login, (state, payload) => ({ ...state, ...payload }))
$account.reset(logout)

persist({
	store: $account,
	key: 'account-storage',
})

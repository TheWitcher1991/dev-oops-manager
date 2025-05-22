import { Role } from '../user'
import { enum_, object, string, uuid } from 'valibot'

export const AccountSchema = object({
	access_token: string(),
	role: enum_(Role),
	user: uuid(),
	account: uuid(),
})

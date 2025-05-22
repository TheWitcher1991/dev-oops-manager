import { InferOutput } from 'valibot'

import { UseModelOptions } from '@oops/types'

import { CreateUserSchema, UpdateUserSchema, UserSchema } from './user.schema'

export type IUser = InferOutput<typeof UserSchema>

export type ICreateUser = InferOutput<typeof CreateUserSchema>

export type IUpdateUser = InferOutput<typeof UpdateUserSchema>

export interface UseUsers extends UseModelOptions {}

export interface PropsWithOrganizer {
	user: IUser
}

export interface PropsWithOrganizerId {
	user: number
}

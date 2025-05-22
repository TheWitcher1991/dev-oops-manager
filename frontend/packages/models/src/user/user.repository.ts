import { http } from '../request'

import { CrudRepository } from '@oops/toolkit'

import { userConfig } from './user.config'
import { ICreateUser, IUpdateUser, IUser, UseUsers } from './user.types'

export const UserRepository = new CrudRepository<
	IUser[],
	IUser,
	ICreateUser,
	IUpdateUser,
	UseUsers
>(http.instance, userConfig.users)

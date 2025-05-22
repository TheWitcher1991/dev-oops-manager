import { http } from '../request'

import { CrudRepository } from '@oops/toolkit'

import { inviteConfig } from './invite.config'
import {
	ICreateInvite,
	IInvite,
	IUpdateInvite,
	UseInvites,
} from './invite.types'

export const InviteRepository = new CrudRepository<
	IInvite[],
	IInvite,
	ICreateInvite,
	IUpdateInvite,
	UseInvites
>(http.instance, inviteConfig.invites)

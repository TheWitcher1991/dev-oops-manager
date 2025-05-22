import { http } from '../request'

import { CrudRepository } from '@oops/toolkit'

import { memberConfig } from './member.config'
import {
	ICreateMember,
	IMember,
	IUpdateMember,
	UseMembers,
} from './member.types'

export const MemberRepository = new CrudRepository<
	IMember[],
	IMember,
	ICreateMember,
	IUpdateMember,
	UseMembers
>(http.instance, memberConfig.members)

import { EnumType } from '@oops/types'

export const Role = {
	Organizer: 1,
	Member: 2,
	Moderator: 3,
} as const

export type Role = EnumType<Role>

import { EnumType } from '@oops/types'

export const OrganizerType = {
	LE: 0,
	IE: 1,
	PE: 2,
} as const

export type OrganizerType = EnumType<OrganizerType>

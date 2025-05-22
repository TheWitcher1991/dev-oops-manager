import { EnumType } from '@oops/types'

export const Format = {
	Online: 0,
	Offline: 1,
} as const

export type Format = EnumType<Format>

export const Spec = {
	Conference: 0,
	Exhibition: 1,
	Competition: 2,
	Accelerator: 3,
	Meeting: 4,
	Lecture: 5,
	Mitap: 6,
	Survey: 7,
	Seminar: 8,
	Forum: 9,
	Hackathon: 10,
} as const

export type Spec = EnumType<Spec>

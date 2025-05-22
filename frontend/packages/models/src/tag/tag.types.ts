import { InferOutput } from 'valibot'

import { UseModelOptions } from '@oops/types'

import { CreateTagSchema, TagSchema, UpdateTagSchema } from './tag.schema'

export type ITag = InferOutput<typeof TagSchema>

export type ICreateTag = InferOutput<typeof CreateTagSchema>

export type IUpdateTag = InferOutput<typeof UpdateTagSchema>

export interface UseTags extends UseModelOptions {}

export interface PropsWithTag {
	tag: ITag
}

export interface PropsWithTagId {
	tag: number
}

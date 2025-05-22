import { http } from '../request'

import { CrudRepository } from '@oops/toolkit'

import { tagConfig } from './tag.config'
import { ICreateTag, ITag, IUpdateTag, UseTags } from './tag.types'

export const TagRepository = new CrudRepository<
	ITag[],
	ITag,
	ICreateTag,
	IUpdateTag,
	UseTags
>(http.instance, tagConfig.tags)

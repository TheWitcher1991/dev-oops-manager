import { Slug } from '@oops/types'

import { CategoryID } from './category.types'

export const toCategoryID = (id: Slug): CategoryID => Number(id) as CategoryID

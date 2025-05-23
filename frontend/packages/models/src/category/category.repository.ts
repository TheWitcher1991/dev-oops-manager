import { http } from '../request'

import { CrudRepository } from '@oops/toolkit'

import { categoryConfig } from './category.config'
import {
	ICategory,
	ICreateCategory,
	IUpdateCategory,
	UseCategories,
} from './category.types'

export const CategoryRepository = new CrudRepository<
	ICategory[],
	ICategory,
	ICreateCategory,
	IUpdateCategory,
	UseCategories
>(http.instance, categoryConfig.categories)

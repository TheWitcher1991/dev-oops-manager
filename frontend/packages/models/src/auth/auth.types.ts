import { InferOutput } from 'valibot'

import { AccountSchema } from './auth.schema'

export type IAccount = InferOutput<typeof AccountSchema>

import { format } from 'date-fns'

export const formatDateInRu = (date: string): string => {
	if (!date) return '—'

	return format(new Date(date), 'dd.MM.yyyy')
}

export const formatDateTimeInRu = (date: string): string => {
	if (!date) return '—'

	return format(new Date(date), 'dd.MM.yyyy HH:mm')
}

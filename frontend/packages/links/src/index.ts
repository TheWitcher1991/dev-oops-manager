export const BASE_ROOT_URL = '/'

type HrefSlug = string | number

export const hrefFactory = (entity: HrefSlug) => {
	const base = `${BASE_ROOT_URL}${entity}`
	return {
		get index() {
			return base
		},
		get create() {
			return `${base}/create`
		},
		edit(id: HrefSlug) {
			return `${base}/${id}/edit`
		},
		view(id: HrefSlug) {
			return `${base}/${id}`
		},
	}
}

export const href = {
	get root() {
		return BASE_ROOT_URL
	},

	get home() {
		return this.root
	},
}

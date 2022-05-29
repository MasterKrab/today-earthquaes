// @ts-ignore
const formatter = new Intl.ListFormat('en-US', { style: 'long' })

const formatList = (list: string): string => {
	const items = list.split(',').filter(Boolean)

	return formatter.format(items)
}

export default formatList

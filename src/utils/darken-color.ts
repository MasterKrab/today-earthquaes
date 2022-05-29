const darkenColor = (color: string, amount: number): string => {
	const [r, g, b] = color
		.slice(1)
		.split(',')
		.map((n) => parseInt(n, 16))

	return `rgb(${Math.max(0, r - amount)}, ${Math.max(0, g - amount)}, ${Math.max(0, b - amount)})`
}

export default darkenColor

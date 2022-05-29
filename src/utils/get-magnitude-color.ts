const COlORS = {
	RED: '#bf0000',
	ORANGE: '#d67200',
	YELLOW: '#c5c500',
	GREEN: '#00c500',
	BLUE: '#0000c5'
}

const getMagnitudeColor = (magnitude: number): string => {
	if (magnitude > 5) return COlORS.RED
	if (magnitude > 4) return COlORS.ORANGE
	if (magnitude > 3) return COlORS.YELLOW
	if (magnitude > 2) return COlORS.GREEN
	return COlORS.BLUE
}

export default getMagnitudeColor

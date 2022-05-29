import leaflet from 'leaflet'

// @ts-ignore
const title = leaflet.control({ position: 'topright' })

title.onAdd = () => {
	const title = document.createElement('h1')
	title.className = 'title'
	title.textContent = 'Today earthquakes 🌍'
	return title
}

export default title

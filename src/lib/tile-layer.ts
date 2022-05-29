import leaflet from 'leaflet'

const MAP_URL = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
const MAP_ATTRIBUTION =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'

const tileLayer = leaflet.tileLayer(MAP_URL, {
	attribution: MAP_ATTRIBUTION,
	subdomains: 'abcd',
	maxZoom: 20
})

export default tileLayer

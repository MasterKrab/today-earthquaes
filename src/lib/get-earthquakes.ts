import type { GeoJsonObject } from 'geojson'

const API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'

const getEarthquakes = async () => {
	try {
		const response = await fetch(API_URL)
		const data: GeoJsonObject = await response.json()
		return data
	} catch (error) {
		throw new Error('Failed to fetch earthquakes data')
	}
}

export default getEarthquakes

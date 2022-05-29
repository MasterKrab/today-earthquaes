interface EarthQuakesData {
	type: string
	metadata: {
		totalCount: number
	}
	features: {
		geometry: {
			type:
				| 'Point'
				| 'MultiPoint'
				| 'LineString'
				| 'MultiLineString'
				| 'Polygon'
				| 'MultiPolygon'
				| 'GeometryCollection'
				| 'Feature'
				| 'FeatureCollection'
			coordinates: [number, number, number]
		}
		type:
			| 'Point'
			| 'MultiPoint'
			| 'LineString'
			| 'MultiLineString'
			| 'Polygon'
			| 'MultiPolygon'
			| 'GeometryCollection'
			| 'Feature'
			| 'FeatureCollection'
		id: string
		properties: {
			mag: number
			place: string
			time: number
			updated: number
			tz: number
			url: string
			detail: string
			felt: number
			cdi: number
			mmi: number | null
			alert: string | null
			status: string
			tsunami: number
			sig: number
			net: string
			code: string
			ids: string
			sources: string
			types: string
			nst: number
			dmin: number
			rms: number
			gap: number
			magType: string
			type: string
			title: string
		}
	}[]
	bbox: [number, number, number, number, number, number]
}

export default EarthQuakesData

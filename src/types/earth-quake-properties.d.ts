interface EarthQuakesProperties {
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

export default EarthQuakesProperties

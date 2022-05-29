import getEarthquakes from 'lib/get-earthquakes'
import leaflet from 'leaflet'
import getMagnitudeColor from 'utils/get-magnitude-color'
import formatList from 'utils/format-list'

const earthquakes = await getEarthquakes()

const geojson = leaflet.geoJSON(earthquakes, {
	pointToLayer: ({ properties }, latlng) => {
		const {
			mag: magnitude,
			magType,
			status,
			title,
			place,
			tsunami,
			type,
			time,
			types,
			updated,
			url
		} = properties

		const color = getMagnitudeColor(magnitude)

		const circle = leaflet.circleMarker(latlng, {
			radius: magnitude * 5,
			color: color,
			fillColor: color,
			fillOpacity: 0.25
		})

		const date = new Date(time)
		const updatedDate = new Date(updated)

		const html = `
				<article class="information">
					<h2 class="information__title">${title}</h3>
					<ul class="information__list" tabindex="0">
						<li class="information__item">
							<span class="information__name">Place:</span> ${place}
						</li>
						<li class="information__item">
							<span class="information__name">Magnitude:</span> ${magnitude} ${magType}
						</li>
						<li class="information__item">
							<time datetime="${date.toISOString()}">
								<span class="information__name">Date:</span> ${date.toLocaleString('en')}
							</time>
						</li>
						<li class="information__item">
							<span class="information__name">Tsunami:</span> ${tsunami ? 'Yes' : 'No'}
						</li>
						<li class="information__item">
							<span class="information__name">Review Status:</span> ${status}
						</li>
						<li class="information__item">
							<span class="information__name">Depth:</span ${latlng.alt} km
						</li>
						<li class="information__item">
							<span class="information__name">Type:</span> ${type}
						</li>
						<li class="information__item">
							<span class="information__name">Types:</span> ${formatList(types)}
						</li>
						<li class="information__item">
							<time datetime="${updatedDate.toISOString()}">
								<span class="information__name">Last update:</span> ${updatedDate.toLocaleString('en')}
							</time>
						</li>
						<li class="information__item">
							<h2 class="information__subtitle">Coordinates:</h2>
							<ul class="information__sublist">
								<li class="information__item">
									<span class="information__name">Altitude:</span> ${latlng.alt}
								</li>
								<li class="information__item">
									<span class="information__name">Latitude:</span> ${latlng.lat}
								</li>
								<li class="information__item">
									<span class="information__name">Longitude:</span> ${latlng.lng}
								</li>
							</ul>
						</li>
					</ul>
					<a class="information__link" aria-label="More info about ${title}" href="${url}" target="_blank" rel="noreferrer noopener">More info</a>
				</article>
			`

		circle.bindPopup(html)

		return circle
	}
})

export default geojson

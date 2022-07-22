import type leaflet from 'leaflet'
import getSupportsGeolocationApi from 'utils/get-supports-geolocation-api'

const PERMISSION_DENIED = 'denied'

const createGeolocationButton = (map: leaflet.Map) => {
	if (!getSupportsGeolocationApi) return

	const button = document.createElement('button')
	button.classList.add('geolocation-button')
	button.setAttribute('aria-label', 'Find my location')
	button.textContent = '📍'

	navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
		button.disabled = permissionStatus.state === PERMISSION_DENIED

		permissionStatus.addEventListener('change', () => {
			button.disabled = permissionStatus.state === PERMISSION_DENIED
		})
	})

	button.addEventListener('click', () => {
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			map.setView([coords.latitude, coords.longitude], 8)
		})
	})

	document.body.appendChild(button)
}

export default createGeolocationButton

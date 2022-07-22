import leaflet from 'leaflet'
import tileLayer from 'lib/tile-layer'
import title from 'lib/title'
import getGeoJson from 'lib/get-geo-json'
import createGeolocationButton from 'lib/create-geolocation-button'
import 'leaflet/dist/leaflet.css'
import '@fontsource/poppins'
import 'styles/index.scss'

const map = leaflet.map('map').setView([0, 0], 1.5)

getGeoJson().then((geoJson) => geoJson.addTo(map))

tileLayer.addTo(map)
title.addTo(map)

createGeolocationButton(map)

import leaflet from 'leaflet'
import tileLayer from 'lib/tile-layer'
import title from 'lib/title'
import geojson from 'lib/geojson'
import 'leaflet/dist/leaflet.css'
import '@fontsource/poppins'
import 'styles/index.scss'

const map = leaflet.map('map').setView([0, 0], 1.5)

tileLayer.addTo(map)
title.addTo(map)
geojson.addTo(map)

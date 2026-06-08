import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Build an explicit icon instead of relying on L.Icon.Default. The default
// class overrides _getIconUrl() with auto-path detection that ignores
// mergeOptions in bundled apps, which causes the marker images to 404.
const defaultIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const PORTLAND = [45.5152, -122.6784]

function PinMap() {
  return (
    <MapContainer
      center={PORTLAND}
      zoom={6}
      scrollWheelZoom={true}
      className="h-[500px] w-full rounded-[0.25rem]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={PORTLAND} icon={defaultIcon}>
        <Popup>Hello from PORTLAND, Oregon!</Popup>
      </Marker>
    </MapContainer>
  )
}

export default PinMap

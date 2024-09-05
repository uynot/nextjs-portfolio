import { useEffect } from "react";

export default function MapComponent() {
	useEffect(() => {
		const loadGoogleMaps = () => {
			const map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
				center: { lat: 43.7184, lng: -79.5181 },
				zoom: 10,
				styles: [
					{
						elementType: "geometry",
						stylers: [{ color: "#212121" }],
					},
					{
						elementType: "labels.icon",
						stylers: [{ visibility: "off" }],
					},
					{
						elementType: "labels.text.fill",
						stylers: [{ color: "#757575" }],
					},
					{
						elementType: "labels.text.stroke",
						stylers: [{ color: "#212121" }],
					},
					{
						featureType: "administrative",
						elementType: "geometry",
						stylers: [{ color: "#757575" }],
					},
					{
						featureType: "administrative.country",
						elementType: "labels.text.fill",
						stylers: [{ color: "#9e9e9e" }],
					},
					{
						featureType: "administrative.land_parcel",
						stylers: [{ visibility: "off" }],
					},
					{
						featureType: "administrative.locality",
						elementType: "labels.text.fill",
						stylers: [{ color: "#bdbdbd" }],
					},
					{
						featureType: "poi",
						elementType: "labels.text.fill",
						stylers: [{ color: "#757575" }],
					},
					{
						featureType: "poi.park",
						elementType: "geometry",
						stylers: [{ color: "#181818" }],
					},
					{
						featureType: "poi.park",
						elementType: "labels.text.fill",
						stylers: [{ color: "#616161" }],
					},
					{
						featureType: "poi.park",
						elementType: "labels.text.stroke",
						stylers: [{ color: "#1b1b1b" }],
					},
					{
						featureType: "road",
						elementType: "geometry.fill",
						stylers: [{ color: "#2c2c2c" }],
					},
					{
						featureType: "road",
						elementType: "labels.text.fill",
						stylers: [{ color: "#8a8a8a" }],
					},
					{
						featureType: "road.arterial",
						elementType: "geometry",
						stylers: [{ color: "#373737" }],
					},
					{
						featureType: "road.highway",
						elementType: "geometry",
						stylers: [{ color: "#3c3c3c" }],
					},
					{
						featureType: "road.highway.controlled_access",
						elementType: "geometry",
						stylers: [{ color: "#4e4e4e" }],
					},
					{
						featureType: "road.local",
						elementType: "labels.text.fill",
						stylers: [{ color: "#616161" }],
					},
					{
						featureType: "transit",
						elementType: "labels.text.fill",
						stylers: [{ color: "#757575" }],
					},
					{
						featureType: "water",
						elementType: "geometry",
						stylers: [{ color: "#000000" }],
					},
					{
						featureType: "water",
						elementType: "labels.text.fill",
						stylers: [{ color: "#3d3d3d" }],
					},
				],
			});
		};

		// Wait for the Google Maps API to be loaded
		if (window.google && window.google.maps) {
			loadGoogleMaps();
		} else {
			window.initMap = loadGoogleMaps;
		}
	}, []);

	return <div id="map" className="w-full h-96 rounded-lg overflow-hidden"></div>;
}

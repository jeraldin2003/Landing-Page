import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Polyline } from "react-leaflet";
import { useState, useEffect } from 'react'
import "./map.css"
import { findNearest } from 'geolib';


function findsClosestStore(locations, latitude, longitude) {

    const myLocation = { latitude: latitude, longitude: longitude };
    const nearest = findNearest(myLocation, locations);
    return nearest
}

export default function Map() {
    const [coordinates, setCoordinates] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoordinates({ latitude: position.coords.latitude, longitude: position.coords.longitude });
            },
            (error) => {
                console.error(error.message);
            }
        );
    }, []);

    if (!coordinates) {
        return (<></>)
    }
    else {
        const locations = [
            { latitude: 28.524355, longitude: 77.185248 },
            { latitude: 28.541836, longitude: 77.238243 },
            { latitude: 51.503333, longitude: -0.119722 },
        ];
        const nearestStore = findsClosestStore(locations, coordinates.latitude, coordinates.longitude)
        console.log(nearestStore.latitude, coordinates.latitude)    
        return (
            <>
                <div className="map-box">
                    <h2>Find our nearest Store....</h2>
                    <MapContainer
                        center={[(coordinates.latitude + nearestStore.latitude) / 2, (coordinates.longitude + nearestStore.longitude) / 2]}
                        zoom={12}
                        style={{ height: "400px", width: "70%", "borderRadius": "16px", }}
                        className={"auto"}
                    >
                        {nearestStore && (<Polyline
                            positions={[
                                [coordinates.latitude, coordinates.longitude],
                                [nearestStore.latitude, nearestStore.longitude],
                            ]}
                        />)}
                        <TileLayer
                            attribution='&copy; OpenStreetMap contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[coordinates.latitude, coordinates.longitude]}>
                            <Popup>You are here..</Popup>
                        </Marker>
                        {
                            locations.map((l, index) => {
                                return (
                                    <Marker key={index} position={[l.latitude, l.longitude]}>
                                        <Popup>We are here..</Popup>
                                    </Marker>)
                            })
                        }
                    </MapContainer>
                </div>
            </>
        );
    }

}

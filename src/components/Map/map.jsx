// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { Polyline } from "react-leaflet";
// import { useState, useEffect } from 'react'
// import "./map.css"
// import { findNearest } from 'geolib';


// function findsClosestStore(locations, latitude, longitude) {

//     const myLocation = { latitude: latitude, longitude: longitude };
//     const nearest = findNearest(myLocation, locations);
//     return nearest
// }

// export default function Map() {
//     const [coordinates, setCoordinates] = useState(null)
//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 setCoordinates({ latitude: position.coords.latitude, longitude: position.coords.longitude });
//             },
//             (error) => {
//                 console.error(error.message);
//             }
//         );
//     }, []);

//     if (!coordinates) {
//         return (<></>)
//     }
//     else {
//         const locations = [
//             { latitude: 28.524355, longitude: 77.185248 },
//             { latitude: 28.541836, longitude: 77.238243 },
//             { latitude: 51.503333, longitude: -0.119722 },
//         ];
//         const nearestStore = findsClosestStore(locations, coordinates.latitude, coordinates.longitude)
//         console.log(nearestStore.latitude, coordinates.latitude)    
//         return (
//             <>
//                 <div className="map-box">
//                     <h2>Find our nearest Store....</h2>
//                     <MapContainer
//                         center={[(coordinates.latitude + nearestStore.latitude) / 2, (coordinates.longitude + nearestStore.longitude) / 2]}
//                         zoom={12}
//                         style={{ height: "400px", width: "70%", "borderRadius": "16px", }}
//                         className={"auto"}
//                     >
//                         {nearestStore && (<Polyline
//                             positions={[
//                                 [coordinates.latitude, coordinates.longitude],
//                                 [nearestStore.latitude, nearestStore.longitude],
//                             ]}
//                         />)}
//                         <TileLayer
//                             attribution='&copy; OpenStreetMap contributors'
//                             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         />
//                         <Marker position={[coordinates.latitude, coordinates.longitude]}>
//                             <Popup>You are here..</Popup>
//                         </Marker>
//                         {
//                             locations.map((l, index) => {
//                                 return (
//                                     <Marker key={index} position={[l.latitude, l.longitude]}>
//                                         <Popup>We are here..</Popup>
//                                     </Marker>)
//                             })
//                         }
//                     </MapContainer>
//                 </div>
//             </>
//         );
//     }

// }




import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import "./map.css";
import { findNearest } from "geolib";
import polyline from "@mapbox/polyline";

function findsClosestStore(locations, latitude, longitude) {
    const myLocation = { latitude, longitude };
    return findNearest(myLocation, locations);
}

export default function Map() {
    const [coordinates, setCoordinates] = useState(null);
    const [routePoints, setRoutePoints] = useState([]);

    const locations = [
        { latitude: 28.524355, longitude: 77.185248 },
        { latitude: 28.541836, longitude: 77.238243 },
        { latitude: 51.503333, longitude: -0.119722 },
    ];

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoordinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                console.error(error.message);
            }
        );
    }, []);

    useEffect(() => {
        if (!coordinates) return;

        const nearestStore = findsClosestStore(
            locations,
            coordinates.latitude,
            coordinates.longitude
        );

        const getRoute = async () => {
            try {
                const response = await fetch("http://localhost:3001/route", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        origin: {
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                        },
                        destination: {
                            latitude: nearestStore.latitude,
                            longitude: nearestStore.longitude,
                        },
                    }),
                });

                const data = await response.json();

                const encodedPolyline =
                    data.routes[0].polyline.encodedPolyline;

                const decodedPoints = polyline.decode(encodedPolyline);

                setRoutePoints(decodedPoints);
            } catch (error) {
                console.error("Error fetching route:", error);
            }
        };

        getRoute();
    }, [coordinates]);

    if (!coordinates) {
        return <></>;
    }

    const nearestStore = findsClosestStore(
        locations,
        coordinates.latitude,
        coordinates.longitude
    );

    return (
        <>
            <div className="map-box">
                <h2>Find our nearest Store....</h2>

                <MapContainer
                    center={[
                        (coordinates.latitude + nearestStore.latitude) / 2,
                        (coordinates.longitude + nearestStore.longitude) / 2,
                    ]}
                    zoom={12}
                    style={{
                        height: "400px",
                        width: "70%",
                        borderRadius: "16px",
                    }}
                    className="auto"
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker
                        position={[
                            coordinates.latitude,
                            coordinates.longitude,
                        ]}
                    >
                        <Popup>You are here..</Popup>
                    </Marker>

                    {locations.map((l, index) => (
                        <Marker
                            key={index}
                            position={[l.latitude, l.longitude]}
                        >
                            <Popup>We are here..</Popup>
                        </Marker>
                    ))}

                    {routePoints.length > 0 && (
                        <Polyline positions={routePoints} />
                    )}
                </MapContainer>
            </div>
        </>
    );
}
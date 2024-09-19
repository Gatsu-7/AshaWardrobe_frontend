import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon (Optional)
// import markerIcon from "./custom-marker.png";

// Fixing default marker icon issues with Leaflet and Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Coordinates for donation drop-off points
const donationLocations = [
  {
    name: "Community Center - Delhi",
    coords: [28.7041, 77.1025],
    description: "Main drop-off point in Delhi.",
  },
  {
    name: "NGO Center - Mumbai",
    coords: [19.076, 72.8777],
    description: "Drop-off point in Mumbai.",
  },
  {
    name: "Relief Camp - Bangalore",
    coords: [12.9716, 77.5946],
    description: "Relief camp for rural donations in Bangalore.",
  },
  {
    name: "Clothing Drive - Kolkata",
    coords: [22.5726, 88.3639],
    description: "Join the upcoming clothing drive in Kolkata.",
  },
];

const InteractiveDonationMap = () => {
  return (
    <div
      className="map-section"
      style={{
        textAlign: "center",
        padding: "50px 0",
        outline: "none",
      }}
    >
      <h2 style={{ fontSize: "2.5em" }}>Where Your Donations Go</h2>
      <p>Explore the locations where your donations are making a difference!</p>

      <div
        style={{
          height: "700px",
          width: "100%",
          margin: "20px auto",
        }}
      >
        <MapContainer
          center={[20.5937, 78.9629]} // Centered on India
          zoom={5}
          style={{ height: "100%", width: "100%", borderRadius: "15px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {donationLocations.map((location, index) => (
            <Marker key={index} position={location.coords}>
              <Popup>
                <strong>{location.name}</strong>
                <p>{location.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default InteractiveDonationMap;

import React from "react";

function VRWrapper() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src="/VRView.html" // This looks in the public folder
        title="VR View"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="xr-spatial-tracking; gyroscope; accelerometer"
      />
    </div>
  );
}

export default VRWrapper;
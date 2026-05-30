import { useEffect } from "react";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function GatewayInAR() {
  useEffect(() => {
    const init = async () => {
  try {
    await loadScript("https://aframe.io/releases/1.4.2/aframe.min.js");
    await loadScript("https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js");
    // ADD THIS NEW SCRIPT for dragging:
    await loadScript("https://raw.githack.com/fcor/arjs-gestures/master/dist/gestures.js");
  } catch (err) {
    console.error(err);
  }
};
    init();

    return () => {
      const video = document.querySelector("video");
      if (video && video.srcObject) {
        video.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div
      style={{ margin: 0, overflow: "hidden", height: "100vh", width: "100vw" }}
      dangerouslySetInnerHTML={{
        __html: `
        <a-scene 
  embedded 
  arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono; matrixCodeType: 3x3;" 
  gesture-detector
  vr-mode-ui="enabled: false"
>
  <a-entity 
    id="wrapper" 
    position="0 0 -5" 
    class="clickable" 
    gesture-handler="targetElement: #wrapper;" 
    rotation="0 0 0"
  animation__rotate="property: rotation; to: 0 360 0; loop: true; dur: 10000" 
  >

  <a-ring
              id="circle"
              rotation="-90 0 0"
              radius-inner="0.01"
              radius-outer="0.02"
            ></a-ring>
     <a-gltf-model 
        src="/model/gatein.glb" 
        scale="0.5 0.5 0.5"
        rotation="0 -1 0"
     ></a-gltf-model>
  </a-entity>
        `,
      }}
    />
  );
}
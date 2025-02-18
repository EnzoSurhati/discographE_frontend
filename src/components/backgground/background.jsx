// import React, { useEffect, useRef, useState } from "react";
// import CLOUDS from "vanta/dist/vanta.clouds.min";
// import * as THREE from "three";

// const VantaBackground = ({ children }) => {
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         CLOUDS({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           backgroundColor: 0x1777215, 
//           cloudColor: 0x11387358,
//           cloudShadowColor: 0x1586512,
//           sunColor: 0xff9919,
//           sunGlareColor: 0xff6c33,
//           sunlightColor: 0xff6933,
//           speed: 1.2,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return (
//     <div ref={vantaRef} className="w-full h-screen relative">
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//         {children} {/* Allow child components like text/forms */}
//       </div>
//     </div>
//   );
// };

// export default VantaBackground;
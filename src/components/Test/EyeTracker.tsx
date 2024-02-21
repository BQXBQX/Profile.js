// EyeTracker.tsx

import React, { useState } from "react";

interface EyeTrackerProps {
  eyeSize: number;
}

const EyeTracker: React.FC<EyeTrackerProps> = ({ eyeSize }) => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setEyePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      className="eye-tracker"
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        className="eye"
        style={{
          position: "absolute",
          width: eyeSize,
          height: eyeSize,
          borderRadius: "50%",
          backgroundColor: "white",
          left: eyePosition.x - eyeSize / 2,
          top: eyePosition.y - eyeSize / 2,
        }}
      />
    </div>
  );
};

export default EyeTracker;

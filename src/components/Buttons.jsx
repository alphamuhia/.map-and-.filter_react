import React, { useState } from "react";

function HoverComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`w-52 h-52 flex items-center justify-center text-xl transition-colors duration-300 ${
        isHovered ? "bg-blue-300" : "bg-red-300"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? "Hovered!" : "Hover over me"}
    </div>
  );
}

export default HoverComponent;

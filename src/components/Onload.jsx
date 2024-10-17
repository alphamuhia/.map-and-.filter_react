import React, { useEffect } from "react";

function Onload() {
  useEffect(() => {
    let Onload = () => {
      alert("Image loaded");
    };
  }, []);
  return (
    <div>
      <h1>Image loader</h1>
      <img src="images/alpha.jpg" alt="" onLoad={() => alert("Image loaded")} />
    </div>
  );
}

export default Onload;

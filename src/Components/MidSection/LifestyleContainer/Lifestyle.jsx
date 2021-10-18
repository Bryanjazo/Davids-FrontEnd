import useEnhancedEffect from "@mui/utils/useEnhancedEffect";
import React, { useEffect, useState } from "react";

import "./LifeStyle.css";

import LifeStyleText from "./LifeStyleText";
export default function Lifestyle() {
  const [lifestyle, setLifestyle] = useState([]);
  useEffect(() => {
    fetch("http://localHost:8080/api/v1/lifestyles")
      .then((resp) => resp.json())
      .then((data) => setLifestyle(data));
  }, []);

  return (
    <div className="lifeStyleSection">
      <h3 className="lifeStyleHeader">LIFESTYLE</h3>
      {lifestyle.map((list) => (
        <LifeStyleText {...list} />
      ))}
    </div>
  );
}

import useEnhancedEffect from "@mui/utils/useEnhancedEffect";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./LifeStyle.css";

import LifeStyleText from "./LifeStyleText";
export default function Lifestyle() {
  const [lifestyle, setLifestyle] = useState([]);

  const { blogs } = useSelector((state) => state.crypto);
  let blogsList = blogs.map((blog) => blog);

  return (
    <div className="lifeStyleSection">
      <h3 className="lifeStyleHeader">LIFESTYLE</h3>

      <LifeStyleText blog={blogsList} />
    </div>
  );
}

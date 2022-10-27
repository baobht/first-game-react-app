import React, { useEffect } from "react";
import logo from "../logo.svg";
import dog from "../assets/dog_left_right_white.png";

import "./styles.scss";
import Player from "./Player";

function NewComponent() {
    useEffect(() => {
        window.addEventListener('load', () => {
            const player = new (Player as any)(window.innerWidth, window.innerHeight);
            console.log("🚀 ~ file: testComp.tsx ~ line 12 ~ window.addEventListener ~ player", player)
        })
    }, [])
  return (
    <div className="Game">
      <canvas id="canvas1"></canvas>
      <img src={dog} id="dog" className="Game-logo" alt="logo" />
      <h1 id="loading">Loading....</h1>
      
    </div>
  );
}

export default NewComponent;

import { useEffect, useState } from "react";
import dog from "../assets/dog_left_right_white.png";

import { convertKey, draw } from "./Player";
import "./styles.scss";

function NewComponent() {
  const [click, setCLick] = useState(false);
  const [lastKey, setLastKey] = useState({
    prev: "",
    next: "",
  })

  useEffect(() => {
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let frameXXX = 0;

    const a = setInterval(async () => {
      const key = Number(localStorage.getItem('lastKey') || 0)
      if (frameXXX < 6) {
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
        draw(ctx, canvas.width, canvas.height, key, frameXXX)
        frameXXX++;
      }
      else frameXXX = 0;
    }, 100)
    return () => {
      clearInterval(a);
      const key = Number(localStorage.getItem('lastKey') || 0)
      draw(ctx, canvas.width, canvas.height, key, frameXXX)
    }
  }, [click])

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          setLastKey({
            prev: lastKey.next,
            next: "PRESS_LEFT"
          })
          localStorage.setItem('lastKey', (convertKey({
            prev: lastKey.next,
            next: "PRESS_LEFT"
          })))
          break;
        case 'ArrowRight':
          setLastKey({
            prev: lastKey.next,
            next: "PRESS_RIGHT"
          })
          localStorage.setItem('lastKey', (convertKey({
            prev: lastKey.next,
            next: "PRESS_RIGHT"
          })))
          break;
        case 'ArrowDown':
          setLastKey({
            prev: lastKey.next,
            next: "PRESS_DOWN"
          })
          localStorage.setItem('lastKey', convertKey({
            prev: lastKey.next,
            next: "PRESS_DOWN"
          }))
          break;
        case 'ArrowUp':
          setLastKey({
            prev: lastKey.next,
            next: "PRESS_UP"
          })
          localStorage.setItem('lastKey', (convertKey({
            prev: lastKey.next,
            next: "PRESS_UP"
          })))
          break;
        default:
          break;
      }
    })
  }, [])

  return (
    <div className="Game">
      <canvas id="canvas1"></canvas>
      <img src={dog} id="dog" className="Game-logo" alt="logo" />
      {/* <h1 id="loading">Loading....</h1> */}
    </div>
  );
}

export default NewComponent;

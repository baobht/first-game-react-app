import { useEffect, useState } from "react";
import dog from "../assets/dog_left_right_white.png";

import { convertKey, draw, drawStatusText } from "./Player";
import "./styles.scss";

function NewComponent() {
  const curFrame = 0
  const [click, setCLick] = useState(false);
  const [lastKey, setLastKey] = useState({
    prev: "",
    next: "",
  })
  useEffect(() => {
    // window.addEventListener('load', () => {
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

    }, 120)
    console.log(a);

    console.log("🚀 ~ file: testComp.tsx ~ line 12 ~ window.addEventListener ~ player")
    // })
    return () => {
      clearInterval(a);
      console.log(canvas);
      const key = Number(localStorage.getItem('lastKey') || 0)
      draw(ctx, canvas.width, canvas.height, key, frameXXX)

    }
  }, [click, lastKey])

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      console.log("vốdisdoi");

      // if (e.key !== lastKey.next) {
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
      // }
    })

    // window.addEventListener('keyup', (e) => {
    //   console.log(e);
    //   switch (e.key) {
    //     case 'ArrowLeft':
    //       setLastKey('PRESS left')
    //       break;
    //     default:
    //       break;
    //   }
    // })
  }, [])

  return (
    <div className="Game">
      <button onClick={() => {

        setCLick(!click);
      }}>Hello</button>
      <canvas id="canvas1"></canvas>
      <img src={dog} id="dog" className="Game-logo" alt="logo" />
      {/* <h1 id="loading">Loading....</h1> */}
    </div>
  );
}

export default NewComponent;

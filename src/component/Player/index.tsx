
// import "./styles.scss";

export const draw = (canvas: CanvasRenderingContext2D | null, _gameWidth: number, _gameHeight: number, key: number, curFrame: number) => {
  // console.log("🚀 ~ file: index.tsx ~ line 5 ~ draw ~ curFrame", curFrame)
  const gameWidth = _gameWidth;
  const gameHeight = _gameHeight;
  const states: any[] = [];
  const currentState = states[0];
  const image = document.getElementById("dog");
  const width = 200;
  const height = 181.83;
  const maxFrames = 6;
  const x = gameWidth / 2 - width / 2;
  const y = gameHeight - height - 101;
  let frameX = curFrame
  const frameY = key
  if (canvas) {
    canvas.drawImage(image as CanvasImageSource, width * frameX, height * frameY, width, height, x, y, width, height)

  }
}

export const convertKey = (key: { prev: string, next: string }) => {
  const { prev, next } = key
  if (next.includes("LEFT")) return "1";
  return "0"
}

export const drawStatusText = (canvas: CanvasRenderingContext2D | null, lastKey: string) => {
  if (canvas) {
    canvas.font = '30px Helvetica';
    canvas.fillText('Last input: ' + lastKey, 20, 50)
  }
}


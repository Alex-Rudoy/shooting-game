import "../scss/main.scss";
import draw from "./logic/draw";

let f = 0;
let prevTime = 0;

function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  f = time - prevTime;
  prevTime = time;

  draw(f);
}

gameLoop();

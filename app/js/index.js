import "../scss/main.scss";
import GameStateManager from "./logic/GameStateManager";
import playerControls from "./logic/playerControls";

let gameStateManager = new GameStateManager();
playerControls(gameStateManager);

// time variables
let f = 0;
let prevTime = 0;

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  // f = amount of frames (16.666... ms)
  f = ((time - prevTime) * 60) / 1000;
  if (isNaN(f)) f = 1;
  prevTime = time;

  gameStateManager.loop(f);
}

gameLoop();

import "../scss/main.scss";
import Player from "./classes/Player";
import draw from "./logic/draw";
import move from "./logic/move";
import playerControls from "./logic/playerControls";
import spawn from "./logic/spawn";

let gameState = {
  paused: false,
};

// object with all entities
let entities = {
  player: new Player({}),
  playerShots: [],
  enemies: [],
};

playerControls(entities.player);

// time variables
let f = 0;
let prevTime = 0;

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  // f = amount of frames (16.666... ms)
  f = ((time - prevTime) * 60) / 1000;
  if (isNaN(f)) f = 1;
  prevTime = time;

  spawn(entities, f * 16);
  move(entities, f);
  draw(entities, f);
}

gameLoop();

import "../scss/main.scss";
import Player from "./classes/Player";
import draw from "./logic/draw";
import move from "./logic/move";
import playerControls from "./logic/playerControls";
import spawn from "./logic/spawn";

// object with all entities
let entities = {};
entities.player = new Player({});
entities.playerShots = [];
entities.enemies = [];

playerControls(entities.player);

// time variables
let f = 0;
let prevTime = 0;

function gameLoop(time) {
  requestAnimationFrame(gameLoop);
  // f = amount of frames (16.666... ms)
  if (isNaN(time)) time = 0;
  f = ((time - prevTime) * 60) / 1000;
  prevTime = time;

  spawn(entities, time);
  move(entities, f);
  draw(entities, f);
}

gameLoop();

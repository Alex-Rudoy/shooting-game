import "../scss/main.scss";
import Player from "./classes/player";
import draw from "./logic/draw";
import move from "./logic/move";

// time variables
let f = 0;
let prevTime = 0;

// object with all entities
let entities = {};
entities.player = new Player();
entities.playerShots = [];
entities.enemies = [];

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  // f = amount of frames (16.666... ms)
  f = ((time - prevTime) * 60) / 1000;
  if (isNaN(f)) f = 1;
  prevTime = time;

  move(entities, f);
  draw(entities, f);
}

gameLoop();

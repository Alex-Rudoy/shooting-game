import "../scss/main.scss";
import EnemyRectangle1 from "./classes/EnemyRectangle1";
import Player from "./classes/Player";
import draw from "./logic/draw";
import move from "./logic/move";
import playerControls from "./logic/playerControls";
import spawn from "./logic/spawn";

// time variables
let f = 0;
let prevTime = 0;

// object with all entities
let entities = {};
entities.player = new Player({});
entities.playerShots = [];
entities.enemies = [];

entities.enemies.push(new EnemyRectangle1({ x: 1200, y: 700 }));

playerControls(entities.player);

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  // f = amount of frames (16.666... ms)
  f = ((time - prevTime) * 60) / 1000;
  if (isNaN(f)) f = 1;
  prevTime = time;

  spawn(entities, f);
  move(entities, f);
  draw(entities, f);
}

gameLoop();

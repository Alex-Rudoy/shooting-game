import "../scss/main.scss";
import Player from "./classes/Player";
import gameStateManager from "./logic/gameStateManager";
import playerControls from "./logic/playerControls";

// object with all entities and game state
let gameState = {
  screen: "menu",
  maxlvl: 0,
  lvl: 0,
  player: new Player({}),
  playerShots: [],
  enemies: [],
};

playerControls(gameState.player);

// time variables
let f = 0;
let prevTime = 0;

function gameLoop(time) {
  requestAnimationFrame(gameLoop);

  // f = amount of frames (16.666... ms)
  f = ((time - prevTime) * 60) / 1000;
  if (isNaN(f)) f = 1;
  prevTime = time;

  gameStateManager(gameState, f);
}

gameLoop();

import draw from "./draw";
import move from "./move";
import spawn from "./spawn";

let waveTime = 0;

let prevScreen = "menu";

export default function gameStateManager(ui, gameState, f) {
  if (gameState.screen != prevScreen) {
    prevScreen = gameState.screen;
  }
  if (gameState.screen == "game") {
    waveTime += f * 16;
    spawn(gameState, waveTime);
    move(gameState, f);
    draw(gameState, f);
  }
}

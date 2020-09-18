let waveTime = 0;

let prevScreen = "menu";

export default function gameStateManager(gameState, f) {
  if (gameState.screen != prevScreen) {
    prevScreen = gameState.screen;
  }
  if (gameState.screen == "game") {
    waveTime += f;
    spawn(gameState, f * 16);
    move(gameState, f);
    draw(gameState, f);
  }
}

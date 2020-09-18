import draw from "../logic/draw";
import move from "../logic/move";
import spawn from "../logic/spawn";
import Player from "./Player";

export default class GameStateManager {
  constructor() {
    this.gameState = {
      screen: "menu",
      prevScreen: "menu",
      maxlvl: 1,
      lvl: 0,
      waveTime: 0,
      player: new Player({}),
      playerShots: [],
      enemies: [],
    };

    this.buttons = document.querySelectorAll(".button");
    this.buttons.forEach((button) => {
      button.addEventListener("click", (e) => this.buttonClickHandler(e));
    });
    this.canvas = document.querySelector("canvas");
    this.menuScreen = document.querySelector(".menu");
    this.pauseScreen = document.querySelector(".pause");
    this.gameOverScreen = document.querySelector(".game-over");
  }

  loop(f) {
    if (this.gameState.screen != this.gameState.prevScreen) {
      this.gameState.prevScreen = this.gameState.screen;
    }

    if (this.gameState.screen == "game") {
      this.gameState.waveTime += f * 16;

      spawn(this.gameState);
      move(this.gameState, f);
      draw(this.gameState, f);

      //game over
      if (this.gameState.player.HP <= 0) {
        this.gameOver();
      }
    }
  }

  buttonClickHandler(e) {
    let buttonClicked = e.target.dataset.button;
    switch (buttonClicked) {
      case "Tutorial":
        this.startTutorial();
        return;
      case "Level":
        this.startLevel(e.target.dataset.level);
        return;
      case "Continue":
        this.pause();
        return;
      default:
        return;
    }
  }

  startTutorial() {
    this.gameState.screen = "game";
    this.gameState.lvl = 0;
    this.menuScreen.classList.remove("menu--visible");
  }

  startLevel(lvl) {
    if (this.gameState.maxlvl >= lvl) {
      this.gameState.screen = "game";
      this.gameState.lvl = lvl;
      this.menuScreen.classList.remove("menu--visible");
    }
  }

  gameOver() {
    this.gameState.screen = "gameOver";
  }

  pause() {
    if (this.gameState.screen == "game") {
      this.gameState.screen = "pause";
      this.canvas.classList.add("blurred");
      return;
    }
    if (this.gameState.screen == "pause") {
      this.gameState.screen = "game";
      this.canvas.classList.remove("blurred");
    }
  }
}

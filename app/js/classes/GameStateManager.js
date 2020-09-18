import draw from "../logic/draw";
import levels from "../logic/levels";
import move from "../logic/move";
import spawn from "../logic/spawn";
import Player from "./Player";

export default class GameStateManager {
  constructor() {
    this.screen = "menu";

    this.maxlvl = 1;
    this.lvl = 0;
    this.wave = 0;
    this.waveEnemies = [];
    this.waveTime = 0;

    this.player = new Player({});
    this.playerShots = [];
    this.enemies = [];

    this.canvas = document.querySelector("canvas");
    this.menuScreen = document.querySelector(".menu");
    this.pauseScreen = document.querySelector(".pause");
    this.gameOverScreen = document.querySelector(".game-over");

    this.buttons = document.querySelectorAll(".button");
    this.buttons.forEach((button) => {
      button.addEventListener("click", (e) => this.buttonClickHandler(e));
    });
    this.toMenu();
  }

  loop(f) {
    if (this.screen != this.prevScreen) {
      if (this.screen == "game") {
        this.getWaveEnemies();
      }
      this.prevScreen = this.screen;
    }

    if (this.screen == "game") {
      this.waveTime += f * 16;

      spawn(this);
      move(this, f);
      draw(this, f);

      // game over check
      if (this.player.HP <= 0) {
        this.gameOver();
      }
    }
  }

  getWaveEnemies() {
    this.waveEnemies = levels(this.lvl, this.wave);
  }

  buttonClickHandler(e) {
    let buttonClicked = e.target.dataset.button;
    switch (buttonClicked) {
      case "Tutorial":
        this.startLevel(0);
        return;
      case "Level":
        this.startLevel(e.target.dataset.level);
        return;
      case "Continue":
        this.pause();
        return;
      case "Restart":
        this.startLevel(this.lvl);
        return;
      case "Menu":
        this.toMenu();
        return;
      default:
        return;
    }
  }

  startTutorial() {
    this.screen = "game";
    this.lvl = 0;
    this.menuScreen.classList.remove("menu--visible");
  }

  startLevel(lvl) {
    if (this.maxlvl >= lvl) {
      this.screen = "game";
      this.lvl = lvl;
      this.wave = 0;
      this.playerShots = [];
      this.enemies = [];
      this.waveTime = 0;
      this.getWaveEnemies();

      this.player.x = 800;
      this.player.y = 450;
      this.player.HP = 3;

      this.canvas.classList.remove("blurred");
      this.menuScreen.classList.remove("menu--visible");
      this.pauseScreen.classList.remove("pause--visible");
      this.gameOverScreen.classList.remove("game-over--visible");
    }
  }

  toMenu() {
    this.screen = "menu";
    this.menuScreen.classList.add("menu--visible");
    this.pauseScreen.classList.remove("pause--visible");
    this.gameOverScreen.classList.remove("game-over--visible");
    this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  gameOver() {
    this.screen = "gameOver";
    this.canvas.classList.add("blurred");
    this.gameOverScreen.classList.add("game-over--visible");
  }

  pause() {
    if (this.screen == "game") {
      this.screen = "pause";
      this.pauseScreen.classList.add("pause--visible");
      this.canvas.classList.add("blurred");
      return;
    }
    if (this.screen == "pause") {
      this.screen = "game";
      this.pauseScreen.classList.remove("pause--visible");
      this.canvas.classList.remove("blurred");
    }
  }
}

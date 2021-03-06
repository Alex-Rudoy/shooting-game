import Player from "../classes/friendly/Player";
import levels from "../dictionaries/levels";
import tutorialMessages from "../dictionaries/tutorialMessages";
import victoryMessages from "../dictionaries/victoryMessages";
import draw from "./draw";
import move from "./move";
import spawn from "./spawn";

export default class GameStateManager {
  constructor() {
    this.screen = "menu";

    // !change lvl here for testing
    this.maxlvl = localStorage.getItem("maxlvl") || 0;
    this.lvl = 0;
    this.wave = 0;
    this.waveEnemies = [];
    this.waveTime = 0;

    this.player = new Player({});
    this.playerShots = [];
    this.enemies = [];

    this.canvas = document.querySelector("canvas");
    this.announcer = document.querySelector(".announcer");
    this.menuScreen = document.querySelector(".menu");
    this.pauseScreen = document.querySelector(".pause");
    this.victoryScreen = document.querySelector(".victory");
    this.gameOverScreen = document.querySelector(".game-over");

    // startup opacity hack
    this.announcer.style.transition = "opacity 0.5s";
    this.menuScreen.style.transition = "opacity 0.5s";
    this.pauseScreen.style.transition = "opacity 0.5s";
    this.victoryScreen.style.transition = "opacity 0.5s";
    this.gameOverScreen.style.transition = "opacity 0.5s";

    // add onclick to all buttons
    this.buttons = document.querySelectorAll(".button");
    this.buttons.forEach((button) => {
      button.addEventListener("click", (e) => this.buttonClickHandler(e));
    });

    this.toMenu();
  }

  loop(f) {
    if (this.screen == "game") {
      this.waveTime += f * 16;

      spawn(this);
      move(this, f);
      draw(this, f);

      //wave clear check
      if (this.waveEnemies.length == 0 && this.enemies.length == 0) {
        this.wave++;
        if (this.wave == levels[this.lvl].length) {
          this.victory();
        } else {
          this.startWave();
        }
      }

      // game over check
      if (this.player.HP <= 0) this.gameOver();
    }
  }

  buttonClickHandler(e) {
    let buttonClicked = e.target.dataset.button;
    switch (buttonClicked) {
      case "Level":
        // must be number
        this.startLevel(+e.target.dataset.level);
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

  startLevel(lvl) {
    if (this.maxlvl >= lvl) {
      this.screen = "game";
      this.lvl = lvl;
      // ! change wave here for testing
      this.wave = 0;
      this.playerShots = [];
      this.enemies = [];
      this.startWave();

      this.player.x = 800;
      this.player.y = 450;
      this.player.HP = 3;

      this.canvas.classList.remove("blurred");
      this.announcer.classList.remove("announcer--visible");
      this.announcer.classList.remove("blurred");
      this.menuScreen.classList.remove("menu--visible");
      this.pauseScreen.classList.remove("pause--visible");
      this.gameOverScreen.classList.remove("game-over--visible");
    }
  }

  startWave() {
    clearTimeout(this.announcerTimeout);

    this.waveEnemies = levels[this.lvl][this.wave].slice();
    this.waveTime = 0;
    this.announcer.innerHTML = this.selectMessage();

    setTimeout(() => {
      this.announcer.classList.add("announcer--visible");
    }, 500);

    // if not in tutorial
    if (this.lvl) {
      setTimeout(() => {
        this.announcer.classList.remove("announcer--visible");
      }, 2500);
    }
  }

  selectMessage() {
    if (this.lvl == 0) return tutorialMessages[this.wave];
    if (this.wave == levels[this.lvl].length - 1) return `<h2 class="red">BOSS WARNING!!!</h2>`;
    return `<h2>Wave ${this.wave + 1}</h2>`;
  }

  toMenu() {
    this.screen = "menu";
    this.menuScreen.classList.add("menu--visible");
    this.announcer.classList.remove("announcer--visible");
    this.pauseScreen.classList.remove("pause--visible");
    this.victoryScreen.classList.remove("victory--visible");
    this.gameOverScreen.classList.remove("game-over--visible");
    this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.buttons.forEach((button) => {
      if (button.dataset.level <= this.maxlvl && !button.classList.contains("menu__item--unlocked"))
        button.classList.add("menu__item--unlocked");
    });
  }

  gameOver() {
    this.screen = "gameOver";
    this.canvas.classList.add("blurred");
    this.announcer.classList.remove("announcer--visible");
    this.gameOverScreen.classList.add("game-over--visible");
  }

  victory() {
    this.screen = "victory";
    this.victoryScreen.firstElementChild.innerHTML = victoryMessages[this.lvl];

    this.canvas.classList.add("blurred");
    this.announcer.classList.remove("announcer--visible");
    this.victoryScreen.classList.add("victory--visible");
    if (this.lvl == this.maxlvl) {
      this.maxlvl++;
      localStorage.setItem("maxlvl", this.maxlvl);
    }
  }

  pause() {
    if (this.screen == "game") {
      this.screen = "pause";
      this.canvas.classList.add("blurred");
      this.announcer.classList.add("blurred");
      this.pauseScreen.classList.add("pause--visible");
      return;
    }

    if (this.screen == "pause") {
      this.screen = "game";
      this.canvas.classList.remove("blurred");
      this.announcer.classList.remove("blurred");
      this.pauseScreen.classList.remove("pause--visible");
    }
  }
}

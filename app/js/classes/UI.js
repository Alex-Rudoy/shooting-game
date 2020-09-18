export default class UI {
  constructor(gameState) {
    this.buttons = document.querySelectorAll(".button");
    this.buttons.forEach((button) => {
      button.addEventListener("click", (e) => this.buttonClickHandler(e, gameState));
    });

    this.menuScreen = document.querySelector(".menu");
    this.pauseScreen = document.querySelector(".pause");
    this.gameOverScreen = document.querySelector(".game-over");
  }

  buttonClickHandler(e, gameState) {
    let buttonClicked = e.target.dataset.button;
    switch (buttonClicked) {
      case "Tutorial":
        gameState.screen = "game";
        gameState.lvl = 0;
        this.menuScreen.classList.remove("menu--visible");
      default:
        return;
    }
  }
}

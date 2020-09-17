import images from "../logic/images";

export default class EnemyRectangle1 extends Enemy {
  constructor(args) {
    super(args);

    this.image = images.enemy_1_0;
  }
}

import EnemyCircle1 from "../classes/EnemyCircle1";
import EnemyRectangle1 from "../classes/EnemyRectangle1";

export default function levels(lvl, wave) {
  return [
    //tutorial (0)
    [
      // 0.0
      [],
    ],

    // level1
    [
      // wave 1.0
      [
        { enemyClass: EnemyCircle1, x: 800, y: 950, time: 9300 },
        { enemyClass: EnemyRectangle1, x: 800, y: 950, time: 9300 },
        { enemyClass: EnemyRectangle1, x: 800, y: -50, time: 9200 },
        { enemyClass: EnemyRectangle1, x: -50, y: 450, time: 9100 },
        { enemyClass: EnemyRectangle1, x: 1650, y: 450, time: 9000 },
        { enemyClass: EnemyRectangle1, x: Math.random() * 500 + 700, y: 950, time: 7400 },
        { enemyClass: EnemyRectangle1, x: Math.random() * 500 + 200, y: 950, time: 6800 },
        { enemyClass: EnemyRectangle1, x: Math.random() * 500 + 700, y: -50, time: 5300 },
        { enemyClass: EnemyRectangle1, x: Math.random() * 500 + 200, y: -50, time: 4900 },
        { enemyClass: EnemyRectangle1, x: -50, y: Math.random() * 250 + 450, time: 3400 },
        { enemyClass: EnemyRectangle1, x: -50, y: Math.random() * 250 + 200, time: 3000 },
        { enemyClass: EnemyRectangle1, x: 1650, y: Math.random() * 250 + 450, time: 1500 },
        { enemyClass: EnemyRectangle1, x: 1650, y: Math.random() * 250 + 200, time: 1100 },
      ],
    ],
  ][lvl][wave];
}

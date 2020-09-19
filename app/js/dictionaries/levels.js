import EnemyCrawler from "../classes/enemies/crawlers/EnemyCrawler";
import TutorialMove from "../classes/enemies/other/TutorialMove";

let levels = [
  //tutorial (0)
  [
    // tutorial 1 (0, 0)
    [{ enemyClass: TutorialMove, x: 300, y: 700, time: 800 }],

    // tutorial 2 (0, 1)
    [{ enemyClass: EnemyCrawler, x: 1650, y: 450, hp: 1, time: 1000 }],

    // tutorial 3 (0, 2)
    [
      { enemyClass: EnemyCrawler, x: 1650, y: 200, hp: 2, time: 1000 },
      { enemyClass: EnemyCrawler, x: 1650, y: 600, hp: 2, time: 1000 },
    ],
  ],

  // level1
  [
    // wave 1 (1, 0)
    [
      { enemyClass: EnemyCrawler, x: 800, y: 950, hp: 2, time: 9300 },
      { enemyClass: EnemyCrawler, x: 800, y: 950, hp: 2, time: 9300 },
      { enemyClass: EnemyCrawler, x: 800, y: -50, hp: 2, time: 9200 },
      { enemyClass: EnemyCrawler, x: -50, y: 450, hp: 2, time: 9100 },
      { enemyClass: EnemyCrawler, x: 1650, y: 450, hp: 2, time: 9000 },
      { enemyClass: EnemyCrawler, x: Math.random() * 500 + 700, y: 950, hp: 2, time: 7400 },
      { enemyClass: EnemyCrawler, x: Math.random() * 500 + 200, y: 950, hp: 2, time: 6800 },
      { enemyClass: EnemyCrawler, x: Math.random() * 500 + 700, y: -50, hp: 2, time: 5300 },
      { enemyClass: EnemyCrawler, x: Math.random() * 500 + 200, y: -50, hp: 2, time: 4900 },
      { enemyClass: EnemyCrawler, x: -50, y: Math.random() * 250 + 450, hp: 3, time: 3400 },
      { enemyClass: EnemyCrawler, x: -50, y: Math.random() * 250 + 200, hp: 3, time: 3000 },
      { enemyClass: EnemyCrawler, x: 1650, y: Math.random() * 250 + 450, hp: 3, time: 1500 },
      { enemyClass: EnemyCrawler, x: 1650, y: Math.random() * 250 + 200, hp: 3, time: 1100 },
    ],
  ],
];

export default levels;

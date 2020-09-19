import EnemyCrawler from "../classes/enemies/crawlers/EnemyCrawler";
import TutorialMove from "../classes/enemies/other/TutorialMove";
import EnemyWanderer from "../classes/enemies/wanderers/EnemyWanderer";

let left = -50;
let right = 1650;
let top = -50;
let bot = 950;

let xmid = 800;
let ymid = 450;

let x = "x";
let y = "y";
let start = "start";
let end = "end";
let mid = "mid";

function getRandom(coordinate, position) {
  let x = coordinate == "x";
  let y = coordinate == "y";
  let start = coordinate == "start";
  let end = coordinate == "end";
  let mid = coordinate == "mid";

  return (
    Math.random() * (500 * x + 200 * y) +
    200 * start * x +
    900 * end * x +
    400 * mid * x +
    150 * start * y +
    550 * end * y +
    250 * mid * y
  );
}

// ! note: enemies are pop()'ed, so they will spawn last to first

let levels = [
  //tutorial (0)
  [
    // tutorial 1 (0, 0)
    [{ enemyClass: TutorialMove, x: 300, y: 700, time: 800 }],

    // tutorial 2 (0, 1)
    [{ enemyClass: EnemyCrawler, x: right, y: ymid, hp: 1, time: 1000 }],

    // tutorial 3 (0, 2)
    [
      { enemyClass: EnemyCrawler, x: right, y: 200, hp: 2, time: 1000 },
      { enemyClass: EnemyCrawler, x: right, y: 600, hp: 2, time: 1000 },
    ],
  ],

  // level1
  [
    // wave 1 (1, 0)
    [
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, start), hp: 2, time: 7300 },
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, end), hp: 2, time: 7200 },
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, start), hp: 2, time: 7100 },
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, end), hp: 2, time: 7000 },

      { enemyClass: EnemyCrawler, x: getRandom(x, start), y: bot, hp: 2, time: 5200 },
      { enemyClass: EnemyCrawler, x: getRandom(x, end), y: bot, hp: 2, time: 5100 },
      { enemyClass: EnemyCrawler, x: getRandom(x, mid), y: bot, hp: 2, time: 5000 },

      { enemyClass: EnemyCrawler, x: left, y: getRandom(y, start), hp: 2, time: 3100 },
      { enemyClass: EnemyCrawler, x: left, y: getRandom(y, end), hp: 2, time: 3000 },

      { enemyClass: EnemyCrawler, x: getRandom(x, mid), y: top, hp: 2, time: 1000 },
    ],

    // wave 2 (1, 1)
    [
      { enemyClass: EnemyCrawler, x: xmid, y: bot, hp: 3, time: 13000 },
      { enemyClass: EnemyCrawler, x: xmid, y: top, hp: 3, time: 13000 },
      { enemyClass: EnemyCrawler, x: left, y: ymid, hp: 3, time: 13000 },
      { enemyClass: EnemyCrawler, x: right, y: ymid, hp: 3, time: 13000 },

      { enemyClass: EnemyCrawler, x: getRandom(x, end), y: bot, hp: 2, time: 10400 },
      { enemyClass: EnemyCrawler, x: getRandom(x, start), y: bot, hp: 2, time: 9800 },

      { enemyClass: EnemyCrawler, x: getRandom(x, end), y: top, hp: 2, time: 7300 },
      { enemyClass: EnemyCrawler, x: getRandom(x, start), y: top, hp: 2, time: 6900 },

      { enemyClass: EnemyCrawler, x: left, y: getRandom(y, end), hp: 2, time: 4400 },
      { enemyClass: EnemyCrawler, x: left, y: getRandom(y, start), hp: 2, time: 4000 },

      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, end), hp: 2, time: 1500 },
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, start), hp: 2, time: 1000 },
    ],

    // wave 3 (1, 2)
    [
      { enemyClass: EnemyWanderer, x: right, y: Math.random() * 250 + 200, hp: 1, time: 1000 },

      { enemyClass: EnemyWanderer, x: right, y: Math.random() * 250 + 200, hp: 1, time: 2100 },
      { enemyClass: EnemyCrawler, x: right, y: Math.random() * 250 + 200, hp: 1, time: 2000 },

      { enemyClass: EnemyWanderer, x: right, y: Math.random() * 250 + 200, hp: 1, time: 1000 },
    ],
  ],
];

export default levels;

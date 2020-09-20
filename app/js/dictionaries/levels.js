import MotherShip from "../classes/enemies/boss/MotherShip";
import MotherShipPet from "../classes/enemies/boss/MotherShipPet";
import EnemyBully from "../classes/enemies/bully/EnemyBully";
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
  let start = position == "start";
  let end = position == "end";
  let mid = position == "mid";

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
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, start), hp: 2, time: 10300 },
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, end), hp: 2, time: 10200 },
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, start), hp: 2, time: 10100 },
      { enemyClass: EnemyCrawler, x: right, y: getRandom(y, end), hp: 2, time: 10000 },

      { enemyClass: EnemyCrawler, x: getRandom(x, start), y: bot, hp: 2, time: 6200 },
      { enemyClass: EnemyCrawler, x: getRandom(x, end), y: bot, hp: 2, time: 6100 },
      { enemyClass: EnemyCrawler, x: getRandom(x, mid), y: bot, hp: 2, time: 6000 },

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
      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 1, time: 15300 },
      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 1, time: 15200 },
      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 1, time: 15100 },
      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 1, time: 15000 },

      { enemyClass: EnemyWanderer, x: left, y: getRandom(y, mid), hp: 2, time: 12200 },
      { enemyClass: EnemyWanderer, x: getRandom(x, mid), y: top, hp: 2, time: 12100 },
      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 2, time: 12000 },

      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 2, time: 7000 },
      { enemyClass: EnemyWanderer, x: left, y: getRandom(y, mid), hp: 2, time: 7000 },

      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 1, time: 4100 },
      { enemyClass: EnemyCrawler, x: left, y: getRandom(y, mid), hp: 2, time: 4000 },

      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 1, time: 1000 },
    ],

    // wave 4 (1, 3)
    [
      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 2, time: 16000 },
      { enemyClass: EnemyWanderer, x: getRandom(x, mid), y: top, hp: 2, time: 14000 },
      { enemyClass: EnemyWanderer, x: left, y: getRandom(y, mid), hp: 2, time: 12000 },
      { enemyClass: EnemyWanderer, x: getRandom(x, mid), y: bot, hp: 2, time: 10000 },
      { enemyClass: EnemyWanderer, x: right, y: getRandom(y, mid), hp: 2, time: 8000 },
      { enemyClass: EnemyWanderer, x: getRandom(x, mid), y: top, hp: 2, time: 6000 },
      { enemyClass: EnemyWanderer, x: left, y: getRandom(y, mid), hp: 2, time: 4000 },
      { enemyClass: EnemyWanderer, x: getRandom(x, mid), y: bot, hp: 2, time: 2000 },

      { enemyClass: EnemyBully, x: getRandom(x, mid), y: top, hp: 10, time: 1500 },
      { enemyClass: EnemyCrawler, x: getRandom(x, start), y: top, hp: 2, time: 1100 },
      { enemyClass: EnemyCrawler, x: getRandom(x, end), y: top, hp: 2, time: 1000 },
    ],

    // boss wave
    [
      { enemyClass: MotherShipPet, time: 53250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 53000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 52750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 52500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 52250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 52000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 51750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 51500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 51250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 51000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 50750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 50500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 50250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 50000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 49750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 49500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 49250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 49000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 48750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 48500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 48250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 48000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 47750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 47500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 47250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 47000, rotation: -1 },

      { enemyClass: MotherShipPet, time: 37250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 37000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 36750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 36500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 36250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 36000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 35750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 35500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 35250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 35000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 34750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 34500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 34250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 34000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 33750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 33500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 33250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 33000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 32750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 32500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 32250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 32000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 31750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 31500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 31250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 31000, rotation: 1 },

      { enemyClass: MotherShipPet, time: 21250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 21000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 20750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 20500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 20250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 20000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 19750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 19500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 19250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 19000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 18750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 18500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 18250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 18000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 17750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 17500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 17250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 17000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 16750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 16500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 16250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 16000, rotation: -1 },
      { enemyClass: MotherShipPet, time: 15750, rotation: -1 },
      { enemyClass: MotherShipPet, time: 15500, rotation: -1 },
      { enemyClass: MotherShipPet, time: 15250, rotation: -1 },
      { enemyClass: MotherShipPet, time: 15000, rotation: -1 },

      { enemyClass: MotherShipPet, time: 7250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 7000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 6750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 6500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 6250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 6000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 5750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 5500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 5250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 5000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 4750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 4500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 4250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 4000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 3750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 3500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 3250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 3000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 2750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 2500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 2250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 2000, rotation: 1 },
      { enemyClass: MotherShipPet, time: 1750, rotation: 1 },
      { enemyClass: MotherShipPet, time: 1500, rotation: 1 },
      { enemyClass: MotherShipPet, time: 1250, rotation: 1 },
      { enemyClass: MotherShipPet, time: 1000, rotation: 1 },
      { enemyClass: MotherShip, x: right + 200, y: ymid, hp: 25, time: 1000 },
    ],
  ],
];

export default levels;

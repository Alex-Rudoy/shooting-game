import EnemyCircle1 from "../classes/EnemyCircle1";
import EnemyRectangle1 from "../classes/EnemyRectangle1";

let levels = [
  //tutorial (0)
  [
    // 0.0
    [
      { enemy: new EnemyRectangle1({ x: 1650, y: Math.random() * 250 + 450 }), time: 1500 },
      { enemy: new EnemyRectangle1({ x: 1650, y: Math.random() * 250 + 200 }), time: 1100 },
    ],
  ],

  // level1
  [
    // 1.0
    [
      { enemy: new EnemyCircle1({ x: 800, y: 950 }), time: 9300 },
      { enemy: new EnemyRectangle1({ x: 800, y: 950 }), time: 9300 },
      { enemy: new EnemyRectangle1({ x: 800, y: -50 }), time: 9200 },
      { enemy: new EnemyRectangle1({ x: -50, y: 450 }), time: 9100 },
      { enemy: new EnemyRectangle1({ x: 1650, y: 450 }), time: 9000 },
      { enemy: new EnemyRectangle1({ x: Math.random() * 500 + 700, y: 950 }), time: 7400 },
      { enemy: new EnemyRectangle1({ x: Math.random() * 500 + 200, y: 950 }), time: 6800 },
      { enemy: new EnemyRectangle1({ x: Math.random() * 500 + 700, y: -50 }), time: 5300 },
      { enemy: new EnemyRectangle1({ x: Math.random() * 500 + 200, y: -50 }), time: 4900 },
      { enemy: new EnemyRectangle1({ x: -50, y: Math.random() * 250 + 450 }), time: 3400 },
      { enemy: new EnemyRectangle1({ x: -50, y: Math.random() * 250 + 200 }), time: 3000 },
      { enemy: new EnemyRectangle1({ x: 1650, y: Math.random() * 250 + 450 }), time: 1500 },
      { enemy: new EnemyRectangle1({ x: 1650, y: Math.random() * 250 + 200 }), time: 1100 },
    ],
  ],
];

export default levels;

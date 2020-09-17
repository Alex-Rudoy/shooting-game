import EnemyRectangle1 from "../classes/EnemyRectangle1";

let levels = [
  [
    { enemy: new EnemyRectangle1({ x: Math.random() * 1800 - 100, y: 950 }), time: 9300 },
    { enemy: new EnemyRectangle1({ x: Math.random() * 1800 - 100, y: -50 }), time: 9200 },
    { enemy: new EnemyRectangle1({ x: -50, y: Math.random() * 1100 - 100 }), time: 9100 },
    { enemy: new EnemyRectangle1({ x: 1650, y: Math.random() * 1100 - 100 }), time: 9000 },
    { enemy: new EnemyRectangle1({ x: Math.random() * 1800 - 100, y: 950 }), time: 7400 },
    { enemy: new EnemyRectangle1({ x: Math.random() * 1800 - 100, y: 950 }), time: 6800 },
    { enemy: new EnemyRectangle1({ x: Math.random() * 1800 - 100, y: -50 }), time: 5300 },
    { enemy: new EnemyRectangle1({ x: Math.random() * 1800 - 100, y: -50 }), time: 4900 },
    { enemy: new EnemyRectangle1({ x: -50, y: Math.random() * 1100 - 100 }), time: 3400 },
    { enemy: new EnemyRectangle1({ x: -50, y: Math.random() * 1100 - 100 }), time: 3000 },
    { enemy: new EnemyRectangle1({ x: 1650, y: Math.random() * 1100 - 100 }), time: 1500 },
    { enemy: new EnemyRectangle1({ x: 1650, y: Math.random() * 1100 - 100 }), time: 1100 },
  ],
];

export default levels;

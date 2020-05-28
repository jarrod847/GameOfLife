export default class Logic {
  constructor(generation = 0, live = new Map()) {
    this.generation = generation;
    this.live = live;
    this.nextGeneration = new Map();
    this.dead = new Map();
  }

  get() {
    return this.generation;
  }

  getAlive() {
    return this.live;
  }

  add(spot) {
    this.live.set(spot.x + " , " + spot.y, {
      x: spot.x,
      y: spot.y,
    });
  }

  remove(spot) {
    this.live.delete(spot);
  }

  isAlive(spot) {
    return this.live.has(spot);
  }

  storeCell(spot) {
    if (this.isAlive(spot.x + " , " + spot.y)) {
      this.remove(spot.x + " , " + spot.y);
    } else {
      this.add(spot);
    }

    return new Logic(this.generation, this.live);
  }

  newGeneration() {
    this.live.forEach((item) => {
      this.aliveNeighbors(item);
    });

    this.dead.forEach((item) => {
      this.deadNeighbors(item);
    });

    this.generation++;

    return new Logic(this.generation, this.nextGeneration);
  }

  aliveNeighbors(spot) {
    var alive = 0;

    for (var i = spot.x - 1; i <= spot.x + 1; i++) {
      for (var j = spot.y - 1; j <= spot.y + 1; j++) {
        if (i === spot.x && j === spot.y) continue;

        if (this.isAlive(i + " , " + j)) {
          alive++;
        } else {
          this.dead.set(i + " , " + j, { x: i, y: j });
        }
      }
    }

    if (alive === 2 || alive === 3)
      this.nextGeneration.set(spot.x + " , " + spot.y, {
        x: spot.x,
        y: spot.y,
      });
  }

  deadNeighbors(spot) {
    var alive = 0;

    for (var i = spot.x - 1; i <= spot.x + 1; i++) {
      for (var j = spot.y - 1; j <= spot.y + 1; j++) {
        if (i === spot.x && j === spot.y) continue;

        if (this.isAlive(i + " , " + j)) {
          alive++;
        }
      }
    }

    if (alive === 3)
      this.nextGeneration.set(spot.x + " , " + spot.y, {
        x: spot.x,
        y: spot.y,
      });
  }
}

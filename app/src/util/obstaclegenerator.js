class UtilObstacleGenerator {

    constructor() {
        this.playerPositionY = 0;
        this.playerDistance = 0;
    }

    create(game) {

        this.obstaclePool = {
            'saucer': [
                new CharSaucer(),
                new CharSaucer(),
                new CharSaucer()
            ],
            'probe': [
                new CharProbe(),
                new CharProbe(),
                new CharProbe()
            ]
        };
        var generator = this;
        Object.keys(this.obstaclePool).forEach(obstacleType => {
            this.obstaclePool[obstacleType].forEach(obstacle => {
                obstacle.create(game);
                generator.resetTo(obstacle, -200, -200);
                obstacle.stop();
            });
        });

        this.activeObstacles = [];
        // this.reset(game, this.obstaclePool.saucer[0]);
        // this.activeObstacles.push(this.obstaclePool.saucer[0]);
    }

    update(game) {
        var inactive = [];
        var len = this.activeObstacles.length;
        var i, obstacle;
        for (i = 0; i < len; i++) {
            obstacle = this.activeObstacles[i];
            obstacle.update(game);

            if (!obstacle.inWorld()) {
                obstacle.stop();
                inactive.push(i);
            }
        }

        len = inactive.length;
        for (i = 0; i < len; i++) {
            this.activeObstacles.splice(inactive[i], 1);
        }

        this.addNewObstacles(game);
    }

    addNewObstacles(game) {
        if (this.activeObstacles.length >= 1) {
            return;
        }

        var obstacle = this.getRandomObstacle();
        this.reset(game, obstacle);
        this.activeObstacles.push(obstacle);
    }

    getRandomObstacle() {
        var keys = Object.keys(this.obstaclePool);
        var numTypes = keys.length;
        var keyIdx = Math.floor(Math.random() * numTypes);
        var key = keys[keyIdx];
        var pool = this.obstaclePool[key];
        return pool[0];
    }

    reset(game, obstacle) {
        var x = game.world.width - 100;
        var miny = 65;
        var maxy = game.world.height - 165;

        var y = this.playerPositionY;
        console.log('playerPositionY: ' + this.playerPositionY);
        if (y < miny) {
            y = miny;
        }
        else if (y > maxy) {
            y = maxy;
        }

        this.resetTo(obstacle, x, y);
    }

    resetTo(obstacle, x, y) {
        obstacle.reset(x, y);
    }

    updatePlayerPosition(pos) {
        this.playerPositionY = pos.y;
    }

    updatePlayerDistance(distance) {
        this.playerDistance = distance;
    }

    getColliders() {
        var colliders = [];
        this.activeObstacles.forEach(obstacle => {
            colliders.push(obstacle.getColliders());
        });
        return colliders;
    }
}

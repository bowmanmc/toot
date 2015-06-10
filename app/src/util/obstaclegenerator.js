class UtilObstacleGenerator {

    constructor() {
        this.playerPositionY = 0;
    }

    create(game) {
        this.probe = new CharProbe();
        this.probe.create(game);
        this.reset(game);
    }

    update(game) {
        if (!this.probe.inWorld()) {
            console.log('probe is off world!');
            this.probe.stop();
            this.reset(game);
        }
        this.probe.update(game);
    }

    reset(game) {
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

        this.probe.reset(x, y);
    }

    updatePlayerPosition(pos) {
        this.playerPositionY = pos.y;
    }

    getColliders() {
        return this.probe.getColliders();
    }
}

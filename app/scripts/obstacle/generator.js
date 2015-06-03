toot.obstacle.Generator = function(game) {
    this.game = game;
    this.saucer = new toot.obstacle.Saucer(this.game);


    this.playerPositionY = -1;
    var generator = this;
    this.updatePlayerPosition = function(pos) {
        generator.playerPositionY = pos.y;
    };
};

toot.obstacle.Generator.prototype.preload = function() {
    this.saucer.preload();
};

toot.obstacle.Generator.prototype.create = function() {
    this.saucer.create();
    this.reset();
};

toot.obstacle.Generator.prototype.update = function() {
    if (!this.saucer.inWorld()) {
        console.log('saucer is off world!');
        this.saucer.stop();
        this.reset();
    }
    this.saucer.update();
};

toot.obstacle.Generator.prototype.getColliders = function() {
    return this.saucer.getColliders();
};

toot.obstacle.Generator.prototype.reset = function() {

    var x = this.game.world.width - 100;
    var miny = 65;
    var maxy = this.game.world.height - 165;

    var y = this.playerPositionY;
    console.log('playerPositionY: ' + this.playerPositionY);
    if (y < miny) {
        y = miny;
    }
    else if (y > maxy) {
        y = maxy;
    }

    this.saucer.reset(x, y);
};

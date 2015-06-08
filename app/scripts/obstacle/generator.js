toot.obstacle.Generator = function(game) {
    this.game = game;
    //this.saucer = new toot.obstacle.Saucer(this.game);
    this.probe = new toot.obstacle.Probe(this.game);

    this.playerPositionY = -1;
    var generator = this;
    this.updatePlayerPosition = function(pos) {
        generator.playerPositionY = pos.y;
    };
};

toot.obstacle.Generator.prototype.preload = function() {
    //this.saucer.preload();
    this.probe.preload();
};

toot.obstacle.Generator.prototype.create = function() {
    //this.saucer.create();
    this.probe.create();
    this.reset();
};

toot.obstacle.Generator.prototype.update = function() {
    //if (!this.saucer.inWorld()) {
    //    console.log('saucer is off world!');
    //    this.saucer.stop();
    //    this.reset();
    //}

    //this.saucer.update();
    if (!this.probe.inWorld()) {
        console.log('probe is off world!');
        this.probe.stop();
        this.reset();
    }
    this.probe.update();
};

toot.obstacle.Generator.prototype.getColliders = function() {
    return this.probe.getColliders();
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

    this.probe.reset(x, y);
};

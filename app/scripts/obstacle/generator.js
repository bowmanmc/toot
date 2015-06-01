toot.obstacle.Generator = function(game) {
    this.game = game;
    this.saucer = new toot.obstacle.Saucer(this.game);
};

toot.obstacle.Generator.prototype.preload = function() {
    this.saucer.preload();
};

toot.obstacle.Generator.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;

    this.saucer.create();
};

toot.obstacle.Generator.prototype.update = function() {
    this.saucer.update();
};

toot.obstacle.Generator.prototype.getColliders = function() {
    return this.saucer.getColliders();
};

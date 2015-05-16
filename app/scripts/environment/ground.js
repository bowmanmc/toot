
toot.environment.Ground = function(game) {
    this.game = game;
    this.group;
};

toot.environment.Ground.prototype.preload = function() {
    this.game.load.image('ground', 'images/ground.jpg');
};

toot.environment.Ground.prototype.create = function() {
    this.group = this.game.add.group();
    this.group.enableBody = true;

    var g = this.group.create(0, this.game.world.height - 48, 'ground');
    g.scale.setTo(0.5, 0.5);
    g.body.immovable = true;
};

toot.environment.Ground.prototype.update = function() {

};

toot.environment.Ground.prototype.getColliders = function() {
    return this.group;
};

toot.environment.Vignette = function(game) {
    this.game = game;
};

toot.environment.Vignette.prototype.preload = function() {
    this.game.load.image('vignette', 'images/vignette.png');
};

toot.environment.Vignette.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;
    this.v = this.game.add.sprite(0, 0, 'vignette');
};

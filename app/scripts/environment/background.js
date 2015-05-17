
toot.environment.Background = function(game) {
    this.game = game;
};

toot.environment.Background.prototype.preload = function() {
    this.game.load.image('bg-space', 'images/bg-space.jpg');
    this.game.load.image('bg-stars-small', 'images/bg-stars-small.png');
    this.game.load.image('bg-stars-large', 'images/bg-stars-large.png');
};

toot.environment.Background.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;
    this.spaceBg = this.game.add.tileSprite(0, 0, w, h, 'bg-space');
    this.starsSm = this.game.add.tileSprite(0, 0, w, h, 'bg-stars-small');
    this.starsLg = this.game.add.tileSprite(0, 0, w, h, 'bg-stars-large');
};

toot.environment.Background.prototype.update = function() {
    this.spaceBg.tilePosition.x -= 0.100;
    this.starsSm.tilePosition.x -= 0.125;
    this.starsLg.tilePosition.x -= 0.150;

};

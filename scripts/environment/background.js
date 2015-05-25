
toot.environment.Background = function(game) {
    this.game = game;
};

toot.environment.Background.prototype.preload = function() {
    this.game.load.image('bg-space', 'images/bg-space.jpg');
    this.game.load.image('bg-stars-small', 'images/bg-stars-small.png');
    this.game.load.image('bg-stars-dense', 'images/bg-stars-small-dense.png');
    this.game.load.image('bg-stars-large', 'images/bg-stars-large.png');

    this.game.load.image('bg-horizon', 'images/bg-horizon-gradient.png');
    this.game.load.image('bg-mountains-01', 'images/bg-mountains-01.png');
    this.game.load.image('bg-mountains-02', 'images/bg-mountains-02.png');
};

toot.environment.Background.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;
    this.spaceBg = this.game.add.tileSprite(0, 0, w, h, 'bg-space');
    this.starsLg = this.game.add.tileSprite(0, 0, w, h, 'bg-stars-large');
    this.spaceDs = this.game.add.tileSprite(0, 0, w, h, 'bg-stars-dense');
    this.starsSm = this.game.add.tileSprite(0, 0, w, h, 'bg-stars-small');

    this.horizon = this.game.add.tileSprite(0, 0, w, h, 'bg-horizon');

    this.mountains1 = this.game.add.tileSprite(0, 0, w, h, 'bg-mountains-01');
    this.mountains2 = this.game.add.tileSprite(0, 0, w, h, 'bg-mountains-02');
};

toot.environment.Background.prototype.update = function() {
    this.spaceBg.tilePosition.x -= 0.075;
    this.starsLg.tilePosition.x -= 0.100;
    this.spaceDs.tilePosition.x -= 0.125;
    this.starsSm.tilePosition.x -= 0.150;

    this.mountains1.tilePosition.x -= 0.20;
    this.mountains2.tilePosition.x -= 0.25;
};

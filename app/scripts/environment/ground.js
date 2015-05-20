
toot.environment.Ground = function(game) {
    this.game = game;
    this.group;
};

toot.environment.Ground.prototype.preload = function() {
    this.game.load.image('ground', 'images/ground.jpg');
};

toot.environment.Ground.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;
    //this.group = this.game.add.group();
    //this.group.enableBody = true;
    //var g = this.group.create(0, this.game.world.height - 48, 'ground');
    //g.scale.setTo(0.5, 0.5);
    //g.body.immovable = true;
    var yPos = h - 64;
    this.ground = this.game.add.tileSprite(0, yPos, w, h, 'ground');

    this.game.physics.arcade.enable(this.ground);
    this.ground.body.immovable = true;

    // bug in phaser 2.3.0
    // see: http://www.html5gamedevs.com/topic/13856-problem-with-collide-method-from-physics-arcade-in-different-versions-of-phaser/?p=79032
    this.ground.physicsType = Phaser.SPRITE;
};

toot.environment.Ground.prototype.update = function() {
    this.ground.tilePosition.x -= 0.4;
};

toot.environment.Ground.prototype.getColliders = function() {
    return this.ground;
};


toot.obstacle.Saucer = function(game) {
    this.game = game;
    this.spriteSaucer = null;

    this.velocity = 300;
};

toot.obstacle.Saucer.prototype.preload = function() {
    this.game.load.spritesheet('saucer', 'images/saucer-spritesheet.png', 276, 100);
};

toot.obstacle.Saucer.prototype.reset = function() {
    var x = this.game.world.width;
    var miny = 7;
    var maxy = this.game.world.height - 225;

    var y = this.game.rnd.integerInRange(miny, maxy);

    console.log('resetting saucer to ' + x + ', ' + y);
    this.spriteSaucer.reset(x, y);
    this.spriteSaucer.body.velocity.x = this.velocity * -1;
};

toot.obstacle.Saucer.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;

    this.spriteSaucer = this.game.add.sprite(w, h-256, 'saucer');
    this.game.physics.arcade.enable(this.spriteSaucer);
    this.spriteSaucer.body.allowGravity = false;
    this.spriteSaucer.body.immovable = true;
    this.spriteSaucer.checkWorldBounds = true;

    this.reset();
};

toot.obstacle.Saucer.prototype.update = function() {
    if (!this.spriteSaucer.inWorld) {
        console.log('saucer is off world!');
        this.reset();
    }
};

toot.obstacle.Saucer.prototype.getColliders = function() {
    return this.spriteSaucer;
};

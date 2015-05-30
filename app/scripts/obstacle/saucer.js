
toot.obstacle.Saucer = function(game) {
    this.game = game;
    this.spriteSaucer = null;
    this.collisionGroup = null;

    this.velocity = 300;
};

toot.obstacle.Saucer.prototype.preload = function() {
    this.game.load.spritesheet('saucer', 'images/saucer-spritesheet.png', 276, 100);
};

toot.obstacle.Saucer.prototype.reset = function() {
    var x = this.game.world.width - 100;
    var miny = 7;
    var maxy = this.game.world.height - 225;

    var y = this.game.rnd.integerInRange(miny, maxy);

    console.log('resetting saucer to ' + x + ', ' + y);
    this.spriteSaucer.reset(x, y);
    this.spriteSaucer.body.velocity.x = this.velocity * -1;

    this.s2.reset(x, y);
    this.s2.body.velocity.x = this.velocity * -1;
};

toot.obstacle.Saucer.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;

    this.collisionGroup = this.game.add.group();
    this.game.physics.arcade.enable(this.collisionGroup);
    //this.collisionGroup.body.allowGravity = false;
    //this.collisionGroup.body.immovable = true;
    //
    this.collisionGroup.checkWorldBounds = true;

    //this.spriteSaucer = this.game.add.sprite(w, 128, 'saucer');
    this.spriteSaucer = this.collisionGroup.create(w, 128, 'saucer');
    //this.spriteSaucer.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this.spriteSaucer);
    this.spriteSaucer.body.allowGravity = false;
    this.spriteSaucer.body.immovable = true;
    this.spriteSaucer.body.setSize(64, 32, 97, 6);

    //this.s2 = this.game.add.sprite(w, 128, '');
    this.s2 = this.collisionGroup.create(w, 128, '');
    this.game.physics.arcade.enable(this.s2);
    this.s2.body.allowGravity = false;
    this.s2.body.immovable = true;
    this.s2.body.setSize(267, 62, 0, 32);

    this.reset();
};

toot.obstacle.Saucer.prototype.update = function() {
    if (!this.spriteSaucer.inWorld) {
        console.log('saucer is off world!');
        this.reset();
    }
    this.game.debug.body(this.spriteSaucer);
    this.game.debug.body(this.s2);
};

toot.obstacle.Saucer.prototype.getColliders = function() {
    return this.collisionGroup;
};


toot.obstacle.Saucer = function(game) {
    this.game = game;

    this.spriteSaucer = null;
    this.collisionGroup = null;

    this.velocity = 300;
    this.rotMax = 0.025;
    this.rotInc = 0.0025;

    this.debug = false;
};

toot.obstacle.Saucer.prototype.preload = function() {
    this.game.load.spritesheet('saucer', 'images/saucer-spritesheet.png', 276, 100);

    this.game.load.audio('ufo', 'sounds/ufo-01.wav');
};

toot.obstacle.Saucer.prototype.reset = function(x, y) {
    console.log('resetting saucer to ' + x + ', ' + y);
    this.collisionGroup.forEach(function(item) {
        item.reset(x, y);
    });
    this.collisionGroup.setAll('body.velocity.x', this.velocity * -1);

    this.soundUfo.play('', 0, 1, true, false);
};

toot.obstacle.Saucer.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;

    this.soundUfo = this.game.add.audio('ufo');
    this.soundUfo.allowMultiple = false;

    this.collisionGroup = this.game.add.group();
    this.game.physics.arcade.enable(this.collisionGroup);
    //this.collisionGroup.body.allowGravity = false;
    //this.collisionGroup.body.immovable = true;
    this.collisionGroup.checkWorldBounds = true;

    //this.spriteSaucer = this.game.add.sprite(w, 128, 'saucer');
    this.spriteSaucer = this.collisionGroup.create(w, 128, 'saucer');
    this.spriteSaucer.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this.spriteSaucer);
    this.spriteSaucer.body.allowGravity = false;
    this.spriteSaucer.body.immovable = true;
    this.spriteSaucer.body.setSize(64, 20, -10, -37);

    // Additional collider boxes to match the shape of the saucer more closely
    var c1 = this.collisionGroup.create(w, 128, '');
    c1.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(c1);
    c1.body.allowGravity = false;
    c1.body.immovable = true;
    c1.body.setSize(200, 22, -4, -16);

    var c2 = this.collisionGroup.create(w, 128, '');
    c2.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(c2);
    c2.body.allowGravity = false;
    c2.body.immovable = true;
    c2.body.setSize(270, 32, -4, 11);

    var c3 = this.collisionGroup.create(w, 128, '');
    c3.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(c3);
    c3.allowGravity = false;
    c3.body.immovable = true;
    c3.body.setSize(200, 16, -4, 35);
};

toot.obstacle.Saucer.prototype.inWorld = function() {
    return this.spriteSaucer.inWorld;
};

toot.obstacle.Saucer.prototype.stop = function() {
    this.soundUfo.stop();
};

toot.obstacle.Saucer.prototype.update = function() {

    if (this.spriteSaucer.rotation >= this.rotMax ||
        this.spriteSaucer.rotation <= (this.rotMax * -1)) {
        this.rotInc = this.rotInc * -1;
    }
    this.spriteSaucer.rotation += this.rotInc;

    if (this.debug) {
        var saucer = this;
        this.collisionGroup.forEach(function(child) {
            saucer.game.debug.body(child);
        });
    }
};

toot.obstacle.Saucer.prototype.getColliders = function() {
    return this.collisionGroup;
};

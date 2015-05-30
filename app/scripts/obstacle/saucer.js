
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
    this.collisionGroup.forEach(function(item) {
        item.reset(x, y);
    });
    this.collisionGroup.setAll('body.velocity.x', this.velocity * -1);
};

toot.obstacle.Saucer.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;

    this.collisionGroup = this.game.add.group();
    this.game.physics.arcade.enable(this.collisionGroup);
    //this.collisionGroup.body.allowGravity = false;
    //this.collisionGroup.body.immovable = true;
    this.collisionGroup.checkWorldBounds = true;

    //this.spriteSaucer = this.game.add.sprite(w, 128, 'saucer');
    this.spriteSaucer = this.collisionGroup.create(w, 128, 'saucer');
    //this.spriteSaucer.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this.spriteSaucer);
    this.spriteSaucer.body.allowGravity = false;
    this.spriteSaucer.body.immovable = true;
    this.spriteSaucer.body.setSize(64, 20, 97, 6);

    // Additional collider boxes to match the shape of the saucer more closely
    var c1 = this.collisionGroup.create(w, 128, '');
    this.game.physics.arcade.enable(c1);
    c1.body.allowGravity = false;
    c1.body.immovable = true;
    c1.body.setSize(200, 30, 32, 24);

    var c2 = this.collisionGroup.create(w, 128, '');
    this.game.physics.arcade.enable(c2);
    c2.body.allowGravity = false;
    c2.body.immovable = true;
    c2.body.setSize(200, 30, 32, 66);

    var c3 = this.collisionGroup.create(w, 128, '');
    this.game.physics.arcade.enable(c3);
    c3.allowGravity = false;
    c3.body.immovable = true;
    c3.body.setSize(270, 32, 0, 48);

    this.reset();
};

toot.obstacle.Saucer.prototype.update = function() {
    if (!this.spriteSaucer.inWorld) {
        console.log('saucer is off world!');
        this.reset();
    }

    var saucer = this;
    this.collisionGroup.forEach(function(child) {
        saucer.game.debug.body(child);
    });
};

toot.obstacle.Saucer.prototype.getColliders = function() {
    return this.collisionGroup;
};

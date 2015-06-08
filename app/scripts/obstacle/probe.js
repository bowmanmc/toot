
toot.obstacle.Probe = function(game) {
    this.game = game;

    this.spriteProbe = null;
    this.collisionGroup = null;

    this.velocity = 200;
    this.rotMax = 0.05;
    this.rotInc = 0.005;

    this.debug = false;
};

toot.obstacle.Probe.prototype.preload = function() {
    this.game.load.spritesheet('probe', 'images/probe-spritesheet.png', 276, 100);

    //this.game.load.audio('ufo', 'sounds/ufo-01.wav');
};

toot.obstacle.Probe.prototype.reset = function(x, y) {
    console.log('resetting Probe to ' + x + ', ' + y);
    this.collisionGroup.forEach(function(item) {
        item.reset(x, y);
    });
    this.collisionGroup.setAll('body.velocity.x', this.velocity * -1);

    //this.soundUfo.play('', 0, 1, true, false);
};

toot.obstacle.Probe.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;

    //this.soundUfo = this.game.add.audio('ufo');
    //this.soundUfo.allowMultiple = false;

    this.collisionGroup = this.game.add.group();
    this.game.physics.arcade.enable(this.collisionGroup);
    this.collisionGroup.checkWorldBounds = true;

    this.spriteProbe = this.collisionGroup.create(w, 128, 'probe');
    this.spriteProbe.scale.set(0.5, 0.5);
    this.spriteProbe.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this.spriteProbe);
    this.spriteProbe.body.allowGravity = false;
    this.spriteProbe.body.immovable = true;
    //this.spriteProbe.body.setSize(64, 20, -10, -37);

};

toot.obstacle.Probe.prototype.inWorld = function() {
    return this.spriteProbe.inWorld;
};

toot.obstacle.Probe.prototype.stop = function() {
    //this.soundUfo.stop();
};

toot.obstacle.Probe.prototype.update = function() {

    if (this.spriteProbe.rotation >= this.rotMax ||
        this.spriteProbe.rotation <= (this.rotMax * -1)) {
        this.rotInc = this.rotInc * -1;
    }
    this.spriteProbe.rotation += this.rotInc;

    if (this.debug) {
        var probe = this;
        this.collisionGroup.forEach(function(child) {
            probe.game.debug.body(child);
        });
    }
};

toot.obstacle.Probe.prototype.getColliders = function() {
    return this.collisionGroup;
};

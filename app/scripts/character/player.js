
toot.character.Player = function(game) {
    this.game = game;
    this.spriteToot = null;
    this.spriteBlast = null;

    this.debug = false;
};

toot.character.Player.prototype.preload = function() {
    this.game.load.spritesheet('toot', 'images/toot-spritesheet.png', 64, 96);
    this.game.load.spritesheet('blast', 'images/blast-spritesheet.png', 60, 63);

    this.game.load.audio('fart', 'sounds/fart-02.wav');
};

toot.character.Player.prototype.create = function() {
    // player
    var startX = this.game.world.width * 0.15;
    var startY = this.game.world.height - 256;

    this.spriteToot = this.game.add.sprite(startX, startY, 'toot');
    this.game.physics.arcade.enable(this.spriteToot);

    this.spriteToot.body.gravity.y = toot.gravity;
    this.spriteToot.body.collideWorldBounds = true;

    this.spriteToot.animations.add('run', [5, 6, 7, 8], 6, true);
    this.spriteToot.animations.add('land', [5, 6, 7, 8], 2, true);

    // blast
    this.spriteBlast = this.game.add.sprite(startX - 60, startY + 60, 'blast');
    this.spriteBlast.animations.add('fart', [1, 3, 4, 4, 0], 10, false);

    this.soundFart = this.game.add.audio('fart');
    this.soundFart.allowMultiple = false;
};

toot.character.Player.prototype.update = function(cursors) {
    //  Reset the players velocity (movement)
    this.spriteToot.body.velocity.x = 0;

    //console.log(this.sprite.body.velocity.y);

    if (this.game.input.activePointer.isDown) {
        this.spriteToot.body.velocity.y = toot.fartStrength * -1;
        this.spriteBlast.animations.play('fart');
        //this.soundFart.play('', 0.35, 1, false, false);
        this.soundFart.play('', 0, 1, false, false);
    }
    if (this.spriteToot.body.touching.down) {
        this.spriteToot.animations.play('run');
        this.spriteBlast.frame = 0;
    }
    else if (this.spriteToot.body.velocity.y > 0 &&
             this.spriteToot.body.velocity.y > (toot.fartStrength * 0.66)) {
        this.spriteToot.animations.play('land');
    }
    else {
        this.spriteToot.frame = 4;
    }

    this.spriteBlast.position.x = this.spriteToot.position.x - 38;
    this.spriteBlast.position.y = this.spriteToot.position.y + 80;

    // update toot.state variable
    toot.state['player.y'] = this.spriteToot.position.y + 40;

    if (this.debug) {
        this.game.debug.body(this.spriteToot);
    }
};

toot.character.Player.prototype.getColliders = function() {
    return this.spriteToot;
};

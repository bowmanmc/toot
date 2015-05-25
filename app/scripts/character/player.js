
toot.character.Player = function(game) {
    this.game = game;
    this.sprite = null;
};

toot.character.Player.prototype.preload = function() {
    this.game.load.spritesheet('dude', 'images/toot-spritesheet.png', 64, 96);
};

toot.character.Player.prototype.create = function() {
    // player
    var startX = this.game.world.width * 0.15;
    var startY = this.game.world.height - 256;

    this.sprite = this.game.add.sprite(startX, startY, 'dude');
    this.game.physics.arcade.enable(this.sprite);
    //this.sprite.body.bounce.y = 0.1;
    this.sprite.body.gravity.y = toot.gravity;
    this.sprite.body.collideWorldBounds = true;

    //this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
    this.sprite.animations.add('run', [5, 6, 7, 8], 6, true);
    this.sprite.animations.add('land', [5, 6, 7, 8], 2, true);
};

toot.character.Player.prototype.update = function(cursors) {
    //  Reset the players velocity (movement)
    this.sprite.body.velocity.x = 0;

    //console.log(this.sprite.body.velocity.y);

    if (this.game.input.activePointer.isDown) {
        this.sprite.body.velocity.y = toot.fartStrength * -1;
    }

    if (this.sprite.body.touching.down) {
        this.sprite.animations.play('run');
    }
    else if (this.sprite.body.velocity.y > 0 &&
             this.sprite.body.velocity.y > (toot.fartStrength * 0.66)) {
        this.sprite.animations.play('land');
    }
    else {
        this.sprite.frame = 4;
    }

};

toot.character.Player.prototype.getColliders = function() {
    return this.sprite;
};

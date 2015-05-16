
toot.character.Player = function(game) {
    this.game = game;
    this.sprite;
};

toot.character.Player.prototype.preload = function() {
    this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
};

toot.character.Player.prototype.create = function() {
    // player
    this.sprite = this.game.add.sprite(32, this.game.world.height - 150, 'dude');
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 300;
    this.sprite.body.collideWorldBounds = true;

    this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
    this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
};

toot.character.Player.prototype.update = function(cursors) {
    //  Reset the players velocity (movement)
    this.sprite.body.velocity.x = 0;

    if (cursors.left.isDown) {
        this.sprite.body.velocity.x = -150;
        this.sprite.animations.play('left');
    }
    else if (cursors.right.isDown) {
        this.sprite.body.velocity.x = 150;
        this.sprite.animations.play('right');
    }
    else {
        this.sprite.animations.stop();
        this.sprite.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && this.sprite.body.touching.down) {
        this.sprite.body.velocity.y = -350;
    }
};

toot.character.Player.prototype.getColliders = function() {
    return this.sprite;
};

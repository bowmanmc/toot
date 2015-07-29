
class CharPlayer {

    constructor() {
        this.observers = {};
        this.distance = 0;
        this.blastVelocity = 0;
    }

    create(game) {
        var startX = game.world.width * 0.15;
        var startY = game.world.height - 256;
        this.homePosition = startX;

        this.collisionGroup = game.add.group();
        game.physics.arcade.enable(this.collisionGroup);
        this.collisionGroup.checkWorldBounds = true;

        // spriteToot collider box is the helmet
        this.spriteToot = this.collisionGroup.create(startX, startY, 'player.toot');
        this.spriteToot.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.spriteToot);
        this.spriteToot.body.gravity.y = trConfig.gravity;
        this.spriteToot.body.setSize(40, 40, 0, -10);

        this.spriteToot.animations.add('fart', [1, 1, 0], 4, false);

        // collider for the body
        var c1 = this.collisionGroup.create(startX, startY, '');
        c1.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(c1);
        c1.body.allowGravity = true;
        c1.body.gravity.y = trConfig.gravity;
        c1.body.setSize(28, 28, 8, 24);

        // blast
        this.spriteBlast = game.add.sprite(startX, startY, 'player.blast');
        this.spriteBlast.animations.add('fart', [0, 0, 1, 3, 4, 4, 4, 0], 15, false);

        this.soundFart = game.add.audio('player.fart');
        this.soundFart.allowMultiple = false;
    }

    update(game) {

        //  Reset the players velocity (movement)
        var player = this;
        this.collisionGroup.forEach(function(child) {
            child.body.velocity.x = player.blastVelocity;
        });

        // Update blastVelocity if needed
        if (this.spriteToot.position.x > this.homePosition) {
            var diff = (this.spriteToot.position.x - this.homePosition) / 2;
            if (diff > 40) {
                this.blastVelocity -= 3;
            }
        }
        else {
            this.blastVelocity = 0;
        }

        if (game.input.activePointer.isDown) {

            this.blastVelocity = 25;

            this.collisionGroup.forEach(function(child) {
                child.body.velocity.y = trConfig.player.fartStrength * -1;
            });

            this.spriteToot.animations.play('fart');
            this.spriteBlast.animations.play('fart');
            this.notify('fart', {});

            if (!trConfig.mute && !trConfig.player.mute) {
                this.soundFart.play('', 0, 1, false, false);
            }
        }

        this.spriteBlast.position.x = this.spriteToot.position.x - 72;
        this.spriteBlast.position.y = this.spriteToot.position.y + 34;

        // notify observers...
        this.notify('position', {
            x: this.spriteToot.position.x,
            y: this.spriteToot.position.y + 40
        });
        this.distance++;
        this.notify('distance', this.distance);

        if (trConfig.debug && trConfig.player.debug) {
            this.collisionGroup.forEach(function(child) {
                game.debug.body(child);
            });
        }
    }

    getColliders() {
        return this.collisionGroup;
    }

    inWorld() {
        return this.spriteToot.inWorld;
    }

    notify(event, arg) {
        var callbacks = this.observers[event];
        if (typeof callbacks === 'undefined') {
            return;
        }
        callbacks.forEach(callback => {
            callback(arg);
        });
    }

    registerObserver(event, callback) {
        if (typeof this.observers[event] === 'undefined') {
            this.observers[event] = [];
        }
        this.observers[event].push(callback);
    }
}

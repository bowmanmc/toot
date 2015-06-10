
class CharPlayer {

    constructor() {
        this.observers = {};
    }

    create(game) {
        var startX = game.world.width * 0.15;
        var startY = game.world.height - 256;

        this.spriteToot = game.add.sprite(startX, startY, 'player.toot');
        game.physics.arcade.enable(this.spriteToot);

        this.spriteToot.body.gravity.y = trConfig.gravity;
        this.spriteToot.body.collideWorldBounds = true;

        this.spriteToot.animations.add('run', [5, 6, 7, 8], 6, true);
        this.spriteToot.animations.add('land', [5, 6, 7, 8], 2, true);

        // blast
        this.spriteBlast = game.add.sprite(startX - 60, startY + 60, 'player.blast');
        this.spriteBlast.animations.add('fart', [1, 3, 4, 4, 0], 10, false);

        this.soundFart = game.add.audio('player.fart');
        this.soundFart.allowMultiple = false;
    }

    update(game) {
        //  Reset the players velocity (movement)
        this.spriteToot.body.velocity.x = 0;

        if (game.input.activePointer.isDown) {

            this.spriteToot.body.velocity.y = trConfig.player.fartStrength * -1;
            this.spriteBlast.animations.play('fart');

            if (!trConfig.mute && !trConfig.player.mute) {
                //this.soundFart.play('', 0.35, 1, false, false);
                this.soundFart.play('', 0, 1, false, false);
            }
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
        this.notify('position', {
            x: this.spriteToot.position.x,
            y: this.spriteToot.position.y + 40
        });

        if (trConfig.debug && trConfig.player.debug) {
            game.debug.body(this.spriteToot);
        }
    }

    getColliders() {
        return this.spriteToot;
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

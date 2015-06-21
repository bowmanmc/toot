
class CharWorm {

    constructor() {
        this.velocity = 100;
        this.yPos = 0;
    }

    create(game) {
        var w = game.world.width;
        var h = game.world.height;
        this.yPos = h - (97 + 47);

        this.collisionGroup = game.add.group();
        game.physics.arcade.enable(this.collisionGroup);
        this.collisionGroup.checkWorldBounds = true;

        this.spriteWorm = this.collisionGroup.create(w, 50, 'obs.worm');
        game.physics.arcade.enable(this.spriteWorm);
        this.spriteWorm.body.allowGravity = false;
        this.spriteWorm.body.immovable = true;
    }

    update(game) {
    }

    inWorld() {
        return this.spriteWorm.inWorld;
    }

    stop() {
    }

    reset(x, y) {
        console.log('resetting worm to ' + x);
        var worm = this;
        this.collisionGroup.forEach(item => {
            item.reset(x, worm.yPos);
        });
        this.collisionGroup.setAll('body.velocity.x', this.velocity * -1);
    }

    getColliders() {
        return this.collisionGroup;
    }
}

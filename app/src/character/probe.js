
class CharProbe {

    constructor() {
        this.velocity = 200;
        this.rotMax = 0.05;
        this.rotInc = 0.005;
    }

    create(game) {
        var w = game.world.width;
        var h = game.world.height;

        this.collisionGroup = game.add.group();
        game.physics.arcade.enable(this.collisionGroup);
        this.collisionGroup.checkWorldBounds = true;

        this.spriteProbe = this.collisionGroup.create(w, 128, 'obs.probe');
        this.spriteProbe.scale.set(0.5, 0.5);
        this.spriteProbe.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.spriteProbe);
        this.spriteProbe.body.allowGravity = false;
        this.spriteProbe.body.immovable = true;
    }

    update(game) {
        if (this.spriteProbe.rotation >= this.rotMax ||
            this.spriteProbe.rotation <= (this.rotMax * -1)) {
            this.rotInc = this.rotInc * -1;
        }
        this.spriteProbe.rotation += this.rotInc;

        if (trConfig.obstacle.debug) {
            this.collisionGroup.forEach(child => {
                game.debug.body(child);
            });
        }
    }

    inWorld() {
        return this.spriteProbe.inWorld;
    }

    stop() {
    }

    reset(x, y) {
        console.log('resetting Probe to ' + x + ', ' + y);
        this.collisionGroup.forEach(item => {
            item.reset(x, y);
        });
        this.collisionGroup.setAll('body.velocity.x', this.velocity * -1);
    }

    getColliders() {
        return this.collisionGroup;
    }
}

class CharSaucer {

    constructor() {
        this.velocity = 300;
        this.rotMax = 0.025;
        this.rotInc = 0.0025;
    }

    create(game) {
        var w = game.world.width;
        var h = game.world.height;

        this.soundUfo = game.add.audio('obs.saucer.ufo');
        this.soundUfo.allowMultiple = false;

        this.collisionGroup = game.add.group();
        game.physics.arcade.enable(this.collisionGroup);
        //this.collisionGroup.body.allowGravity = false;
        //this.collisionGroup.body.immovable = true;
        this.collisionGroup.checkWorldBounds = true;

        //this.spriteSaucer = this.game.add.sprite(w, 128, 'saucer');
        this.spriteSaucer = this.collisionGroup.create(w, 128, 'obs.saucer');
        this.spriteSaucer.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.spriteSaucer);
        this.spriteSaucer.body.allowGravity = false;
        this.spriteSaucer.body.immovable = true;
        this.spriteSaucer.body.setSize(64, 20, -10, -37);

        // Additional collider boxes to match the shape of the saucer more closely
        var c1 = this.collisionGroup.create(w, 128, '');
        c1.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(c1);
        c1.body.allowGravity = false;
        c1.body.immovable = true;
        c1.body.setSize(200, 22, -4, -16);

        var c2 = this.collisionGroup.create(w, 128, '');
        c2.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(c2);
        c2.body.allowGravity = false;
        c2.body.immovable = true;
        c2.body.setSize(270, 32, -4, 11);

        var c3 = this.collisionGroup.create(w, 128, '');
        c3.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(c3);
        c3.allowGravity = false;
        c3.body.immovable = true;
        c3.body.setSize(200, 16, -4, 35);
    }

    update(game) {
        if (this.spriteSaucer.rotation >= this.rotMax ||
            this.spriteSaucer.rotation <= (this.rotMax * -1)) {
            this.rotInc = this.rotInc * -1;
        }
        this.spriteSaucer.rotation += this.rotInc;

        if (this.debug) {
            this.collisionGroup.forEach(function(child) {
                game.debug.body(child);
            });
        }
    }

    stop() {
        this.soundUfo.pause();
    }

    reset(x, y) {
        console.log('resetting saucer to ' + x + ', ' + y);
        this.collisionGroup.forEach(item => {
            item.reset(x, y);
        });
        this.collisionGroup.setAll('body.velocity.x', this.velocity * -1);

        if (!trConfig.mute && !trConfig.obstacle.mute) {
            this.soundUfo.play('', 0, 1, true, false);
        }
    }

    getColliders() {
        return this.collisionGroup;
    }

    inWorld() {
        return this.spriteSaucer.inWorld;
    }
}

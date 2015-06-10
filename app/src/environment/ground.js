class EnvGround {

    constructor() {
    }

    create(game) {
        var w = game.world.width;
        var h = game.world.height;

        var yPos = h - 97;
        this.sprite = game.add.tileSprite(0, yPos, w, h, 'ground');

        game.physics.arcade.enable(this.sprite);
        this.sprite.body.immovable = true;

        // bug in phaser 2.3.0
        // see: http://www.html5gamedevs.com/topic/13856-problem-with-collide-method-from-physics-arcade-in-different-versions-of-phaser/?p=79032
        this.sprite.physicsType = Phaser.SPRITE;
    }

    update(game) {
        this.sprite.tilePosition.x -= 0.85;
    }

    getColliders() {
        return this.sprite;
    }
}

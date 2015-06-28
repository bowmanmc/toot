
class EnvBackground {

    constructor() {
    }

    create(game) {
        var w = game.world.width;
        var h = game.world.height;
        this.spaceBg = game.add.tileSprite(0, 0, w, h, 'bg-space');
        this.starsLg = game.add.tileSprite(0, 0, w, h, 'bg-stars-large');
        this.spaceDs = game.add.tileSprite(0, 0, w, h, 'bg-stars-dense');
        this.starsSm = game.add.tileSprite(0, 0, w, h, 'bg-stars-small');

        this.horizon = game.add.tileSprite(0, 156, w, h, 'bg-horizon');
    }

    update(game) {
        this.spaceBg.tilePosition.x -= 0.075;
        this.starsLg.tilePosition.x -= 0.100;
        this.spaceDs.tilePosition.x -= 0.125;
        this.starsSm.tilePosition.x -= 0.150;

    }
}

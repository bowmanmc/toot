
class EnvBackground {

    constructor() {
        console.log('created a new background instance!');
    }

    create(game) {
        console.log('EnvBackground.create()');
        var w = game.world.width;
        var h = game.world.height;
        this.spaceBg = game.add.tileSprite(0, 0, w, h, 'bg-space');
        this.starsLg = game.add.tileSprite(0, 0, w, h, 'bg-stars-large');
        this.spaceDs = game.add.tileSprite(0, 0, w, h, 'bg-stars-dense');
        this.starsSm = game.add.tileSprite(0, 0, w, h, 'bg-stars-small');

        this.horizon = game.add.tileSprite(0, 0, w, h, 'bg-horizon');

        this.mountains1 = game.add.tileSprite(0, 0, w, h, 'bg-mountains-01');
        this.mountains2 = game.add.tileSprite(0, 0, w, h, 'bg-mountains-02');
    }

    update(game) {
        this.spaceBg.tilePosition.x -= 0.075;
        this.starsLg.tilePosition.x -= 0.100;
        this.spaceDs.tilePosition.x -= 0.125;
        this.starsSm.tilePosition.x -= 0.150;

        this.mountains1.tilePosition.x -= 0.20;
        this.mountains2.tilePosition.x -= 0.25;
    }
}

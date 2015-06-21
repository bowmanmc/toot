class UtilPreloader {

    constructor() {

    }

    preload(game) {
        this.loadSprites(game);
        this.loadSpriteSheets(game);
        this.loadAudio(game);
    }

    // Asset Loading...
    loadSprites(game) {
        // background
        game.load.image('bg-space', 'images/bg-space.jpg');
        game.load.image('bg-stars-small', 'images/bg-stars-small.png');
        game.load.image('bg-stars-dense', 'images/bg-stars-small-dense.png');
        game.load.image('bg-stars-large', 'images/bg-stars-large.png');
        game.load.image('bg-horizon', 'images/bg-horizon-gradient.png');
        game.load.image('bg-mountains-01', 'images/bg-mountains-01.png');
        game.load.image('bg-mountains-02', 'images/bg-mountains-02.png');
        // ground
        game.load.image('ground', 'images/ground.jpg');
        game.load.image('vignette', 'images/vignette.png');
    }

    loadSpriteSheets(game) {
        // player
        game.load.spritesheet('player.toot', 'images/toot-spritesheet.png', 64, 96);
        game.load.spritesheet('player.blast', 'images/blast-spritesheet.png', 60, 63);
        // Obstacles
        game.load.spritesheet('obs.saucer', 'images/saucer-spritesheet.png', 276, 100);
        game.load.spritesheet('obs.probe', 'images/probe-spritesheet.png', 128, 107);
        game.load.spritesheet('obs.worm', 'images/moonworm-spritesheet.png', 133, 50);

    }

    loadAudio(game) {
        game.load.audio('player.fart', 'sounds/fart-02.wav');
        game.load.audio('obs.saucer.ufo', 'sounds/ufo-01.wav');
    }
}

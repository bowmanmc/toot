/**
 * ScreenBoot
 *
 * This is the logo/loading screen that shows when the game starts up.
 *      - Show company logo
 *      - Load game assets (graphics, sounds, etc...)
 *      - Show loading progress
 *      - Set mood for game
 *
 */
class ScreenBoot {

    preload(game) {
        this.startTime = moment();
        this.isLoaded = false;
        this.minTime = moment().add(ScreenBoot.MIN_BOOT_TIME, 'seconds');

        console.log('ScreenBoot.preload');
        this.loadSpriteSheets(game);
        this.loadAudio(game);
    }

    create(game) {
        var loadTime = moment();
        var duration = moment.utc(loadTime.diff(this.startTime));
        console.log('Assets loaded in ' + duration.format('HH:mm:ss:SSS'));
        this.isLoaded = true;
    }

    update(game) {
        var now = moment();
        if (this.isLoaded && now.isAfter(this.minTime)) {
            game.state.start('menu');
        }
    }

    // Asset Loading...
    loadSprites() {
    }

    loadSpriteSheets(game) {
        // player
        game.load.spritesheet('player.toot', 'images/toot-spritesheet.png', 64, 96);
        game.load.spritesheet('player.blast', 'images/blast-spritesheet.png', 60, 63);
        // Obstacles
        game.load.spritesheet('obs.saucer', 'images/saucer-spritesheet.png', 276, 100);
        game.load.spritesheet('obs.probe', 'images/probe-spritesheet.png', 128, 107);
    }

    loadAudio(game) {
        game.load.audio('player.fart', 'sounds/fart-02.wav');
        game.load.audio('obs.saucer.ufo', 'sounds/ufo-01.wav');
    }
}

ScreenBoot.MIN_BOOT_TIME = 3; // seconds

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
    }

    create(game) {
        var loadTime = moment();
        var duration = moment.utc(loadTime.diff(this.startTime));
        console.log('ScreenBoot assets loaded in ' + duration.format('HH:mm:ss:SSS'));
        this.isLoaded = true;

        var x = game.world.centerX;
        var y = game.world.centerY;
        var msg = "MorphZero presents";
        var text = game.add.text(x, y, msg, {
            font: "32px Arial",
            fill: "#ddddd9",
            align: "center"
        });
        text.anchor.setTo(0.5, 0.5);
    }

    update(game) {
        var now = moment();
        if (this.isLoaded && now.isAfter(this.minTime)) {
            game.state.start('menu');
        }
    }

}

ScreenBoot.MIN_BOOT_TIME = 1.5; // seconds

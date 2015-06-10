/**
 * ScreenMenu
 *
 * This is the menu screen. Options for:
 *      - Starting a game
 *      - About/Credits page
 *      - Settings page?
 *
 */
class ScreenMenu {

    preload(game) {
        console.log('ScreenMenu.preload start...');
        this.startTime = moment();
        this.isLoaded = false;

        var preloader = new UtilPreloader();
        preloader.preload(game);
    }

    create(game) {
        var loadTime = moment();
        var duration = moment.utc(loadTime.diff(this.startTime));
        console.log('ScreenMenu assets loaded in ' + duration.format('HH:mm:ss:SSS'));
        this.isLoaded = true;

        var x = game.world.centerX;
        var y = game.world.centerY;
        var msg = "play"
        var text = game.add.text(x, y, msg, {
            font: "32px Arial",
            fill: "#ddddd9",
            align: "center"
        });
        text.anchor.setTo(0.5, 0.5);

        game.input.onDown.addOnce(function() {
            game.state.start('play');
        }, this);
    }

    update(game) {

    }

}

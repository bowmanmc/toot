/**
 * ScreenLost
 *
 * Game Over Screen
 */
class ScreenLost {

    preload(game) {
        console.log('ScreenLost.preload start...');
        this.startTime = moment();
        this.isLoaded = false;

    }

    create(game) {
        var loadTime = moment();
        var duration = moment.utc(loadTime.diff(this.startTime));
        console.log('ScreenLost assets loaded in ' + duration.format('HH:mm:ss:SSS'));
        this.isLoaded = true;

        trConfig.setupGame(game);

        var x = game.world.centerX;
        var y = game.world.centerY;
        var msg = "Try Again";
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
}

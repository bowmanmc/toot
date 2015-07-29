var trConfig = {

    debug: true,
    gravity: 300,
    shakeMagnitude: 2,

    mute: false,

    player: {
        debug: false,
        fartStrength: 250,
        mute: false
    },

    obstacle: {
        debug: false,
        mute: true
    },

    setupGame: function(game, enablePhysics) {
        if (enablePhysics) {
            game.physics.startSystem(Phaser.Physics.ARCADE);
        }
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);
        game.scale.refresh();
    }
};

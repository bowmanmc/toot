var toot = {
    //gravity: (300 * 0.27),
    gravity: 300,
    fartStrength: 250,
    currentDistance: 0,

    soundsEnabled: false,

    // namespacing
    character: {},
    environment: {},
    obstacle: {},
    ui: {}
};

var run = function() {
    var game = new Game();
    game.start();
};

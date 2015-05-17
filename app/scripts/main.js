var toot = {
    gravity: (300 - (300 * 0.83)),
    fartStrength: 150
};
toot.environment = {};
toot.character = {};


var run = function() {

    var stats = new Stats();
    document.body.appendChild(stats.domElement);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';

    var game = new Phaser.Game(
        1920, 1080,
        Phaser.AUTO,
        '', {
            preload: preload,
            create: create,
            update: update
        });

    //var cursors;
    var player = new toot.character.Player(game);
    var ground = new toot.environment.Ground(game);
    var background = new toot.environment.Background(game);
    var vignette = new toot.environment.Vignette(game);

    function preload () {
        background.preload();
        ground.preload();
        player.preload();
        vignette.preload();
    }

    function create () {
        // Platforms
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);
        game.scale.refresh();

        background.create();
        ground.create();
        player.create();
        vignette.create();

        // Key Input
        //cursors = game.input.keyboard.createCursorKeys();
    }

    function update() {
        stats.begin();

        game.physics.arcade.collide(player.getColliders(), ground.getColliders());

        player.update();
        background.update();

        stats.end();
    }

};

var toot = {
    //gravity: (300 * 0.27),
    gravity: 300,
    fartStrength: 250,
    currentDistance: 0,

    state: {
        'player.y': 0
    },

    // namespacing
    character: {},
    environment: {},
    obstacle: {},
    ui: {}
};



var run = function() {

    var stats = new Stats();
    document.body.appendChild(stats.domElement);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';

    var game = new Phaser.Game(
        1334, 750,
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

    var uiDistance = new toot.ui.Distance(game);

    var vignette = new toot.environment.Vignette(game);

    var obstacles = new toot.obstacle.Generator(game);

    function preload () {
        background.preload();
        ground.preload();
        player.preload();
        vignette.preload();

        obstacles.preload();

        uiDistance.preload();
    }

    function create () {

        game.physics.startSystem(Phaser.Physics.ARCADE);
        //game.physics.startSystem(Phaser.Physics.NINJA);
        //game.physics.startSystem(Phaser.Physics.P2JS);

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);
        game.scale.refresh();

        // Create game objects
        background.create();
        ground.create();
        player.create();


        obstacles.create();

        //uiDistance.create();

        vignette.create();
    }

    function collisionHandler(toot, obstacle) {
        console.log('collision detected!');
    }

    function update() {
        stats.begin();

        game.physics.arcade.collide(player.getColliders(), ground.getColliders());
        game.physics.arcade.collide(player.getColliders(), obstacles.getColliders(), collisionHandler, null, this);

        background.update();
        ground.update();
        player.update();

        obstacles.update();

        //uiDistance.update();

        toot.currentDistance++;

        stats.end();
    }

};

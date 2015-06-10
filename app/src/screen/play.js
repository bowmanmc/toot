/**
 * ScreenPlay
 *
 * This is the main play/game screen.
 *
 */
class ScreenPlay {

    preload(game) {
        // Create game objects. Order here matters! Layered Back -> Front
        this.objects = [];
        this.objects.push(new EnvBackground());

        this.ground = new EnvGround();
        this.objects.push(this.ground);

        this.player = new CharPlayer();
        this.objects.push(this.player);

        var obstacles = new UtilObstacleGenerator();
        this.objects.push(obstacles);
        this.player.registerObserver(
            'position',
            function(pos) {
                obstacles.updatePlayerPosition(pos);
            }
        );
        this.obstacles = obstacles;

        this.objects.push(new EnvVignette());
    }

    create(game) {
        if (trConfig.debug) {
            this.stats = new Stats();
            document.body.appendChild(this.stats.domElement);
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.top = '0px';
        }

        this.setupGame(game);

        // create()
        this.objects.forEach(obj => {
            obj.create(game);
        });

    }

    update(game) {

        if (trConfig.debug) {
            this.stats.begin();
        }

        // player vs ground
        game.physics.arcade.collide(
            this.player.getColliders(),
            this.ground.getColliders()
        );
        // player vs obstacles
        game.physics.arcade.collide(
            this.player.getColliders(),
            this.obstacles.getColliders(),
            this.obstacleCollisionHandler,
            null,
            this
        );

        // update all objects
        this.objects.forEach(obj => {
            obj.update(game);
        });

        if (trConfig.debug) {
            this.stats.end();
        }
    }

    obstacleCollisionHandler(player, obstacle) {
        console.log('collision detected!');
    }

    setupGame(game) {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);
        game.scale.refresh();
    }
}

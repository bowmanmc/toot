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

        //this.ground = new EnvGround();
        //this.objects.push(this.ground);

        this.player = new CharPlayer();
        this.objects.push(this.player);

        var obstacles = new UtilObstacleGenerator();
        var uiDistance = new UiDistance();
        this.objects.push(obstacles);
        this.objects.push(uiDistance);
        this.player.registerObserver(
            'position',
            function(pos) {
                obstacles.updatePlayerPosition(pos);
            }
        );
        this.player.registerObserver(
            'distance',
            function(distance) {
                obstacles.updatePlayerDistance(distance);
                uiDistance.updatePlayerDistance(distance);
            }
        );
        this.obstacles = obstacles;
        this.uiDistance = uiDistance;

        var playScreen = this;
        this.player.registerObserver(
            'fart',
            function() {
                playScreen.shakeMagnitude = trConfig.shakeMagnitude;
                if (window.navigator && window.navigator.vibrate) {
                    navigator.vibrate(trConfig.shakeMagnitude * 10);
                }
            }
        );

        this.objects.push(new EnvVignette());
    }

    create(game) {
        if (trConfig.debug) {
            this.stats = new Stats();
            document.body.appendChild(this.stats.domElement);
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.top = '0px';
        }

        trConfig.setupGame(game);

        // create()
        this.objects.forEach(obj => {
            obj.create(game);
        });

    }

    update(game) {

        if (trConfig.debug) {
            this.stats.begin();
        }

        // // player vs ground
        // game.physics.arcade.collide(
        //     this.player.getColliders(),
        //     this.ground.getColliders()
        // );
        // player vs obstacles
        game.physics.arcade.collide(
            this.player.getColliders(),
            this.obstacles.getColliders(),
            function() {
                console.log('Player collision detected!');
                this.gameLost(game);
            },
            null,
            this
        );
        if (!this.player.inWorld()) {
            console.log('Player off world!');
            this.gameLost(game);
        }

        // update all objects
        this.objects.forEach(obj => {
            obj.update(game);
        });

        this.shake(game);

        if (trConfig.debug) {
            this.stats.end();
        }
    }

    shake(game) {
        if (this.shakeMagnitude > 0) {
            var rand1 = game.rnd.integerInRange(
                this.shakeMagnitude * -1,
                this.shakeMagnitude
            );
            var rand2 = game.rnd.integerInRange(
                this.shakeMagnitude * -1,
                this.shakeMagnitude
            );
            game.world.setBounds(
                rand1, rand2,
                game.width + rand1, game.height + rand2
            );
            this.shakeMagnitude--;

            if (this.shakeMagnitude <= 0) {
                game.world.setBounds(0, 0, game.width,game.height); // normalize after shake?
            }
        }
    }

    gameLost(game) {
        game.state.start('lost');
    }

}

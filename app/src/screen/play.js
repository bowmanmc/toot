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
        this.objects.push(new EnvGround());

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

    setupGame(game) {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.setScreenSize(true);
        game.scale.refresh();
    }

    update(game) {

        if (trConfig.debug) {
            this.stats.begin();
        }

        // update all objects
        this.objects.forEach(obj => {
            obj.update(game);
        });

        if (trConfig.debug) {
            this.stats.end();
        }
    }

}

/**
 * ScreenPlay
 *
 * This is the main play/game screen.
 *
 */
class ScreenPlay {

    preload(game) {
        this.bg = new EnvBackground();
    }

    create(game) {
        if (trConfig.debug) {
            this.stats = new Stats();
            document.body.appendChild(this.stats.domElement);
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.top = '0px';
        }

        this.bg.create(game);
    }

    update(game) {

        if (trConfig.debug) {
            this.stats.begin();
        }

        this.bg.update(game);


        if (trConfig.debug) {
            this.stats.end();
        }
    }

}

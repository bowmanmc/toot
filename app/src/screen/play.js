/**
 * ScreenPlay
 *
 * This is the main play/game screen.
 *
 */
class ScreenPlay {

    preload(game) {
        // preload assets in UtilPreloader
    }

    create(game) {
        console.log('ScreenPlay.create');

        if (trConfig.debug) {
            this.stats = new Stats();
            document.body.appendChild(this.stats.domElement);
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.top = '0px';
        }
    }

    update(game) {

        if (trConfig.debug) {
            this.stats.begin();
        }


        if (trConfig.debug) {
            this.stats.end();
        }
    }

}

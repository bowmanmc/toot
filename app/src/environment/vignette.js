class EnvVignette {

    constructor() {
    }

    create(game) {
        var w = game.world.width;
        var h = game.world.height;
        this.v = game.add.sprite(0, 0, 'vignette');
    }

    update(game) {
    }

}

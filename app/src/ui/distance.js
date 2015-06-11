class UiDistance {

    constructor() {
        this.playerDistance = 0;
    }

    create(game) {
        var w = game.world.width;
        this.display = game.add.text(16, 16, 'Distance: 0', {
            fontSize: '24px',
            fill: '#ffffee'
        });
    }

    update(game) {
        this.display.text = 'Distance: ' + Math.round(this.playerDistance / 10);
    }

    updatePlayerDistance(distance) {
        this.playerDistance = distance;
    }
}

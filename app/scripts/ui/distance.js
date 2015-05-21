toot.ui.Distance = function(game) {
    this.game = game;
};

toot.ui.Distance.prototype.preload = function() {
};

toot.ui.Distance.prototype.create = function() {
    var w = this.game.world.width;
    this.display = this.game.add.text(16, 16, 'distance: 0', {
        fontSize: '32px', fill: '#fff'
    });
};

toot.ui.Distance.prototype.update = function() {
    this.display.text = 'distance: ' + Math.round(toot.currentDistance / 10);
};

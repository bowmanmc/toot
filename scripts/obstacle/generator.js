toot.obstacle.Generator = function(game) {
    this.game = game;
};

toot.obstacle.Generator.prototype.preload = function() {
    this.game.load.image('rock', 'assets/diamond.png');
};

toot.obstacle.Generator.prototype.create = function() {
    var w = this.game.world.width;
    var h = this.game.world.height;

    //this.rock = this.game.add.sprite(w, h / 2, 'rock');
};

toot.obstacle.Generator.prototype.update = function() {
    //this.rock.position.x -= 2.5;
};
